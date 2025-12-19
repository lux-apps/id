import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX ID
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Your Decentralized Identity
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Self-sovereign identity management for the Web3 era.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Own Your Identity</h2>
          <p className="text-lg text-gray-400">Control your personal data. Share only what you want, with whom you want.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Verified Credentials</h2>
          <p className="text-lg text-gray-400">Issue and receive verifiable credentials that work across all platforms.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy First</h2>
          <p className="text-lg text-gray-400">Zero-knowledge proofs let you prove facts about yourself without revealing sensitive data.</p>
        </div>
      </section>

    </main>
  )
}
