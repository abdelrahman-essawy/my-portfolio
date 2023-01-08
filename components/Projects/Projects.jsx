import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import MobileGithubSVG from '../SVG/MobileGithubSVG';
import Link from 'next/link';

export default function Projects() {

    const [hoveredOnShareButton, setHoveredOnShareButton] = useState(false)
    const projects = [
        {
            name: 'Mascot',
            description: `Track all cryptocurrencies, gold and Currencies latest prices and news.`,
            image: '/object.png',
            skillsUsed: ['Next.js', 'TailwindCSS', 'Framer Motion', 'REST API'],
            link: 'https://mascot-app.vercel.app/',
            github: 'https://github.com/abdelrahman-essawy/mascot-app'
        },
        {
            name: 'My Portifolio',
            description: `
            This is my portifolio website. I built it using Next.js, TailwindCSS and Framer Motion.
            `
            ,
            image: '/409-4096115_macbook-pro-mockup-cvn-web-development-companies-in.png',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: 'https://essawy.me',
            github: 'https://github.com/abdelrahman-essawy/my-portfolio'
        },
        {
            name: 'AAST E-Learning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/object.png',
            skillsUsed: ['React', 'Framer Motion'],
            link: 'https://aast-e-learning.vercel.app/',
            github: 'https://github.com/abdelrahman-essawy/AAST-E-Learning-Platform'
        },
        {
            name: 'Quizz App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            skillsUsed: ['React', 'TailwindCSS', 'Redux', 'REST API',],
            link: '',
            github: ''
        },
        {
            name: 'Mas2cot',
            description: `
            Track all cryptocurrencies, gold and Currencies latest prices and news.
`,
            image: '/object.png',
            skillsUsed: ['Next.js', 'TailwindCSS', 'Framer Motion', 'REST API'],
            link: '',
            github: ''
        },
        {
            name: 'My Por3tifolio',
            description: `
            This is my portifolio website. I built it using Next.js, TailwindCSS and Framer Motion.
            `
            ,
            image: '/409-4096115_macbook-pro-mockup-cvn-web-development-companies-in.png',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },
        {
            name: 'Pro41ject 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/object.png',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },
        {
            name: 'Proj23ect 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/object.png',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },

    ]
    return (

        <m.section
            id='Projects'
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='relative px-4 py-6 overflow-hidden sm:py-0 bg-zinc-50 '>
            <div className='px-12 sm:mt-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2 '>Projects</h2>
            </div>
            <h3 className='my-4 text-xl text-center text-gray-500 sm:mb-8 sm:tracking-normal leading-2'>
                Here are some of my projects.
            </h3>


            <div className='max-w-screen-2xl m-auto mx-auto text-center sm:flex sm:justify-center sm:items-center sm:px-6 lg:px-8'>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-4 items-start`}>
                    {
                        projects
                            .slice(0, 4)
                            .map((
                                {
                                    name,
                                    description,
                                    image,
                                    skillsUsed,
                                    link,
                                    github
                                }, index) => {
                                return (
                                    <m.div
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{
                                            opacity: 1, x: 0,
                                        }}
                                        transition={{
                                            delay: index * 0.2,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 20,
                                            mass: 0.5,
                                            duration: 0.5,
                                        }}


                                        key={index}
                                        className='grid relative max-w-sm grid-rows-5 items-center justify-center mx-2 my-4  bg-white rounded-lg outline-gray-200 outline-1 outline'>
                                        <div className={`absolute top-0 z-20  inset-x-0 p-3  ${image ? `` : ` `}`}>
                                            <div className='flex items-start justify-between'>
                                                <m.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onHoverStart={() => setHoveredOnShareButton(true)}
                                                    onHoverEnd={() => setHoveredOnShareButton(false)}
                                                    className='bg-white rounded-full p-1 outline-gray-200 outline-1 outline'>
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0 0 15 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 0 0 5 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 0 0 1.7-.675l5.938 3.463a2.339 2.339 0 0 0-.067.546A2.428 2.428 0 1 0 15 13.442z" />
                                                    </svg>
                                                    <div className={`grid ${hoveredOnShareButton ? `block` : `hidden`} grid-rows-3`}>
                                                        asd
                                                    </div>
                                                </m.button>


                                            </div>

                                        </div>
                                        <div className='absolute -top-2 -right-2 z-20 h-4 w-4  bg-zinc-50 rounded-full outline-gray-200 outline-1 outline'>
                                            <div className='absolute flex inset-0 justify-center items-center '>
                                                <div className='p-1 absolute bg-green-500  rounded-full ' />
                                                <div className='p-1 absolute bg-green-500  rounded-full opacity-75 animate-ping' />
                                            </div>
                                        </div>
                                        <div className='overflow-hidden rounded-t-lg row-span-2 relative w-full h-full flex items-center justify-center  bg-gray-100'>
                                           
                                            <m.div
                                                whileHover={{
                                                    scale: 1.05, backgroundColor: '#e0e0e0', transition: {
                                                        type: 'tween',
                                                        duration: 0.3,
                                                        ease: 'easeOut'

                                                    }
                                                }}
                                                className={`absolute inset-0 flex`}>
                                                {
                                                    image ?

                                                        <Image
                                                            className={`${image ? `p-7` : ``}`}
                                                            src={image}
                                                            alt={name}
                                                            fill
                                                            style={{ objectFit: 'contain' }}
                                                        >
                                                        </Image>




                                                        :
                                                        <div className='text-3xl font-light text-gray-500 m-auto '>
                                                            {name}
                                                        </div>                                                        
                                                }


                                            </m.div>
                                            
                                        </div>

                                        <div className='rounded-b-lg grid w-full grid-rows-3 gap-3 sm:p-7 p-4 bg-white z-10 row-span-3'>


                                            <div className='grid fgrid-rows-2 gap-y-2'>
                                                <h3 className='text-xl text-gray-800 font-light'>{name}</h3>
                                                <p className='text-sm text-gray-500 font-light'>{description}</p>
                                            </div>
                                            <div className='grid grid-cols-2 items-center gap-3 font-SourceCodePro'>
                                                {
                                                    skillsUsed.map((skill, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className={`flex items-center justify-center text-xs font-medium px-3 py-2 text-gray-800 bg-gray-100 rounded-md font-SourceCodePro ${skillsUsed.length % 2 != 0 && skillsUsed.length - 1 === index ? `col-span-2` : ``}`}>
                                                                {skill}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='grid items-center justify-center grid-cols-1 gap-3 '>
                                                <a
                                                    href={link}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600'>

                                                    <div>
                                                        <svg
                                                            height="1em"
                                                            width="1em"
                                                            viewBox="0 0 24 24"
                                                            style={{ width: "auto", height: "auto" }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.343 4.939a1 1 0 0 1 0 1.414 8.003 8.003 0 0 0 0 11.317 1 1 0 0 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.145a1 1 0 0 1 1.414 0Zm12.731 0c3.907 3.906 3.907 10.24 0 14.145a1 1 0 0 1-1.414-1.414 8.003 8.003 0 0 0 0-11.317 1 1 0 1 1 1.414-1.414ZM9.31 7.812a1 1 0 0 1 0 1.414 3.92 3.92 0 0 0 0 5.544 1 1 0 0 1-1.414 1.415 5.92 5.92 0 0 1 0-8.373 1 1 0 0 1 1.414 0Zm6.959 0a5.92 5.92 0 0 1 0 8.373 1 1 0 0 1-1.414-1.415 3.92 3.92 0 0 0 0-5.544 1 1 0 1 1 1.414-1.414Zm-4.187 2.77a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                                                                fill="#ffffff"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        Live
                                                    </div>
                                                </a>
                                                <Link
                                                    href={github}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md cursor-pointer hover:bg-gray-800'>
                                                    <div>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 24 24"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            style={{ width: "auto", height: "auto" }}>
                                                            <g><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" /></g>
                                                        </svg>

                                                    </div>
                                                    <div>
                                                        GitHub
                                                    </div>
                                                </Link>


                                            </div>
                                        </div>
                                    </m.div>
                                )
                            })

                    }

                </div>

            </div>


        </m.section>
    )
}
