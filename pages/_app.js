import '../styles/globals.css'
import { Source_Code_Pro } from '@next/font/google'
import Loading from './Loading'
import { Suspense } from 'react'

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--SourceCodePro'
})
function MyApp({ Component, pageProps }) {


  return (
    <Suspense fallback={<Loading />}>
      <main className={`${SourceCodePro.variable} font-sans min-h-screen min-w-full`}>
        <Component {...pageProps} />
      </main>
    </Suspense>
  )

}

export default MyApp
