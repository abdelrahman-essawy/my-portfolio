import React from 'react'
import { motion as m } from 'framer-motion'
import ShareButton from './ShareButton'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectTemplete({
    name,
    description,
    image,
    skillsUsed,
    link,
    github,
    index
}) {
    return (
        <m.div
            key={index}
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
            className='grid relative max-w-sm grid-rows-5 items-center justify-center mx-2 my-4  bg-white rounded-lg ring-1 ring-gray-200'>
            <div className={`absolute top-0 z-20  inset-x-0 p-3  ${image ? `` : ` `}`}>
                <div className='flex items-start justify-between'>
                    <ShareButton link={link} />
                </div>

            </div>
            <div className='absolute -top-2 -right-2 z-20 h-4 w-4  bg-zinc-50 rounded-full ring-1 ring-gray-200'>
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
                                style={{
                                    objectFit: 'contain',
                                    maxWidth: "100%",
                                    height: "100%"
                                }}>
                            </Image>




                            :
                            <div className='text-3xl font-light text-gray-500 m-auto '>
                                {name}
                            </div>
                    }


                </m.div>

            </div>

            <div className='rounded-b-lg grid w-full grid-rows-3 gap-4 sm:p-7 p-4 bg-white z-10 row-span-3'>


                <div className='grid grid-rows-2 gap-y-1'>
                    <h3 className='text-xl text-gray-800 font-light'>{name}</h3>
                    <p className='text-sm text-gray-500 font-light'>{description}</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-2 font-SourceCodePro'>
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
}
