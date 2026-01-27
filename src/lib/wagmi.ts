import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, arbitrum, base, polygon } from 'wagmi/chains'

// Lux Network chain definition
const luxNetwork = {
  id: 7777,
  name: 'Lux Network',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: { http: ['https://api.lux.network/rpc'] },
  },
  blockExplorers: {
    default: { name: 'LuxScan', url: 'https://explore.lux.network' },
  },
}

export const config = getDefaultConfig({
  appName: 'Lux ID',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'lux-id-dev',
  chains: [luxNetwork, mainnet, arbitrum, base, polygon, sepolia],
  ssr: true,
})
