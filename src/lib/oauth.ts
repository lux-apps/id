import * as jose from 'jose'

// OAuth client registry - in production, store in database
export const oauthClients: Record<string, {
  name: string
  redirectUris: string[]
  secret?: string
}> = {
  'lux-vote': {
    name: 'Lux Vote',
    redirectUris: ['https://lux.vote/callback', 'http://localhost:3000/callback'],
  },
  'lux-finance': {
    name: 'Lux Finance',
    redirectUris: ['https://lux.finance/callback', 'http://localhost:3000/callback'],
  },
  'lux-exchange': {
    name: 'Lux Exchange',
    redirectUris: ['https://lux.exchange/callback', 'http://localhost:3000/callback'],
  },
  'lux-network': {
    name: 'Lux Network',
    redirectUris: ['https://lux.network/callback', 'http://localhost:3000/callback'],
  },
  'lux-fund': {
    name: 'Lux Fund',
    redirectUris: ['https://lux.fund/callback', 'http://localhost:3000/callback'],
  },
}

// JWT signing key - in production, use proper key management
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'lux-id-jwt-secret-at-least-32-chars'
)

export async function generateAccessToken(address: string, chainId: number, scope: string) {
  const jwt = await new jose.SignJWT({
    sub: address.toLowerCase(),
    chainId,
    scope,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('https://lux.id')
    .setAudience('https://lux.id')
    .setExpirationTime('1h')
    .sign(secret)

  return jwt
}

export async function generateIdToken(address: string, chainId: number, nonce?: string) {
  const jwt = await new jose.SignJWT({
    sub: address.toLowerCase(),
    chainId,
    nonce,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('https://lux.id')
    .setAudience('https://lux.id')
    .setExpirationTime('1h')
    .sign(secret)

  return jwt
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jose.jwtVerify(token, secret, {
      issuer: 'https://lux.id',
      audience: 'https://lux.id',
    })
    return payload
  } catch {
    return null
  }
}

export function validateClient(clientId: string, redirectUri: string) {
  const client = oauthClients[clientId]
  if (!client) return null
  if (!client.redirectUris.includes(redirectUri)) return null
  return client
}

export function generateAuthorizationCode() {
  // In production, store these in a database with expiry
  return crypto.randomUUID()
}
