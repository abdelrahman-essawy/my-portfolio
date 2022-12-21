import React from 'react'
import { motion as m } from 'framer-motion'

export default function TechnicalSkills() {


    const skills = [
        {
            name: 'HTML',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'CSS',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'JavaScript',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'React',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Next.js',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Node.js',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'MongoDB',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Express.js',
            level: '90%',
            color: 'bg-blue-500'

        },
        {
            name: 'Git',
            level: '90%',

            color: 'bg-blue-500'
        },
        {
            name: 'GitHub',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Figma',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe XD',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe Photoshop',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe Illustrator',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe InDesign',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe Premiere Pro',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe After Effects',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe Audition',
            level: '90%',
            color: 'bg-blue-500'
        },
        {
            name: 'Adobe Lightroom',
            level: '90%',
            color: 'bg-blue-500'
        },
    ]

    return (
        <m.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, type: 'spring' }}
        >

            <h2>Technical Skills</h2>

            <div className='flex items-center justify-center w-full space-x-1' >
                <div className='w-full'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='flex items-center justify-between w-full p-2 my-2 space-x-2 bg-gray-100 rounded-lg shadow-lg'>
                                <div className='flex items-center justify-between w-full space-x-2'>
                                    <div className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full'>
                                        <img src={`./${skill.name}.webp`} alt={skill.name} />
                                    </div>
                                    <div className='flex flex-col items-start justify-center w-full'>
                                        <h3 className='text-lg font-medium'>{skill.name}</h3>
                                        <p className='text-sm font-light'>{skill.level}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center w-1/2 h-4 bg-gray-200 rounded-full'>
                                    <div className={`w-1/2 h-4 ${skill.color} rounded-full`}></div>
                                </div>
                            </div>
                        ))

                    }

                </div>
                <div className='w-full'>


                </div>
            </div>
        </m.div>
    )
}
