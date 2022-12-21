import React from 'react'
import { motion as m } from 'framer-motion'
import Tabs1 from './Tabs1'
import Tabs from './Tabs'

export default function Skills() {
    return (
        <m.section
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            id='TestimonialsID' className='relative px-4 py-6 bg-white sm:p-0 overflow-y sm:px-0 '>
            <div className='px-12 my-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2'>Skills</h2>
                <h3 className='mt-3 text-xl font-medium text-center text-gray-500 sm:tracking-wide leading-2'>What My Clients Are Saying...</h3>
            </div>

            <div className='max-w-screen-xl px-4 py-8 m-auto mx-auto text-center lg:py-0 lg:px-12 sm:flex sm:justify-center sm:items-center'>
                <Tabs />
            </div>

            <div className='my-8 sm:px-0 sm:p-0 '>
            </div>


        </m.section>
    )
}
