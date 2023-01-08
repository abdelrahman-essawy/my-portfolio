import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import MobileGithubSVG from '../SVG/MobileGithubSVG';
import Link from 'next/link';
import ShareButton from './ShareButton';
import ProjectCard from './ProjectCard';

export default function Projects({ windowScreenWidth }) {
    const [seeMore, setSeeMore] = useState(false)


    const projects = [
        {
            name: 'Mascot',
            description: `Track all cryptocurrencies, gold and Currencies latest prices and news.`,
            image: '/mascot.png',
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
            image: '/',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            image: '/my-portfolio.webp',
            link: 'https://essawy.me',
            github: 'https://github.com/abdelrahman-essawy/my-portfolio'
        },
        {
            name: 'AAST E-Learning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/aast.webp',
            skillsUsed: ['React', 'Framer Motion'],
            link: 'https://aast-e-learning.vercel.app/',
            github: 'https://github.com/abdelrahman-essawy/AAST-E-Learning-Platform'
        },
        {
            name: 'Quizz App',
            description: 'Generate random quizzes and tests your knowledge',
            skillsUsed: ['React', 'TailwindCSS', 'Redux', 'REST API',],
            image: '/quiz-app.webp',
            link: 'quiz-app-gold-six.vercel.app',
            github: ''
        },
        {
            name: 'Quoter',
            description: `Generate random quotes and share them on social media.`,
            image: '/object.png',
            skillsUsed: ['React', 'Bootstrap', 'JQuery', 'REST API'],
            link: 'https://quoter-app.netlify.app/',
            github: 'https://github.com/abdelrahman-essawy/Quoter'
        },


    ]

    const handleSlice = () => {
        if (windowScreenWidth < 640) {
            if (seeMore) {
                return projects.length
            } else {
                return 2
            }
        }
        return 4
    }
    console.log(windowScreenWidth)
    console.log(handleSlice())
    return (

        <m.section
            id='Projects'
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='relative px-4 py-6 overflow-hidden sm:py-0 sm:pb-4 bg-zinc-50 '>
            <div className='px-12 sm:mt-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2 '>Projects</h2>
            </div>
            <h3 className='my-4 text-xl text-center text-gray-500 sm:mb-8 sm:tracking-normal leading-2'>
                Here are some of my projects.
            </h3>


            <div className='max-w-screen-2xl m-auto text-center sm:px-6 lg:px-8'>

                <div
                    className={`grid grid-cols-4`}>
                    {
                        projects
                            .slice(0, handleSlice())
                            .map((project, index) => <ProjectCard key={index} index={index} {...project} />)
                    }

                </div>
                <m.button
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, type: 'spring' }}
                    viewport={{ once: true }}
                    onClick={() => setSeeMore((prev) => !prev)}
                    className=" text-gray-900 bg-white border sm:hidden border-gray-200 hover:bg-gray-100 hover:text-gray-700 disabled:hover:bg-white focus:text-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-1 dark:disabled:hover:bg-gray-800 focus:!ring-1 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ring-gray-300" type="button">
                    <span className="flex items-center px-4 py-2 text-sm rounded-md ">
                        {seeMore ? 'See Less' : 'See More'}
                    </span>
                </m.button>


            </div>


        </m.section>
    )
}
