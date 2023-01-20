import Head from 'next/head'
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'

import Navbar from '../components/Navbar';
import Spliiter from './../components/Spliiter';

import React, { Suspense, lazy } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from './../components/Footer/Footer';

export default function Home() {
  const [windowScreenWidth, setWindowScreenWidth] = useState(0)

  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    setWindowScreenWidth(window.screen.width)
  }, [])
  const navigation = [
    { name: 'Home', href: '#Home', current: false },
    { name: 'About', href: '#About', current: false },
    { name: 'Skills', href: '#Skills', current: false },
    { name: 'Projects', href: '#Projects', current: false },
    { name: 'Testimonials', href: '#Testimonials', current: false },
    { name: 'Contact', href: '#Contact', current: false },
  ]

  console.log(isSkillsVisible)

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
        <Navbar navigation={navigation} />
      </m.header>

      {/* <div className='h-[1.5px] opacity-40 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></div> */}

      <main className={`overflow-hidden `}>

        <Hero />
        <Spliiter />

        <VisibilitySensor onChange={(visable) => visable && setIsAboutVisible(visable)} delayedCall>
          <About />
        </VisibilitySensor>
        <Spliiter />

        <VisibilitySensor onChange={(visable) => visable && setIsSkillsVisible(visable)} delayedCall>
          <Skills windowScreenWidth={windowScreenWidth} isSkillsVisible={isSkillsVisible} />
        </VisibilitySensor>
        <Spliiter />

        <Projects windowScreenWidth={windowScreenWidth} />
        <Spliiter />


        <VisibilitySensor onChange={(visable) => visable && setIsTestimonialsVisible(visable)} delayedCall>
          <Testimonials windowScreenWidth={windowScreenWidth} isTestimonialsVisible={isProjectsVisible} />
        </VisibilitySensor>
        <Spliiter />


        <Contact />
        <Spliiter />

      </main>
    </>
  )
}
