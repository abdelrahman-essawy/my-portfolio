import React from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import MobileGithubSVG from '../SVG/MobileGithubSVG';
import Link from 'next/link';

export default function Projects() {

    const projects = [
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/website.webp',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/website.webp',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/website.webp',
            skillsUsed: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            link: '',
            github: ''
        },
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            image: '/website.webp',
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


            <div className='max-w-screen-xl m-auto mx-auto text-center sm:flex sm:justify-center sm:items-center sm:px-6 lg:px-8'>

                <div
                    className='grid grid-cols-1 sm:grid-cols-3 '>
                    {
                        projects
                            .slice(0, 2)
                            .map((project, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='flex flex-col items-center justify-center mx-2 my-4 overflow-hidden bg-white rounded-lg shadow'>
                                        <div className={`w-full h-full bg-gray-200 relative ${project.image ? `p-0 ` : `px-10 py-28`}`}>
                                            <Image
                                                className={`hover:scale-125 hover:contrast-50 transition duration-500 ease-out transform hover:blur ${project.image ? ` ` : `hidden`}`}
                                                src={project.image}
                                                alt={project.name}
                                                layout='intrinsic'
                                                width={571}
                                                height={437}
                                            >
                                            </Image>
                                            <div className={`flex items-center hidden justify-center ${project.image ? `` : ` `}`}>
                                                <div className='absolute inset-0 flex items-center justify-center'>
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
                                            </div>


                                        </div>

                                        <div className='grid w-full grid-rows-3 gap-3 p-4'>


                                            <div className='grid fgrid-rows-2 gap-y-2'>
                                                <h3 className='text-xl font-semibold text-gray-800'>{project.name}</h3>
                                                <p className='text-sm text-gray-500'>{project.description}</p>
                                            </div>
                                            <div className='grid grid-cols-2 gap-3 font-SourceCodePro'>
                                                {
                                                    project.skillsUsed.map((skill, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className='flex items-center justify-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-md font-SourceCodePro'>
                                                                {skill}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='grid items-center justify-center grid-cols-1 gap-3 '>
                                                <a
                                                    href={project.link}
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
                                                    href={project.github}
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
                                    </div>
                                )
                            })

                    }

                </div>

            </div>


        </m.section>
    )
}
