import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/oauth'

// OAuth UserInfo Endpoint
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'invalid_token' },
      { status: 401 }
    )
  }

  const token = authHeader.slice(7)
  const payload = await verifyToken(token)

  if (!payload) {
    return NextResponse.json(
      { error: 'invalid_token' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    sub: payload.sub,
    address: payload.sub,
    chain_id: payload.chainId,
    // Add more user info as needed
    // ENS name, avatar, etc.
  })
}
