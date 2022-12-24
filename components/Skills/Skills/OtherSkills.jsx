import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { useMeasure } from 'react-use-measure';

export default function OtherSkills() {


    const [otherSkills, setOtherSkills] = useState([
        {
            name: 'Networking',
            desc: 'I have a good understanding of networking and how it works. I have a good understanding of how to set up a network and how to troubleshoot it.',
            color: 'bg-green-500',
            viewDesc: false,
        },
        {
            name: 'Linux',
            desc: 'I have a good understanding of Linux and how it works. I have a good understanding of how to set up a Linux server and how to troubleshoot it.',
            color: 'bg-green-500',
            viewDesc: false,
        },
        {
            name: 'Cyber Security',
            desc: 'I have a good understanding of Cyber Security and how it works. I have a good understanding of how to set up a Cyber Security server and how to troubleshoot it.',
            color: 'bg-green-500',
        },
        {
            name: '3D Designer',
            color: 'bg-green-500',
        },
        {
            name: 'Video Editing',
            color: 'bg-green-500',
        },
        {
            name: 'Photography',
            color: 'bg-green-500',
        },
        {
            name: 'Graphic Design',
            color: 'bg-green-500',
        },
        {
            name: 'Adobe Photoshop',
            color: 'bg-green-500',
        },
        {
            name: 'Adobe Illustrator',
            color: 'bg-green-500',
        },
        {
            name: 'Adobe XD',
            color: 'bg-green-500',

        },
        {
            name: 'Adobe Premiere',
            color: 'bg-green-500',
        },
    ])

    return (
        <div className='grid grid-cols-1 gap-4 '>
            {otherSkills.map(({
                name,
                desc,
                color,
                viewDesc

            }, index) => (
                <m.button
                    key={index}
                    type='button'
                    className={`${desc ? 'cursor-pointer' : 'cursor-default'} hover:shadow-lg transition duration-200 ease-in-out`}
                    onClick={() => {
                        setOtherSkills((prev) => {
                            const newSkillsWithDesc = [...prev]
                            newSkillsWithDesc[index].viewDesc = !newSkillsWithDesc[index].viewDesc
                            return newSkillsWithDesc
                        })
                    }}
                >
                    <div className='flex items-center justify-between p-3 bg-white rounded-lg shadow-md'>
                        <div className='flex items-center'>
                            <div className={`flex-shrink-0 w-10 h-10 ${color} rounded-full`}>
                                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                                </svg>
                            </div>
                            <div className='ml-4'>
                                <div className='font-medium text-gray-700 text-md text-start sm:text-lg'>{name}</div>
                                {viewDesc && <m.div
                                    initial={{ height: 0, opacity: 0, }}
                                    animate={{ height: 'auto', opacity: 1, type: 'spring', stiffness: 100, damping: 20, }}
                                    key={index}
                                    className='text-sm font-medium text-gray-500'>{desc}</m.div>}

                            </div>
                        </div>

                        {desc ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`${viewDesc ? 'rotate - 0' : 'rotate-180'} transform h-6 w-6 text-blue-500`}>
                            <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd">
                            </path>
                        </svg> : ''}
                    </div>
                </m.button>
            ))}
        </div>


    )
}
