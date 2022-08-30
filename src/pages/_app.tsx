import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/800.css'
import '../styles/global.css'
import '../styles/typography.css'

import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { Footer, Navbar } from '@/components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
    <Navbar />
    <div className="min-h-[700px]">
      <Component {...pageProps} />
    </div>
    <Footer />
  </SessionProvider>
)

export default MyApp
