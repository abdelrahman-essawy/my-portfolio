import React from 'react'
import Image from 'next/image';
import { motion as m } from 'framer-motion'
import JsSVG from './SVG/JsSVG';
import FacebookSVG from './SVG/FacebookSVG';

export default function About() {
  return (
    <m.section
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      
      transition={{ when: 'beforeChildren' }}

      id='About' className='overflow-hidden bg-zinc-50'>
      <m.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, type: 'spring' }}
        className='flex items-center justify-between max-w-screen-xl px-4 py-6 m-auto text-center sm:px-12 sm:py-0 sm:mt-6 sm:text-start sm:space-x-4'>
        <m.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0, type: 'spring' }}

          className='hidden sm:block space py-6 sm:p-0 sm:m-0 text-[0px] pointer-events-none select-none self-end' >
          <Image alt='About Me' width={250} height={381.172} src='/about-me.png' priority={true} />
        </m.div>

        <div className="">
          <h2 className='mb-6 text-3xl tracking-tight text-blue-500 leading-2 sm:mb-10'>About Me</h2>
          <m.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='mt-3 text-base font-medium text-gray-800 lg:text-xl lg: text-start'>

            <ul className='px-5 tracking-wide list-disc sm:list-inside sm:tracking-tight'>
              <li className='mb-2'><span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.</li>
              <li className='mb-2'><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.</li>
              <li className='mb-2'><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</li>
            </ul>

          </m.div>

          <m.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='sm:hidden flex justify-center my-6 text-[0px] pointer-events-none select-none' >
            <Image alt='About Me' width={200} height={304.9} src='/about-me.png' priority={true} />
          </m.div>
          <m.div
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
          </m.div>
        </div>
      </m.div>

    </m.section>
  )
}
