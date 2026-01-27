'use client'

import { useState } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { SiweMessage } from 'siwe'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { address, chainId, isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // OAuth parameters
  const redirectUri = searchParams.get('redirect_uri')
  const clientId = searchParams.get('client_id')
  const state = searchParams.get('state')
  const scope = searchParams.get('scope') || 'openid profile'

  const handleSignIn = async () => {
    if (!address || !chainId) return

    setIsLoading(true)
    setError(null)

    try {
      // Get nonce
      const nonceRes = await fetch('/api/auth/siwe')
      const { nonce } = await nonceRes.json()

      // Create SIWE message
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in to Lux ID',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      // Verify signature
      const verifyRes = await fetch('/api/auth/siwe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature }),
      })

      if (!verifyRes.ok) {
        throw new Error('Verification failed')
      }

      // If this is an OAuth flow, redirect to authorize
      if (redirectUri && clientId) {
        const params = new URLSearchParams({
          redirect_uri: redirectUri,
          client_id: clientId,
          scope,
          ...(state && { state }),
        })
        router.push(`/authorize?${params}`)
      } else {
        // Otherwise go to dashboard
        router.push('/dashboard')
      }
    } catch (err) {
      console.error('Sign in error:', err)
      setError('Failed to sign in. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <Link href="/" className="absolute top-6 left-6 text-xl font-bold tracking-wider">
        LUX
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Sign in to Lux ID</h1>
          <p className="text-gray-400">
            Connect your wallet to access the Lux ecosystem
          </p>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
          {!isConnected ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-gray-400 mb-2">
                Connect your wallet to continue
              </p>
              <ConnectButton />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-full flex items-center justify-center mb-2">
                <ConnectButton />
              </div>
              <button
                onClick={handleSignIn}
                disabled={isLoading}
                className="w-full py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign Message to Continue'}
              </button>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
            </div>
          )}
        </div>

        {clientId && (
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-gray-400 text-center">
              You&apos;re signing in to <span className="text-white font-medium">{clientId}</span>
            </p>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </main>
  )
}
