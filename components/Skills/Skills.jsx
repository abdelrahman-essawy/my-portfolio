import React from 'react'
import { motion as m } from 'framer-motion'
import Tabs1 from './Tabs1'
import Tabs from './Tabs'

export default function Skills({ windowScreenWidth }) {
    return (
        <m.section
            id='Skills'
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='relative px-4 py-6 bg-white sm:p-0 overflow-y sm:px-0'>
            <div className='px-12 mt-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2'>Skills</h2>
            </div>
            <h3 className='my-4 text-xl text-center text-gray-500 sm:mb-8 sm:tracking-wide leading-2'>
                I have a wide range of skills, from soft skills, personal skills to technical skills.
            </h3>

            <div className='max-w-screen-xl m-auto mx-auto text-center sm:px-4 lg:py-0 lg:px-12 sm:flex sm:justify-center sm:items-center'>
                <Tabs windowScreenWidth={windowScreenWidth} />
            </div>

            <div className='my-8 sm:px-0 sm:p-0 '>
            </div>


        </m.section>
    )
}
