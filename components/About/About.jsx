import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { motion as m } from 'framer-motion'
import Timeline from './Timeline';
import useMeasure from 'react-use-measure';

export default function About() {

  const [learnMore, setLearnMore] = useState(false)
  const [ref, { height }] = useMeasure()
  useEffect(() => {
    const screenWidth = window.innerWidth
  }, [])

  return (
    <m.section
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}

      transition={{ when: 'beforeChildren', duration: 0.3 }}

      id='About' className='overflow-hidden bg-zinc-50'>
      <m.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, type: 'spring' }}
        className={`grid max-w-screen-xl grid-cols-1 gap-4 px-6 pt-6 m-auto sm:gap-x-8 sm:px-8 sm:mt-2 sm:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ${learnMore ? `sm:grid-cols-1` : ``}`}>
        <h2 className='hidden col-span-2 mb-6 text-3xl tracking-tight text-center text-blue-500 sm:block leading-2 sm:mb-10'>About Me</h2>

        <m.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0, type: 'spring' }}
          transition={{ duration: 0.3, delay: 0.1 }}

          className={`hidden sm:block py-6 sm:p-0 sm:m-0 text-[0px] pointer-events-none select-none self-end w-96 ${learnMore ? `sm:hidden` : ``}`}>
          <Image
            priority={true}
            width={200}
            height={304.9}
            alt='About Me'
            src='/about-me.webp'
            sizes="100vw"
            style={{
              objectFit: 'cover',
              width: "100%",
              height: "auto"
            }} />
        </m.div>

        <div className="m-auto">
          <h2 className='block mb-6 text-3xl tracking-tight text-center text-blue-500 sm:hidden leading-2 sm:mb-10'>About Me</h2>
          <m.div
            animate={{ height }}
            transition={{ when: 'beforeChildren', type: 'spring', stiffness: 1000, damping: 50, duration: 0.3 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            className={`mt-2 text-base font-medium text-gray-800 sm:text-xl sm:text-start `}>

            {/* <ul className='px-5 tracking-wide list-disc sm:list-inside sm:tracking-tight'>
              <li className='mb-2'><span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.</li>
              <li className='mb-2'><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.</li>
              <li className='mb-2'><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</li>
            </ul> */}
            <div ref={ref}>

              <Timeline learnMore={learnMore} />
            </div>

          </m.div>

          {/* <m.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='sm:hidden flex justify-center my-6 text-[0px] pointer-events-none select-none' >
            <Image alt='About Me' width={200} height={304.9} src='/about-me.png' priority={true} />
          </m.div> */}
          {/* <m.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring' }}
            className='hidden sm:flex sm:justify-between xl:mt-20 md:mt-12'>

            <p className='text-4xl text-gray-800 font-extralight sm:text-6xl'>
              <span className='text-3xl text-gray-500 uppercase sm:text-5xl' >+</span>
              79
              <span className='text-2xl text-gray-500 uppercase sm:text-2xl' > projects</span>
            </p>

            <p className='text-4xl text-gray-800 font-extralight sm:text-6xl'>
              <span className='text-3xl text-gray-500 uppercase sm:text-5xl' >+</span>
              2
              <span className='text-2xl text-gray-500 uppercase sm:text-2xl' > Years</span>
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring' }}
            className='flex justify-evenly sm:hidden xl:mt-20 md:mt-12'>

            <p className='text-4xl text-gray-800 font-extralight sm:text-6xl'>
              <span className='text-3xl text-gray-500 uppercase sm:text-5xl' >+</span>
              79
              <span className='text-2xl text-gray-500 uppercase sm:text-2xl' > projects</span>
            </p>

            <p className='text-4xl text-gray-800 font-extralight sm:text-6xl'>
              <span className='text-3xl text-gray-500 uppercase sm:text-5xl' >+</span>
              2
              <span className='text-2xl text-gray-500 uppercase sm:text-2xl' > Years</span>
            </p>
          </m.div> */}

          <m.button
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring' }}
            viewport={{ once: true }}
            onClick={() => setLearnMore((prev) => !prev)}
            className="my-8 text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center px-4 py-2 text-sm rounded-md ">
              {learnMore ? 'See Less' : 'See More'}
            </span>
          </m.button>

        </div>

      </m.div>

    </m.section>
  );
}
