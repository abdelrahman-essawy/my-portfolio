import React, { lazy, Suspense } from 'react'
import { motion as m } from "framer-motion";

const Reviews = lazy(() => import('./Reviews'));

export default function Testimonials({ windowScreenWidth, isTestimonialsVisible }) {


    return (
        <m.section
            id='Testimonials'
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='relative px-4 py-6 bg-white sm:p-0 overflow-y sm:px-0'>
            <div className='px-12 my-0 sm:my-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2'>Testimonials</h2>
                <h3 className='mt-3 text-xl font-medium text-center text-gray-500 sm:tracking-wide leading-2'>What My Clients Are Saying...</h3>
            </div>



            <div className='mt-2 sm:px-0 sm:p-0'>
                {
                    isTestimonialsVisible &&
                    <Suspense fallback={<div>Loading...</div>}>
                        <Reviews windowScreenWidth={windowScreenWidth} />
                    </Suspense>

                }
            </div>


        </m.section>
    )

}