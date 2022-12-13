import React from 'react'
import Reviews from './Reviews';

export default function Testimonials() {

    return (
        <section id='TestimonialsID' className='bg-white py-6 px-4 sm:p-0 relative overflow-y sm:px-0'>
            <div className='px-12 my-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-blue-500 leading-2 text-center'>Testimonials</h2>
                <h3 className='mt-3 font-medium  text-xl sm:tracking-wide text-gray-500 leading-2 text-center'>What My Clients Are Saying...</h3>
            </div>



            <div className='sm:px-0 my-8 sm:p-0 '>
                <Reviews />
            </div>


        </section>
    )

}