import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';
import Spliiter from './../components/Spliiter';
import { motion as m } from 'framer-motion'
import JsSVG from './../components/SVG/JsSVG';
import ReactSVG from './../components/SVG/ReactSVG';
import { useEffect, useState } from 'react';
import Skills from './../components/Skills/Skills';

export default function Home() {
  const [windowScreenWidth, setWindowScreenWidth] = useState(0)

  useEffect(() => {
    setWindowScreenWidth(window.screen.width)
  }, [])


  return (
    <>
      <Head>
        <title>Abdelrahman Essawy</title>
        <meta name="description" content="Abdelrahman Essawy Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <m.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5, ease: 'easeOut', type: 'tween', stiffness: 100 }}
        className='sticky top-0 z-50 shadow-sm bg-white/50 backdrop-blur-3xl'>
        <Navbar />
      </m.header>

      {/* <div className='h-[1.5px] opacity-40 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></div> */}

      <main className='overflow-hidden'>

        <Hero />
        <Spliiter />

        <About />
        <Spliiter />

        <Skills windowScreenWidth={windowScreenWidth} />
        <Spliiter />

        <Testimonials windowScreenWidth={windowScreenWidth} />
        <Spliiter />

      </main>
    </>
  )
}
