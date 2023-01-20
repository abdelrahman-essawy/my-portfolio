'use client';
import { motion as m } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react';

const Navbar = lazy(() => import('../components/Navbar' /* webpackChunkName: "Navbar" */));
const About = lazy(() => import('../components/About/About' /* webpackChunkName: "About" */));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials' /* webpackChunkName: "Testimonials" */));
const Hero = lazy(() => import('../components/Hero/Hero' /* webpackChunkName: "Hero" */));
const Skills = lazy(() => import('../components/Skills/Skills' /* webpackChunkName: "Skills" */));
const Contact = lazy(() => import('../components/Contact/Contact' /* webpackChunkName: "Contact" */));
const Footer = lazy(() => import('../components/Footer/Footer' /* webpackChunkName: "Footer" */));
const Projects = lazy(() => import('../components/Projects/Projects' /* webpackChunkName: "Projects" */));
const Loading = lazy(() => import('./loading' /* webpackChunkName: "Loading" */));
const Spliiter = lazy(() => import('../components/Spliiter' /* webpackChunkName: "Spliiter" */));

export default function Home() {
    const [windowScreenWidth, setWindowScreenWidth] = useState(0)

    useEffect(() => {
        setWindowScreenWidth(window.screen.width)
    }, [window.screen.width])
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
        </>
    )
}
