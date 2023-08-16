import Head from "next/head";
import About from "../components/About/About";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import Spliiter from "./../components/Spliiter";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Skills from "./../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "./../components/Footer/Footer";
import Projects from "../components/Projects/Projects";

export default function Home() {
  const [windowScreenWidth, setWindowScreenWidth] = useState(0);

  useEffect(() => {
    setWindowScreenWidth(window.screen.width);
  }, []);
  const navigation = [
    { name: "Home", href: "#Home", current: false },
    { name: "About", href: "#About", current: false },
    { name: "Skills", href: "#Skills", current: false },
    { name: "Testimonials", href: "#Testimonials", current: false },
    { name: "Projects", href: "#Projects", current: false },
    { name: "Contact", href: "#Contact", current: false },
  ];

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
        transition={{
          delay: 0.5,
          ease: "easeOut",
          type: "tween",
          stiffness: 100,
          duration: 0.3,
        }}
        className="sticky top-0 z-50 shadow-sm bg-white/50 backdrop-grayscale"
      >
        <Navbar navigation={navigation} />
      </m.header>

      {/* <div className='h-[1.5px] opacity-40 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></div> */}

      <main className={`overflow-hidden `}>
        <Hero />
        <Spliiter />

        <About />
        <Spliiter />

        <Skills windowScreenWidth={windowScreenWidth} />
        <Spliiter />

        <Projects windowScreenWidth={windowScreenWidth} />
        <Spliiter />

        <Testimonials windowScreenWidth={windowScreenWidth} />
        <Spliiter />

        <Contact />
        <Spliiter />

        <Footer navigation={navigation} />
      </main>
    </>
  );
}
