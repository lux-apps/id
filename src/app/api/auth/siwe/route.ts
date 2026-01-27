import { NextRequest, NextResponse } from 'next/server'
import { SiweMessage, generateNonce } from 'siwe'
import { getSession } from '@/lib/session'

// GET - Generate nonce for SIWE
export async function GET() {
  const session = await getSession()
  const nonce = generateNonce()
  session.nonce = nonce
  await session.save()

  return NextResponse.json({ nonce })
}

// POST - Verify SIWE signature
export async function POST(request: NextRequest) {
  try {
    const { message, signature } = await request.json()
    const session = await getSession()

    const siweMessage = new SiweMessage(message)
    const { data: fields } = await siweMessage.verify({
      signature,
      nonce: session.nonce,
    })

    if (fields.nonce !== session.nonce) {
      return NextResponse.json({ error: 'Invalid nonce' }, { status: 422 })
    }

    session.address = fields.address
    session.chainId = fields.chainId
    session.isLoggedIn = true
    session.nonce = undefined
    await session.save()

    return NextResponse.json({
      ok: true,
      address: fields.address,
      chainId: fields.chainId,
    })
  } catch (error) {
    console.error('SIWE verification error:', error)
    return NextResponse.json({ error: 'Verification failed' }, { status: 400 })
  }
}

// DELETE - Logout
export async function DELETE() {
  const session = await getSession()
  session.destroy()

  return NextResponse.json({ ok: true })
}
