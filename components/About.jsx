import React from 'react'
import MeSVG from './SVG/MeSVG'
import Me2SVG from './SVG/Me2SVG';

export default function About() {
  return (
    <section id='About' className='bg-zinc-50 overflow-hidden'>
      <div className='px-4 sm:px-12 pt-6 sm:mt-6 m-auto max-w-screen-xl text-center sm:text-start flex justify-between items-center sm:space-x-4'>
        <div className='hidden sm:block' >
          <img width={250} src='about-me.png' />
        </div>

        <div className="self-start">
          <h2 className='text-3xl tracking-tight text-blue-500 leading-2 '>About Me</h2>
          <div className='mt-3 font-medium lg:text-xl lg: text-gray-800 text-base text-start'>

            <ul className='list-disc px-5 sm:list-inside tracking-wide sm:tracking-tight'>
              <li className='mb-2'><span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.</li>
              <li className='mb-2'><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.</li>
              <li className='mb-2'><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</li>
            </ul>
          </div>

          <div className=' sm:hidden flex justify-center my-5' >
            <img width={200} src='about-me.png' />
          </div>
          <div className='flex justify-between xl:mt-28 md:mt-12'>

            <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
              +79<span className='uppercase text-gray-500 text-2xl sm:text-2xl' > projects</span>
            </p>

            <p className='font-extralight text-gray-800 text-4xl sm:text-6xl'>
              +2<span className='uppercase text-gray-500 text-2xl sm:text-2xl' > Years</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
