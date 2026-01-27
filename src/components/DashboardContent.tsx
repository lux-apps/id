'use client'

import { useEffect, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ConnectedApp {
  name: string
  url: string
  lastUsed: string
}

interface DashboardContentProps {
  connectedApps: ConnectedApp[]
}

export default function DashboardContent({ connectedApps }: DashboardContentProps) {
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check session
    fetch('/api/auth/siwe')
      .then(res => res.json())
      .then(data => {
        if (!data.address) {
          router.push('/login')
        } else {
          setIsLoggedIn(true)
        }
      })
  }, [router])

  const handleSignOut = async () => {
    await fetch('/api/auth/siwe', { method: 'DELETE' })
    disconnect()
    router.push('/')
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX ID
          </Link>
          <div className="flex items-center gap-4">
            <ConnectButton />
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Identity</h1>

        {/* Identity Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Wallet Address</p>
              <p className="font-mono text-lg">{address}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">DID</p>
              <p className="font-mono text-sm truncate">did:lux:{address?.slice(2, 12)}...{address?.slice(-8)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Status</p>
              <span className="inline-flex items-center gap-1.5 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Connected Apps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Connected Apps</h2>
          <div className="space-y-3">
            {connectedApps.map((app) => (
              <div
                key={app.name}
                className="flex items-center justify-between p-4 bg-gray-900/50 border border-white/10 rounded-xl"
              >
                <div>
                  <p className="font-medium">{app.name}</p>
                  <p className="text-sm text-gray-400">Last used {app.lastUsed}</p>
                </div>
                <button className="text-sm text-red-400 hover:text-red-300 transition-colors">
                  Revoke
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link
            href="https://lux.vote"
            className="p-4 bg-gray-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <h3 className="font-medium mb-1">Vote</h3>
            <p className="text-sm text-gray-400">Participate in governance</p>
          </Link>
          <Link
            href="https://lux.finance"
            className="p-4 bg-gray-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <h3 className="font-medium mb-1">Finance</h3>
            <p className="text-sm text-gray-400">Earn, advance, stake</p>
          </Link>
          <Link
            href="https://lux.exchange"
            className="p-4 bg-gray-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <h3 className="font-medium mb-1">Exchange</h3>
            <p className="text-sm text-gray-400">Trade assets</p>
          </Link>
        </div>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Sign out
        </button>
      </div>
    </main>
  )
}
