import '@/styles/globals.css'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import type { AppProps } from 'next/app'





export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Component {...pageProps} />
     <Footer/> 
    </>

  )
}
