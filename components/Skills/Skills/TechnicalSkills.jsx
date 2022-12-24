import React from 'react'
import { motion as m } from 'framer-motion'
import { Image } from 'next/image';

export default function TechnicalSkills() {


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
            imgRounded: 'rounded-xl'
        },
        {
            name: 'TypeScript',
            level: 'Advanced Beginner',
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
            color: 'bg-blue-500'
        },
        {
            name: 'Redux',
            level: 'Competent',
            color: 'bg-blue-500'
        },
        {
            name: 'Tailwind CSS',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Bootstrap',
            level: 'Proficient',
            color: 'bg-blue-500'
        },
        {
            name: 'Framer Motion',
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
            level: 'Advanced Beginner',
            color: 'bg-blue-500'
        },

        {
            name: 'Oracle',
            level: 'Advanced Beginner',
            color: 'bg-blue-500'
        },
        {
            name: 'Docker',
            level: 'Advanced Beginner',
            color: 'bg-blue-500'
        },

        {
            name: 'NodeJs',
            level: 'Advanced Beginner',
            color: 'bg-blue-500',
            imgRounded: 'p-3'

        },


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
        } else if (level === 'Advanced Beginner') {
            return 'text-blue-500'
        }
    }


    return (
        <m.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, type: 'spring' }}
        >


            <div className='flex items-center justify-center w-full space-x-1' >


                <div className='flex flex-wrap items-center w-full justify-evenly'>

                    {

                        skills.map(({
                            name,
                            level,
                            imgRounded
                        }, index) => (




                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.07 }}

                                className='p-1 py-3 mx-1 my-2 bg-gray-100 rounded-lg shadow-md sm:p-3 sm:mx-2'>
                                <div className='flex items-center justify-center w-32 h-32 rounded-full sm:w-32 sm:h-32'>
                                    <img src={`./Skills/${name}.webp`} alt={name} className={`p-2 sm:p-0 bg-gray-100 ${imgRounded}`} />
                                </div>
                                <div className='flex items-center justify-between w-full space-x-2'>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <hr className='w-full h-1 my-2 bg-gray-100' />
                                        <h3 className='font-bold sm:text-lg text-md'>{name}</h3>
                                        <p className={`text-xs sm:text-sm ${setColor(level)}`}>{level}</p>
                                    </div>
                                </div>
                            </m.div>
                        ))

                    }

                </div>

            </div>
        </m.div>
    )
}
