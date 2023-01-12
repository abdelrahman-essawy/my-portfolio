import '../styles/globals.css'
import Loading from './loading'
import { Source_Code_Pro } from '@next/font/google'

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--SourceCodePro'
})
function MyApp({ Component, pageProps }) {


  return (
    <main className={`${SourceCodePro.variable} font-sans`}>

      <Component fallback={<Loading />} {...pageProps} />
    </main>
  )

}

export default MyApp
