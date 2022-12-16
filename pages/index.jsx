import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';
import Spliiter from './../components/Spliiter';
import { motion } from 'framer-motion'
import JsSVG from './../components/SVG/JsSVG';
import ReactSVG from './../components/SVG/ReactSVG';
import Carousel from './../components/Testimonials/Carousel';
import { useEffect, useState } from 'react';

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
      <header className='sticky top-0 z-50 shadow-sm bg-white/50 backdrop-blur-3xl'>
        <Navbar />
      </header>

      {/* <div className='h-[1.5px] opacity-40 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></div> */}
      <motion.main>

        <Hero />
        <Spliiter />
        <About />
        <Spliiter />
        <Testimonials windowScreenWidth={windowScreenWidth} />
        <Spliiter />

      </motion.main>

    </>
  )
}
