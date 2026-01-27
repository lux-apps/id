'use client'

export const dynamic = 'force-dynamic'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

function AuthorizeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [session, setSession] = useState<{ address?: string } | null>(null)

  const redirectUri = searchParams.get('redirect_uri')
  const clientId = searchParams.get('client_id')
  const state = searchParams.get('state')
  const scope = searchParams.get('scope') || 'openid profile'

  useEffect(() => {
    // Check if user is logged in
    fetch('/api/auth/siwe')
      .then(res => res.json())
      .then(data => {
        if (!data.address) {
          // Redirect to login with OAuth params
          const params = new URLSearchParams({
            redirect_uri: redirectUri || '',
            client_id: clientId || '',
            scope,
            ...(state && { state }),
          })
          router.push(`/login?${params}`)
        } else {
          setSession(data)
        }
      })
  }, [redirectUri, clientId, state, scope, router])

  const handleAuthorize = async () => {
    setIsLoading(true)

    // Generate authorization code and redirect
    const code = crypto.randomUUID()

    // Build redirect URL with authorization code
    const url = new URL(redirectUri!)
    url.searchParams.set('code', code)
    if (state) {
      url.searchParams.set('state', state)
    }

    window.location.href = url.toString()
  }

  const handleDeny = () => {
    const url = new URL(redirectUri!)
    url.searchParams.set('error', 'access_denied')
    url.searchParams.set('error_description', 'User denied the request')
    if (state) {
      url.searchParams.set('state', state)
    }
    window.location.href = url.toString()
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    )
  }

  const scopePermissions = scope.split(' ').map(s => {
    switch (s) {
      case 'openid': return 'View your Lux ID'
      case 'profile': return 'Access your wallet address'
      case 'email': return 'Access your email (if set)'
      default: return s
    }
  })

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <Link href="/" className="absolute top-6 left-6 text-xl font-bold tracking-wider">
        LUX
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Authorize Application</h1>
          <p className="text-gray-400">
            <span className="text-white font-medium">{clientId}</span> wants to access your Lux ID
          </p>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3">This will allow the app to:</p>
            <ul className="space-y-2">
              {scopePermissions.map((permission, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {permission}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-4 mb-6">
            <p className="text-sm text-gray-400 mb-1">Signed in as:</p>
            <p className="font-mono text-sm text-white truncate">
              {session.address}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDeny}
              className="flex-1 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-white/10"
            >
              Deny
            </button>
            <button
              onClick={handleAuthorize}
              disabled={isLoading}
              className="flex-1 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Authorizing...' : 'Authorize'}
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          Authorizing will redirect you to {redirectUri ? new URL(redirectUri).hostname : 'the application'}
        </p>
      </div>
    </main>
  )
}

export default function AuthorizePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    }>
      <AuthorizeContent />
    </Suspense>
  )
}
