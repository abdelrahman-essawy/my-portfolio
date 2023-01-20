import Head from 'next/head'
import About from '../components/About/About';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';
import Spliiter from '../components/Spliiter';
import { motion as m } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';


export default function Home() {
  const [windowScreenWidth, setWindowScreenWidth] = useState(0)

  useEffect(() => {
    setWindowScreenWidth(window.screen.width)
  }, [])
  const navigation = [
    { name: 'Home', href: '#Home', current: false },
    { name: 'About', href: '#About', current: false },
    { name: 'Skills', href: '#Skills', current: false },
    { name: 'Testimonials', href: '#Testimonials', current: false },
    { name: 'Projects', href: '#Projects', current: false },
    { name: 'Contact', href: '#Contact', current: false },
  ]

  const components = [
    { name: 'Hero', component: <Hero /> },
    { name: 'About', component: <About /> },
    { name: 'Skills', component: <Skills windowScreenWidth={windowScreenWidth} /> },
    { name: 'Projects', component: <Projects windowScreenWidth={windowScreenWidth} /> },
    { name: 'Testimonials', component: <Testimonials windowScreenWidth={windowScreenWidth} /> },
    { name: 'Contact', component: <Contact /> },
    { name: 'Footer', component: <Footer navigation={navigation} /> },

  ]


  return (
    <>
      <Head>
        <title>Abdelrahman Essawy</title>
        <meta name="description" content="Abdelrahman Essawy Portfolio" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Suspense fallback={<div className="absolute inset-0 flex bg-slate-500">loadiung</div>} >
        <m.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', type: 'tween', stiffness: 100 }}
          className='sticky top-0 z-50 shadow-sm bg-white/50 backdrop-blur-3xl'>
          <Navbar navigation={navigation} />
        </m.header>

        <main className={`overflow-hidden `}>

          {components.map(({ component }, index) => {
            return (
              <m.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .5, ease: 'easeOut', type: 'tween', stiffness: 100 }}
                viewport={{ once: true }}
                key={index}>
                {component}
                <Spliiter />
              </m.section>
            )
          })}

        </main>
      </Suspense>
      </>
  )
}
