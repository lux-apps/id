'use client'

import React from 'react'
import Link from 'next/link'

const features = [
  {
    title: 'Self-Sovereign',
    description: 'W3C DID standard compliant. Own your identity with user-controlled credentials. No central authority can revoke or modify your attestations.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Privacy-Preserving',
    description: 'Zero-knowledge proofs enable selective disclosure. Prove facts about yourself without revealing sensitive underlying data.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  },
  {
    title: 'Interoperable',
    description: 'Works seamlessly across all Lux chains and EVM-compatible networks. One identity, every blockchain.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    title: 'Quantum-Ready',
    description: 'Post-quantum signatures (ML-DSA, SLH-DSA) ensure your identity remains secure against future quantum threats.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
]

const technicalFeatures = [
  {
    title: 'Lux IAM Integration',
    description: 'Enterprise-grade identity provider with SAML, OIDC, and blockchain attestation support.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'HSM Support',
    description: 'Hardware security module integration for enterprise key protection and FIPS 140-2 compliance.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'MPC Recovery',
    description: 'Threshold-based social recovery with no single point of failure. Recover your identity without seed phrases.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Biometric Auth',
    description: 'Optional biometric binding with on-device verification. Your biometrics never leave your device.',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
  },
]

const useCases = [
  {
    name: 'DeFi Access',
    description: 'Privacy-preserving KYC for regulated DeFi. Prove compliance without exposing personal data.',
  },
  {
    name: 'DAO Governance',
    description: 'Sybil-resistant voting with one-person-one-vote guarantees. Fair governance at scale.',
  },
  {
    name: 'Credential Management',
    description: 'Academic degrees, professional certifications, and membership credentials on-chain.',
  },
  {
    name: 'Cross-Chain Reputation',
    description: 'Portable reputation that follows you across networks. Build once, use everywhere.',
  },
  {
    name: 'Enterprise SSO',
    description: 'Single sign-on with blockchain attestation. Bridge Web2 enterprise systems to Web3.',
  },
]

const authMethods = [
  {
    name: 'Passkeys',
    description: 'WebAuthn-based passwordless authentication',
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  },
  {
    name: 'Hardware Wallets',
    description: 'Ledger, Trezor, and GridPlus support',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
  {
    name: 'Social Recovery',
    description: 'Trusted guardians for account recovery',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    name: 'Multi-Factor',
    description: 'TOTP, SMS, and email verification options',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX ID
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="https://lux.network" className="hover:text-gray-300 transition-colors">Network</Link>
            <Link href="https://lux.exchange" className="hover:text-gray-300 transition-colors">Exchange</Link>
            <Link href="https://docs.lux.network/identity" className="hover:text-gray-300 transition-colors">Docs</Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Sign In
            </Link>
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
          Self-Sovereign Identity for Web3
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX ID
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Own your digital identity. Prove who you are without revealing what you are.
        </p>
        <p className="text-base text-gray-500 mb-8 max-w-2xl">
          Decentralized identity infrastructure with zero-knowledge proofs, post-quantum security, and seamless cross-chain interoperability.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/login"
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

      {/* Core Features */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Identity, Reimagined</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Built on open standards with privacy and security at the core
          </p>
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

      {/* Technical Details */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Enterprise-Grade Infrastructure</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Production-ready identity infrastructure for organizations of any scale
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {technicalFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Flexible Authentication</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Multiple authentication methods to match your security requirements
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {authMethods.map((method) => (
              <div key={method.name} className="text-center p-6 bg-black/50 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={method.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">{method.name}</h3>
                <p className="text-gray-400 text-sm">{method.description}</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase.name} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/login"
              className="inline-block px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Get Started
            </Link>
            <Link
              href="https://docs.lux.network/identity"
              className="inline-block px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors border border-white/10"
            >
              Read the Docs
            </Link>
          </div>
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
            <Link href="https://lux.exchange" className="hover:text-white transition-colors">Exchange</Link>
            <Link href="https://docs.lux.network/identity" className="hover:text-white transition-colors">Docs</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
