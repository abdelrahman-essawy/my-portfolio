import React from 'react'
import Reviews from './Reviews';

export default function Testimonials() {

    return (
        <section id='TestimonialsID' className='relative px-4 py-6 bg-white sm:p-0 overflow-y sm:px-0'>
            <div className='px-12 my-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2'>Testimonials</h2>
                <h3 className='mt-3 text-xl font-medium text-center text-gray-500 sm:tracking-wide leading-2'>What My Clients Are Saying...</h3>
            </div>



            <div className='my-8 sm:px-0 sm:p-0 '>
                <Reviews />
            </div>


        </section>
    )

}