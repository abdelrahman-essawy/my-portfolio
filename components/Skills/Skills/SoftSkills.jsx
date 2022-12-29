import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'

export default function SoftSkills() {

    const softSkills = [
        {
            name: 'Teamwork',
            svg: 'https://cdn-icons-png.flaticon.com/512/7505/7505858.png'
        },
        {
            name: 'Communication',
            svg: '   https://cdn-icons-png.flaticon.com/512/610/610413.png '
        },
        {
            name: 'Problem Solving',
            svg: '     https://cdn-icons-png.flaticon.com/512/4133/4133589.png  '
        },
        {
            name: 'Time Management',
            svg: '   https://cdn-icons-png.flaticon.com/512/2382/2382564.png '
        },
        {
            name: 'Adaptability',
            svg: '   https://cdn-icons-png.flaticon.com/512/6159/6159679.png '
        },
        {
            name: 'Creativity',
            svg: '   https://cdn-icons-png.flaticon.com/512/3749/3749872.png '
        },
        {
            name: 'Leadership',
            svg: '   https://cdn-icons-png.flaticon.com/512/860/860430.png '
        },
        {
            name: 'Detail Oriented',
            svg: '   https://cdn-icons-png.flaticon.com/512/3163/3163231.png '
        },
        {
            name: 'Self Motivation',
            svg: '        https://cdn-icons-png.flaticon.com/512/3495/3495048.png  '
        },
        {
            name: 'Self Confidence',
            svg: '     https://cdn-icons-png.flaticon.com/512/4371/4371480.png '
        },
        {
            name: 'Self Discipline',
            svg: 'https://cdn-icons-png.flaticon.com/512/5433/5433993.png '
        },
        {
            name: 'Self Awareness',
            svg: '   https://cdn-icons-png.flaticon.com/512/6001/6001137.png '
        },

        {
            name: 'Self Esteem',
            svg: '      https://cdn-icons-png.flaticon.com/512/5572/5572331.png '
        },
        {
            name: 'Self Control',
            svg: '   https://cdn-icons-png.flaticon.com/512/6911/6911300.png '
        },
        {
            name: 'Self Reliance',
            svg: '      https://cdn-icons-png.flaticon.com/512/5352/5352328.png '
        },

    ]

    return (

        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            {softSkills.map((skill, index) => (
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}

                    key={index} className='flex items-center justify-between p-3 bg-white rounded-lg shadow-md'>
                    <div className='flex items-center'>
                        <img src={skill.svg
                            ? skill.svg
                            : 'https://img.icons8.com/color/48/000000/teamwork.png'} alt={skill.name} className={'h-8 w-h-8'} />
                        <div className='ml-4'>
                            <div className='font-medium text-gray-700 text-md sm:text-md'>{skill.name}</div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='p-3 bg-green-500 rounded-full' />
                    </div>
                </m.div>
            ))}
        </m.div>


    )
}
