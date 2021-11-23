import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Header from 'components/Header'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="leading-normal tracking-normal text-red-400 bg-black h-screen" >
    <div className="h-full">
      <Header />
      <Component {...pageProps} />
    </div> 
    </main>
  )
}

export default MyApp
