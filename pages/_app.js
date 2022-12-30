import '../styles/globals.css'
import Loading from './loading'
import { Source_Code_Pro } from '@next/font/google'
import localFont from '@next/font/local'

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--SourceCodePro'
})
const CONSOLA = localFont({
  src: "/public/fonts/CONSOLA.ttf",
  display: "swap",
  styles: "normal",
  variable: "--CONSOLA",
  formats: ["ttf"]
});
function MyApp({ Component, pageProps }) {

  console.log(SourceCodePro.variable)

  return (
    <main className={`${SourceCodePro.variable} ${CONSOLA.variable} font-sans`}>

      <Component fallback={<Loading />} {...pageProps} />
    </main>
  )

}

export default MyApp
