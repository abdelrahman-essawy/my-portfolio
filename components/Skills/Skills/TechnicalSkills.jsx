import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
export default function TechnicalSkills({ windowScreenWidth }) {
    const [seeMore, setSeeMore] = useState(false)
    const skills = [
        {
            name: 'HTML',
            level: 'Expert',
            color: 'bg-blue-500'
        },
        {
            name: 'CSS',
            level: 'Expert',
            color: 'bg-blue-500'
        },
        {
            name: 'JavaScript',
            level: 'Proficient',
            color: 'bg-blue-500',
            imgRounded: 'rounded-3xl'
        },
        {
            name: 'TypeScript',
            level: 'Beginner',
            color: 'bg-blue-500',
            imgRounded: 'rounded-xl'
        },
        {
            name: 'React',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Next.js',
            level: 'Competent',
            color: 'bg-blue-500',
        },
        {
            name: 'Redux',
            level: 'Competent',
            color: 'bg-blue-500'
        },
        {
            name: 'Tailwind',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Bootstrap',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Framer',
            level: 'Competent',
            color: 'bg-blue-500',
            imgRounded: 'p-3'
        },
        {
            name: 'Jquery',
            level: 'Competent',
            color: 'bg-blue-500',
            imgRounded: 'p-3'
        },
        {
            name: 'Figma',
            level: 'Proficient',
            color: 'bg-blue-500',
        },
        {
            name: 'GitHub',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Git',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Webpack',
            level: 'Beginner',
            color: 'bg-blue-500'
        },
        {
            name: 'Oracle',
            level: 'Beginner',
            color: 'bg-blue-500'
        },
        {
            name: 'Docker',
            level: 'Beginner',
            color: 'bg-blue-500'
        },
        {
            name: 'NodeJs',
            level: 'Beginner',
            color: 'bg-blue-500',
            imgRounded: 'p-3'
        },
        {
            name: 'MongoDB',
            level: 'Learning',
            color: 'bg-blue-500',
            soon: true
        }
        // {
        //     name: 'Adobe XD',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe Photoshop',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe Illustrator',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe InDesign',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe Premiere Pro',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe After Effects',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe Audition',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
        // {
        //     name: 'Adobe Lightroom',
        //     level: '90%',
        //     color: 'bg-blue-500'
        // },
    ]
    const setColor = (level) => {
        if (level === 'Expert') {
            return 'text-red-600'
        } else if (level === 'Proficient') {
            return 'text-green-600'
        } else if (level === 'Competent') {
            return 'text-yellow-600'
        } else if (level === 'Beginner') {
            return 'text-blue-500'
        }
    }
    const handleSlice = () => {
        if (windowScreenWidth < 640) {
            if (seeMore) {
                return skills.length
            } else {
                return 6
            }
        }
        return skills.length
    }
    return (
        <m.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, type: 'spring' }}
        >
            <div className='grid grid-cols-3 gap-3 sm:gap-4 sm:grid-cols-8 '>
                {
                    skills
                        .slice(0, handleSlice())
                        .map(({
                            name,
                            level,
                            imgRounded,
                            soon
                        }, index) => (
                            <m.div
                                key={index}
                                className={`flex flex-col justify-center px-1 py-2 bg-gray-100 rounded-lg  relative ${soon ? `grayscale blur-[1.3px]  bg-zinc-200/80 shadow-none` : `shadow-md`}`}>
                                <div className='flex items-center justify-center flex-1'>
                                    <Image
                                        priority={true}
                                        width="512"
                                        height="512"
                                        layout="responsive"
                                        objectFit="contain"
                                        src={`/Skills/${name}.webp`} alt={name} className={`p-2  bg-gray-100 ${imgRounded} ${soon ? `bg-gray-200` : `bg-gray-100`}`} />
                                </div>
                                <div className='flex items-center justify-between w-full space-x-2'>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <hr className={`w-full h-1 my-2  ${soon ? `bg-gray-200` : `bg-gray-100`}`} />
                                        <h3 className='mb-1 text-sm font-bold '>{name}</h3>
                                        <p className={`text-xs font-CONSOLA font-normal tracking-tight ${setColor(level)}`}>{level}</p>
                                    </div>
                                </div>
                            </m.div>
                        ))
                }
                <m.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSeeMore(!seeMore)}
                    className='col-span-3 p-2 font-normal rounded-lg shadow sm:hidden font-CONSOLA bg-zinc-200 active:bg-zinc-300 hover:bg-zinc-300'>{
                        seeMore ? 'See Less' : 'See More'
                    }
                </m.button>
            </div>
        </m.div>
    )
}
