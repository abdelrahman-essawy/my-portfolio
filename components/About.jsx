import React from 'react'
import Image from 'next/image';

export default function About() {
  return (
    <section id='About' className='bg-zinc-50 overflow-hidden'>
      <div className='px-4 sm:px-12 py-6 sm:pb-0 sm:mt-6 m-auto max-w-screen-xl text-center sm:text-start flex justify-between items-center sm:space-x-4'>
        <div className='hidden sm:block space text-[0px] pointer-events-none select-none' >
          <Image alt='About Me' width={250} height={381.172} src='/about-me.png' priority={true} />
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

          <div className=' sm:hidden flex justify-center my-5 text-[0px] pointer-events-none select-none' >
            <Image alt='About Me' width={200} height={304.9} src='/about-me.png' priority={true} />
          </div>
          <div className='flex justify-evenly sm:justify-between xl:mt-28 md:mt-12'>

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
          </div>
        </div>
      </div>
    </section>
  )
}
