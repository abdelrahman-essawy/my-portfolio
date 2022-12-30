import '../styles/globals.css'
import Loading from './loading'
import { Source_Code_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  weights: [300, 400, 500, 600, 700, 800, 900],
})
function MyApp({ Component, pageProps }) {


  return (
    <main className={sourceCodePro.style}>

      <Component fallback={<Loading />} {...pageProps} />
    </main>
  )

}

export default MyApp
