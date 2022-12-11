import React from 'react'
import Image from 'next/image';
import { motion as m } from 'framer-motion'
import JsSVG from './SVG/JsSVG';
import FacebookSVG from './SVG/FacebookSVG';
import { Element } from 'react-scroll'

export default function About() {
  return (
    <Element id='About'>

      <m.section
        initial={{ opacity: 1, }}
        whileInView={{ opacity: 1, }}
        transition={{ when: 'beforeChildren' }}

        className='bg-zinc-50 overflow-hidden'>
        <m.div
          initial={{ opacity: 0, }}
          transition={{ delay: 0.1 }}
          whileInView={{ opacity: 1, type: 'spring' }}
          className='px-4 sm:px-12 py-6 sm:py-0 sm:mt-6 m-auto max-w-screen-xl text-center sm:text-start flex justify-between items-center sm:space-x-4'>
          <m.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}

            className='hidden sm:block space py-6 sm:p-0 sm:m-0 text-[0px] pointer-events-none select-none self-end' >
            <Image alt='About Me' width={250} height={381.172} src='/about-me.png' priority={true} />
          </m.div>

          <div className="">
            <h2 className='text-3xl tracking-tight text-blue-500 leading-2 sm:mb-10 mb-6'>About Me</h2>
            <m.div
              initial={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.1 }}
              whileInView={{ opacity: 1, x: 0, type: 'spring' }}
              className='mt-3 font-medium lg:text-xl lg: text-gray-800 text-base text-start'>

              <ul className='list-disc px-5 sm:list-inside tracking-wide sm:tracking-tight'>
                <li className='mb-2'><span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.</li>
                <li className='mb-2'><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.</li>
                <li className='mb-2'><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</li>
              </ul>

            </m.div>

            <m.div
              initial={{ opacity: 0, x: -10 }}
              transition={{ delay: 0.1 }}
              whileInView={{ opacity: 1, x: 0, type: 'spring' }}
              className='sm:hidden flex justify-center my-6 text-[0px] pointer-events-none select-none' >
              <Image alt='About Me' width={200} height={304.9} src='/about-me.png' priority={true} />
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1, y: 0, type: 'spring' }}
              className='hidden sm:flex sm:justify-between xl:mt-20 md:mt-12'>

              <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
                <span className='uppercase text-gray-500 text-3xl sm:text-5xl' >+</span>
                79
                <span className='uppercase text-gray-500 text-2xl sm:text-2xl' > projects</span>
              </p>

              <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
                <span className='uppercase text-gray-500 text-3xl sm:text-5xl' >+</span>
                2
                <span className='uppercase text-gray-500 text-2xl sm:text-2xl' > Years</span>
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0, type: 'spring' }}
              className='flex justify-evenly sm:hidden xl:mt-20 md:mt-12'>

              <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
                <span className='uppercase text-gray-500 text-3xl sm:text-5xl' >+</span>
                79
                <span className='uppercase text-gray-500 text-2xl sm:text-2xl' > projects</span>
              </p>

              <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
                <span className='uppercase text-gray-500 text-3xl sm:text-5xl' >+</span>
                2
                <span className='uppercase text-gray-500 text-2xl sm:text-2xl' > Years</span>
              </p>
            </m.div>
          </div>
        </m.div>

      </m.section>
    </Element>
  )
}
