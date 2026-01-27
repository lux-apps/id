'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const LoginContent = dynamic(() => import('@/components/LoginContent'), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </main>
  ),
})

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    }>
      <LoginContent />
    </Suspense>
  )
}
