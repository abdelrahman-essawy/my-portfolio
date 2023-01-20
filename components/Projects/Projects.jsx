import React, { lazy, Suspense, useState } from 'react'
import { motion as m } from 'framer-motion'
const ProjectTemplete = lazy(() => import('./ProjectTemplete'))

export default function Projects({ windowScreenWidth, isProjectsVisible }) {
    const [seeMore, setSeeMore] = useState(false)


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
            description: 'Generate random quizzes and tests your knowledge',
            skillsUsed: ['React', 'TailwindCSS', 'Redux', 'REST API',],
            link: '',
            github: ''
        },
        {
            name: 'Quoter',
            description: `Generate random quotes and share them on social media.`,
            image: '/object.png',
            skillsUsed: ['React', 'Bootstrap', 'JQuery', 'REST API'],
            link: '',
            github: ''
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


            <div className='max-w-screen-2xl m-auto mx-auto text-center grid items-center justify-end sm:px-6 lg:px-8'>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-4 items-start`}>
                    {
                        projects
                            .slice(0, handleSlice())
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
                                    isProjectsVisible &&
                                    <Suspense key={index} fallback={<div></div>}>
                                        <ProjectTemplete
                                            key={index}
                                            name={name}
                                            description={description}
                                            image={image}
                                            skillsUsed={skillsUsed}
                                            link={link}
                                            github={github}
                                            index={index}
                                        />
                                    </Suspense>

                                )
                            })

                    }

                </div>
                <m.button
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, type: 'spring' }}
                    viewport={{ once: true }}
                    onClick={() => setSeeMore((prev) => !prev)}
                    className=" text-gray-900 bg-white border sm:hidden border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:text-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800 focus:!ring-1 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ring-gray-300" type="button">
                    <span className="flex items-center px-4 py-2 text-sm rounded-md ">
                        {seeMore ? 'See Less' : 'See More'}
                    </span>
                </m.button>


            </div>


        </m.section>
    );
}
