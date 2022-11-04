import React from 'react'
import MeSVG from './SVG/MeSVG'

export default function About() {
  return (
    <section id='About' className='bg-zinc-50'>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className='text-3xl tracking-tight text-blue-500 leading-2'>About Me</h2>
        <p className='mt-3 font-medium lg:text-xl lg: text-gray-800 text-base'> <span className='font-bold'>Energetic</span> university student with upcoming<span className='font-bold'> Bachelor of Science</span>  degree.<br/><span className='font-bold'>Detail-oriented</span> and <span className='font-bold'>motivated</span> to stay on task, Meet aggressive timelines and accomplish goals.<br/><span className='font-bold'>Strong analytical</span>  and <span className='font-bold'>organizational skills</span>  within industry.</p>
        </div>
    </section>
  )
}
