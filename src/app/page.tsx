'use client'

import React from 'react'
import Link from 'next/link'

const features = [
  {
    title: 'Self-Sovereign',
    description: 'Own your identity. No central authority can revoke or modify your credentials.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Privacy-Preserving',
    description: 'Zero-knowledge proofs let you prove facts without revealing sensitive data.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  },
  {
    title: 'Interoperable',
    description: 'W3C DID standard compatible. Use your identity across any platform.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    title: 'Quantum-Ready',
    description: 'Post-quantum cryptography ensures your identity remains secure for decades.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
]

const useCases = [
  { name: 'DeFi Access', description: 'KYC-compliant access to regulated DeFi protocols' },
  { name: 'DAO Governance', description: 'One-person-one-vote with Sybil resistance' },
  { name: 'Reputation', description: 'Portable reputation across platforms and chains' },
  { name: 'Credentials', description: 'Academic, professional, and membership credentials' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="https://lux.network" className="hover:text-gray-300 transition-colors">Network</Link>
            <Link href="https://docs.lux.network/identity" className="hover:text-gray-300 transition-colors">Docs</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        </div>
        <p className="text-base text-gray-400 mb-4">
          Self-sovereign identity for the decentralized web
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX ID
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          Own your digital identity. Prove who you are without revealing what you are.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.id"
            className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Create Identity
          </Link>
          <Link
            href="https://docs.lux.network/identity"
            className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors border border-white/10"
          >
            Documentation
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Identity, Reimagined</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-black/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Use Cases</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            One identity, infinite possibilities
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase.name} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{useCase.name}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Identity</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have reclaimed their digital sovereignty.
            Your identity, your rules.
          </p>
          <Link
            href="https://app.lux.id"
            className="inline-block px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lux ID. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="https://lux.network" className="hover:text-white transition-colors">Network</Link>
            <Link href="https://lux.market" className="hover:text-white transition-colors">Market</Link>
            <Link href="https://lux.exchange" className="hover:text-white transition-colors">Exchange</Link>
            <Link href="https://lux.fund" className="hover:text-white transition-colors">Fund</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
