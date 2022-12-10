"use client"
import Head from 'next/head'
import About from '../components/About';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
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

      <header className='sticky top-0 z-50 shadow-sm bg-white/50 backdrop-blur-3xl'>
      <Spliiter />
      <Navbar />
      {/* <div className='h-[1.5px] opacity-40 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></div> */}
      </header>

      <main className='relative'>

      <Hero />
      <Spliiter />
      <About />
      <Spliiter />
      <Testimonials />
      <Spliiter />
      </main>

      

    </>
  )
}
