import React from 'react'
import ContactSVG from '../SVG/ContactSVG';
import Image from "next/image";
import FindMeIn from './FindMeIn';
import { motion as m } from 'framer-motion'
import Link from 'next/link';

export default function Hero() {

  return (
    <section id='Home'>
      <div className='absolute w-20 rounded-3xl'>
      </div>

      <div className="max-w-screen-xl px-4 py-8 m-auto mx-auto text-center lg:py-0 lg:px-12 sm:flex sm:justify-between sm:items-center">
        <m.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0, type: 'spring' }}
          className='sm:text-start'>
          <h2 className='text-3xl tracking-tight text-blue-500 md:text-3xl lg:text-4xl leading-2 sm:mb-6'>Hello, I&apos;m</h2>
          <h1 className="my-4 text-4xl font-medium tracking-normal text-gray-800 sm:mt-0 md:text-5xl lg:text-5xl leading-2"><span className='sm:leading-loose md:leading-tight'><span className='text-gray-800 font-base'>Abdelrahman</span> <span className='font-bold text-gray-800 decoration-3 underline-offset-8 decoration-blue-500'>Essawy</span></span> </h1>
          <p id='glitch' className="mt-8 mb-2 text-xl font-normal text-gray-500 lg:text-2xl">I&apos;m a <span className='font-bold type-jobs'></span></p>
          <div className="hidden mb-8 space-y-4 md:justify-start sm:my-8 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <p href="#" className="items-center justify-center hidden px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg sm:inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
              Learn more
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </p>
            <div className='opacity-60 hover:opacity-100 p-[2px] rounded-lg hover:bg-gradient-to-r from-blue-300 to-emerald-300  focus:ring-4 focus:ring-gray-100  '>
              <Link href="#Contact" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border rounded-lg ">
                <ContactSVG className="w-5 h-5 mr-2 -ml-1 fill-gray-900" xmlns="http://www.w3.org/2000/svg" />
                Contact me
              </Link>
            </div>
          </div>
          <div className="hidden mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow-none sm:shadow">
              <Link href="#Contact" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-transparent transition-all duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md bg-clip-text hover:bg-blue-500 hover:text-white hover:bg-clip-padding active:bg-blue-600 md:py-3 md:px-7 md:text-lg">Contact me</Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="#Projects" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-500 transition-all duration-200 ease-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 active:bg-blue-300 md:py-3 md:px-7 md:text-lg">Projects</Link>
            </div>
          </div>
        </m.div>


        <m.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0, type: 'spring' }}
          className='pointer-events-none select-none'>
          <Image
            width={500}
            height={500}
            alt='Me Image'
            src='/me.webp'
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </m.div>

        <div className="block mt-5 sm:mt-8 sm:justify-center lg:justify-start sm:hidden">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring', ease: 'easeOut' }}
            className="rounded-md shadow-none sm:shadow">
            <a href="#ContactMeID" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-transparent bg-blue-500 border border-blue-500 rounded-md bg-clip-text hover:bg-blue-500 hover:text-white hover:bg-clip-padding sm:active:bg-blue-600 md:py-3 md:px-7 md:text-lg">Contact me</a>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring', ease: 'easeOut' }}
            className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="#Projects" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-500 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 active:bg-blue-300 md:py-3 md:px-7 md:text-lg">Projects</Link>
          </m.div>
        </div>
      </div>
      <hr className="hidden max-w-4xl px-6 mx-auto mb-4 "></hr>
      <FindMeIn />
    </section>
  );
}