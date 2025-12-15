'use client'

import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { ChatWidget, Footer, Main } from '@luxfi/ui'

import siteDef from '../site-def'

const reviews = [
  {
    text: 'Lux Defi is amazing!',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Lux is revolutionizing the blockchain world by seamlessly merging commodities like gold and silver with digital technology.',
    author: 'Giovanna Mingarelli',
    href: 'https://trstp.lt/a55NNi_j9'
  },
  {
    text: 'Setting the bar for innovation, development and execution within an ever evolving mix of AI, Blockchain, Design and Finance.',
    author: 'Ole Brereton',
    href: 'https://trstp.lt/gOB3GTbOb'
  }
]

const Page = () => {
  return (<>
    <Main className='h-screen -mt-[44px] md:-mt-[80px]'>
      <ApplyTypography className='flex flex-col gap-8 m-auto text-center'>
        <h1>LUX ID</h1>
        <div className='flex flex-col gap-4 max-w-[40rem] mx-auto'>
          <h5>Connect your wallet to access your Lux ID.</h5>
          <p className='text-muted-foreground'>Web3 wallet integration coming soon.</p>
        </div>
        <div className='flex flex-col gap-4 mt-8'>
          {reviews.map((review, i) => (
            <div key={i} className='text-sm text-muted-foreground italic'>
              "{review.text}" - {review.author}
            </div>
          ))}
        </div>
      </ApplyTypography>
    </Main>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
    />
  </>)
}

export default Page
