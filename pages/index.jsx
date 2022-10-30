import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Hero from './../components/Hero';
import Spliiter from './../components/Spliiter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdelrahman Essawy</title>
        <meta name="description" content="Abdelrahman Essawy Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Navbar/>
      <Spliiter/>
      <Hero/>
      <Spliiter/>

    </>
  )
}
