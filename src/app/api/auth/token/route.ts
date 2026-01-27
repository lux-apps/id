import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { generateAccessToken, generateIdToken, validateClient } from '@/lib/oauth'

// OAuth Token Endpoint
export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const grantType = formData.get('grant_type')
  const code = formData.get('code')
  const redirectUri = formData.get('redirect_uri')
  const clientId = formData.get('client_id')

  if (grantType !== 'authorization_code') {
    return NextResponse.json(
      { error: 'unsupported_grant_type' },
      { status: 400 }
    )
  }

  if (!code || !redirectUri || !clientId) {
    return NextResponse.json(
      { error: 'invalid_request' },
      { status: 400 }
    )
  }

  const client = validateClient(clientId as string, redirectUri as string)
  if (!client) {
    return NextResponse.json(
      { error: 'invalid_client' },
      { status: 401 }
    )
  }

  // In production, validate the authorization code from database
  // For now, we'll use session-based flow
  const session = await getSession()

  if (!session.isLoggedIn || !session.address) {
    return NextResponse.json(
      { error: 'invalid_grant' },
      { status: 400 }
    )
  }

  const scope = session.oauthScope || 'openid profile'
  const accessToken = await generateAccessToken(
    session.address,
    session.chainId || 1,
    scope
  )
  const idToken = await generateIdToken(
    session.address,
    session.chainId || 1
  )

  return NextResponse.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: 3600,
    id_token: idToken,
    scope,
  })
}
