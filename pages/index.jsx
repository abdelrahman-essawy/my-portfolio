import Head from 'next/head'
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'

import Navbar from '../components/Navbar';
import Spliiter from './../components/Spliiter';

import React, { Suspense, lazy } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Loading from './Loading';

const Hero = lazy(() => import('../components/Hero/Hero' /* webpackChunkName: "Hero" */));
const About = lazy(() => import('../components/About/About' /* webpackChunkName: "About" */));
const Skills = lazy(() => import('./../components/Skills/Skills' /* webpackChunkName: "Skills" */));
const Projects = lazy(() => import('../components/Projects/Projects' /* webpackChunkName: "Projects" */));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials' /* webpackChunkName: "Testimonials" */));
const Contact = lazy(() => import('../components/Contact/Contact' /* webpackChunkName: "Contact" */));
const Footer = lazy(() => import('./../components/Footer/Footer' /* webpackChunkName: "Footer" */));

export default function Home() {
  const [windowScreenWidth, setWindowScreenWidth] = useState(0)

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(true);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

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

      <Suspense fallback={<Loading />}>

        <main className={`overflow-hidden `}>

          <Hero />
          <Spliiter />

          <About />
          <Spliiter />

          <VisibilitySensor onChange={(visable) => visable && setIsSkillsVisible(visable)} delayedCall>
            <Skills windowScreenWidth={windowScreenWidth} isSkillsVisible={isSkillsVisible} />
          </VisibilitySensor>
          <Spliiter />

          <VisibilitySensor onChange={(visable) => visable && setIsProjectsVisible(visable)} delayedCall>
            <Projects windowScreenWidth={windowScreenWidth} isProjectsVisible={isProjectsVisible} />
          </VisibilitySensor>
          <Spliiter />


          <VisibilitySensor onChange={(visable) => visable && setIsTestimonialsVisible(visable)} delayedCall>
            <Testimonials windowScreenWidth={windowScreenWidth} isTestimonialsVisible={isTestimonialsVisible} />
          </VisibilitySensor>
          <Spliiter />

          <Contact windowScreenWidth={windowScreenWidth} isContactVisible={isContactVisible} />
          <Spliiter />

          <Footer navigation={navigation} />

        </main>
      </Suspense>







      {/* <VisibilitySensor onChange={(visable) => visable && setIsAboutVisible(visable)} delayedCall>
            <About />
          </VisibilitySensor>
          <Spliiter />

          <VisibilitySensor onChange={(visable) => visable && setIsSkillsVisible(visable)} delayedCall>
            <Skills windowScreenWidth={windowScreenWidth} isSkillsVisible={isSkillsVisible} />
          </VisibilitySensor>
          <Spliiter />

          <VisibilitySensor onChange={(visable) => visable && setIsProjectsVisible(visable)} delayedCall>
            <Projects windowScreenWidth={windowScreenWidth} isProjectsVisible={isProjectsVisible} />
          </VisibilitySensor>
          <Spliiter />


          <VisibilitySensor onChange={(visable) => visable && setIsTestimonialsVisible(visable)} delayedCall>
            <Testimonials windowScreenWidth={windowScreenWidth} isTestimonialsVisible={isTestimonialsVisible} />
          </VisibilitySensor>
          <Spliiter />

          <Contact isContactVisible={isContactVisible} />
          <Spliiter /> */}

    </>
  )
}
