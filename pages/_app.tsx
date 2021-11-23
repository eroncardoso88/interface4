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
// https://triadps-my.sharepoint.com/:v:/r/personal/luizp_xgrow_com/Documents/Grava%C3%A7%C3%B5es/Meeting%20with%20Luiz%20Parpinelli%20-%20XGROW-20211117_145430-Meeting%20Recording.mp4?csf=1&web=1&e=SaCGYM
export default MyApp
