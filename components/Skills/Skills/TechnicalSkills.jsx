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


    return (
        <m.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, type: 'spring' }}
        >




            <div className='grid grid-cols-3 gap-3 sm:gap-4 sm:grid-cols-6'>

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
                            viewport={{ once: true }}
                            className='flex flex-col justify-center py-2 bg-gray-100 rounded-lg shadow-md sm:p-3 '>
                            <div className='flex items-center justify-center flex-1'>
                                <img src={`./Skills/${name}.webp`} alt={name} className={`p-2 sm:p-0 bg-gray-100 ${imgRounded}`} />
                            </div>
                            <div className='flex items-center justify-between w-full space-x-2'>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <hr className='w-full h-1 my-2 bg-gray-100' />
                                    <h3 className='mb-1 font-bold sm:text-lg text-md'>{name}</h3>
                                    <p className={`text-xs sm:text-sm font-SourceCodePro ${setColor(level)}`}>{level}</p>
                                </div>
                            </div>
                        </m.div>
                    ))

                }


            </div>
        </m.div>
    )
}
