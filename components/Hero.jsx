import React from 'react'
import ContactSVG from './SVG/ContactSVG';
import FacebookSVG from './SVG/FacebookSVG';
import FiverrSVG from './SVG/FiverrSVG';
import GithubSVG from './SVG/GithubSVG';
import MobileFiverrSVG from './SVG/MobileFiverrSVG';
import UpworkSVG from './SVG/UpworkSVG';
import MobileFacebookSVG from './SVG/MobileFacebook';
import MobileGithubSVG from './SVG/MobileGithubSVG';
import MobileUpworkSVG from './SVG/MobileUpworkSVG';
import JsSVG from './SVG/JsSVG';
import Image from 'next/image';
import LinkedinSVG from './SVG/LinkedinSVG';
import MobileLinkedinSVG from './SVG/MobileLinkedinSVG';

export default function Hero() {

  const navigation = [
    { iconMobile: <MobileFacebookSVG className='rounded-full w-14 h-14' />, icon: <FacebookSVG className='fill-gray-500 h-[74px] w-[164px] hover:fill-[#4267B2]' />, href: 'https://www.facebook.com/abdelrahman.mo.essawy/' },
    { iconMobile: <MobileLinkedinSVG className='fill-[#0a66c2] w-14 h-14' />, icon: <LinkedinSVG className='fill-gray-500 h-[104px] w-[164px] hover:fill-[#0a66c2] scale-90' />, href: 'https://www.linkedin.com/in/abdelrahman-essawy/' },
    { iconMobile: <MobileGithubSVG className='rounded-full w-14 h-14 scale-110' />, icon: <GithubSVG className='fill-gray-500 h-[104px] w-[164px] hover:fill-gray-800 scale-125' />, href: 'https://github.com/abdelrahman-essawy' },
    { iconMobile: <MobileFiverrSVG className='rounded-full w-12 h-12' />, icon: <FiverrSVG className='fill-gray-500 h-[104px] w-[164px] hover:fill-gray-800' />, href: 'https://www.fiverr.com/users/abdelrahman_ess' },
    { iconMobile: <MobileUpworkSVG className='rounded-full w-12 h-12' />, icon: <UpworkSVG className='fill-gray-500 h-[104px] w-[164px] hover:fill-[#14A800] scale-110' />, href: 'https://www.upwork.com/freelancers/~01efec3f377775367a' },
  ]
  return (
    <section id='Home'>
      <div className='rounded-3xl absolute w-20'>
      </div>



      <div className="m-auto py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-0 lg:px-12 sm:flex sm:justify-between sm:items-center">
        <div className='sm:text-start'>
          <h2 className='text-3xl  tracking-tight text-blue-500 md:text-3xl lg:text-4xl leading-2 sm:mb-6'>Hello, I&apos;m</h2>
          <h1 className="my-4 sm:mt-0 text-4xl font-medium tracking-normal text-gray-800 md:text-5xl lg:text-5xl leading-2"><span className='sm:leading-loose md:leading-tight'><span className='text-gray-800 font-base'>Abdelrahman</span> <span className='text-gray-800 font-bold  decoration-3 underline-offset-8 decoration-blue-500'>Essawy</span></span> </h1>
          <p id='glitch' className="mt-8 mb-2 text-xl font-normal text-gray-500 lg:text-2xl">I&apos;m a <span className='type-jobs  font-bold'></span></p>
          <div className="hidden  md:justify-start mb-8 sm:my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <p href="#" className="hidden sm:inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
              Learn more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </p>
            <div className='opacity-60 hover:opacity-100 p-[2px] rounded-lg hover:bg-gradient-to-r from-blue-300 to-emerald-300  focus:ring-4 focus:ring-gray-100  '>
              <a href="#" className="w-full  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-white border ">
                <ContactSVG className="mr-2 -ml-1 w-5 h-5 fill-gray-900" xmlns="http://www.w3.org/2000/svg" />
                Contact me
              </a>
            </div>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start hidden">
            <div className="rounded-md shadow-none sm:shadow">
              <a href="#" className="flex w-full items-center justify-center rounded-md border border-blue-500 bg-blue-500 bg-clip-text text-transparent  px-8 py-3 text-base font-medium  hover:bg-blue-500 hover:text-white hover:bg-clip-padding active:bg-blue-600 md:py-3 md:px-7 md:text-lg">Contact me</a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3  text-base font-medium text-blue-500 hover:bg-blue-200 active:bg-blue-300 md:py-3 md:px-7 md:text-lg">Projects</a>
            </div>
          </div>
        </div>


        <div className=' pointer-events-none select-none'>
          <Image width={500} height={500} alt='Me Image' src='/me.webp' priority={true} />
        </div>

        <div className="mt-5 sm:mt-8 sm:justify-center lg:justify-start block sm:hidden">
          <div className="rounded-md shadow-none sm:shadow">
            <a href="#ContactMeID" className="flex w-full items-center justify-center rounded-md border border-blue-500 bg-blue-500 bg-clip-text text-transparent  px-8 py-3 text-base font-medium  hover:bg-blue-500 hover:text-white hover:bg-clip-padding  sm:active:bg-blue-600 md:py-3 md:px-7 md:text-lg">Contact me</a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="#ProjectsID" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3  text-base font-medium text-blue-500 hover:bg-blue-200 active:bg-blue-300 md:py-3 md:px-7 md:text-lg">Projects</a>
          </div>
        </div>
      </div>
      <hr className=" max-w-4xl mb-4 mx-auto  px-6 hidden"></hr>
      <div className="mb-4 md:mb-0 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">FIND ME IN</span>
        <div className='sm:hidden flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between'>
          {navigation.map((item, index) => (
            <a target={'_blank'}
              rel="noopener noreferrer"
              key={index}
              href={item.href}
              className={'mx-auto lg:mb-0 hover:fill-gray-800'
              }
            >
              {item.iconMobile}
            </a>
          ))}
        </div>
        <div className='hidden sm:flex justify-center items-center mt-8 text-gray-500 sm:justify-evenly gap-x-12 flex-nowrap'>
          {navigation.map((item, index) => (
            <a target={'_blank'}
              rel="noopener noreferrer"
              key={index}
              href={item.href}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>


  )
}
