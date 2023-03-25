import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextNProgress color="#00529D" />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
