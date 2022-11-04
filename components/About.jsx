import React from 'react'
import MeSVG from './SVG/MeSVG'
import Me2SVG from './SVG/Me2SVG';

export default function About() {
  return (
    <section id='About' className='bg-zinc-50'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-start lg:py-16 lg:px-12  flex justify-between items-center'>
        <div>
          <img width={600} src='about-me.png' />
        </div>
        <div className="">
          <h2 className='text-3xl tracking-tight text-blue-500 leading-2'>About Me</h2>
          <p className='mt-3 font-medium lg:text-xl lg: text-gray-800 text-base'> <span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.<br /><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.<br /><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</p>
          <div className='flex justify-between mt-28'>

          <p className='font-extralight text-gray-800 text-6xl'>
          +17<span className='uppercase text-gray-500 text-2xl' >projects</span>
          </p>
          <p className='font-extralight text-gray-800 text-6xl'>
          +352<span className='uppercase text-gray-500 text-2xl' >hours</span>
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
