import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { useMeasure } from 'react-use-measure';

export default function OtherSkills() {

    const descTemp = (desc) => {
        return (
            <m.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}

                className='flex flex-col items-start justify-start'>
                <div className='flex items-center justify-start'>
                    <div className={`w-2 h-2 rounded-full ${desc}`}></div>
                    <p className='ml-2 text-sm'>{desc}</p>
                </div>

            </m.div>
        )
    }


    const [otherSkills, setOtherSkills] = useState([
        {
            name: 'Networking',
            desc: 'I have a good understanding of networking and how it works. I have a good understanding of how to set up a network and how to troubleshoot it.',
            viewDesc: false,
            icon: 'https://cdn-icons-png.flaticon.com/512/1239/1239682.png ',
        },
        {
            name: 'Linux',
            desc: 'I have a good understanding of Linux and how it works. I have a good understanding of how to set up a Linux server and how to troubleshoot it.',
            viewDesc: false,
            icon: '   https://cdn-icons-png.flaticon.com/512/2333/2333187.png ',
        },
        {
            name: 'Cyber Security',
            desc: 'I have a good understanding of Cyber Security and how it works. I have a good understanding of how to set up a Cyber Security server and how to troubleshoot it.',
            icon: '     https://cdn-icons-png.flaticon.com/512/2716/2716652.png  ',
        },
        {
            name: '3D Designer',
            icon: 'https://cdn-icons-png.flaticon.com/512/1806/1806507.png ',
        },
        {
            name: 'Video Editing',
            icon: '   https://cdn-icons-png.flaticon.com/512/2886/2886875.png ',
            desc: [
                {
                    name: 'Adobe Premiere',
                    color: 'bg-green-500',
                },
                {
                    name: 'Adobe After Effects',
                    color: 'bg-green-500',
                },

            ]
        },
        {
            name: 'Photography',
            icon: '   https://cdn-icons-png.flaticon.com/512/1042/1042339.png ',
        },

    ])


    // const oldArray = '

    // desc[0] ?
    //     <div className='flex flex-col items-start justify-start'>
    //         {desc.map((desc, index) => (
    //             <div key={index} className='flex items-center justify-start'>
    //                 <div className={`flex-shrink - 0 w - 3 h - 3 ${desc.color} rounded - full`}></div>
    //                 <div className='ml-2 text-sm font-medium text-gray-500'>{desc.name}</div>
    //             </div>
    //         ))}
    //     </div>

    //     : '



    return (
        <div className='grid grid-cols-1 gap-4 '>
            {otherSkills.map(({
                name,
                desc,
                color,
                viewDesc,
                icon

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
                                <img src={icon} alt={name} className='w-10 h-10' />
                            </div>
                            <div className='ml-4'>
                                <div className='font-medium text-gray-700 text-md text-start sm:text-lg'>{name}</div>
                                {
                                    (viewDesc && typeof desc === 'string') ?
                                        descTemp(desc)
                                        :
                                        <h1>asd</h1>
                                }

                            </div>
                        </div>

                        {desc ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`${viewDesc ? 'rotate - 0' : 'rotate-180'} transform h-6 w-6 text-blue-500`}>
                            <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd">
                            </path>
                        </svg> : ''}
                    </div>
                </m.button>
            ))
            }
        </div>


    )
}


