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

    return (
        <m.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, type: 'spring' }}
        >

            <h2>Technical Skills</h2>

            <div className='flex items-center justify-center w-full space-x-1' >
                <div className='w-full'>

                </div>


                <div className='flex flex-wrap items-center w-full justify-evenly'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='p-3 my-2 bg-gray-100 rounded-lg shadow-lg'>
                                <div className='flex items-center justify-center w-32 h-32 rounded-full'>
                                    <img src={`./Skills/${skill.name}.webp`} alt={skill.name} className={`bg-gray-100 ${skill?.imgRounded}`} />
                                </div>
                                <div className='flex items-center justify-between w-full space-x-2'>

                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h3 className='text-lg font-bold'>{skill.name}</h3>
                                        <p className='text-sm'>{skill.level}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }

                </div>

            </div>
        </m.div>
    )
}
