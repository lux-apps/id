'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const connectedApps = [
  { name: 'Lux Vote', url: 'https://lux.vote', lastUsed: '2 hours ago' },
  { name: 'Lux Finance', url: 'https://lux.finance', lastUsed: 'Yesterday' },
  { name: 'Lux Exchange', url: 'https://lux.exchange', lastUsed: '3 days ago' },
]

// Dynamically import components that use wagmi hooks
import dynamic from 'next/dynamic'

const DashboardContent = dynamic(() => import('@/components/DashboardContent'), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </main>
  ),
})

export default function DashboardPage() {
  return <DashboardContent connectedApps={connectedApps} />
}
