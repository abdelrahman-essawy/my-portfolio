import React, { useEffect, useState, useRef, } from 'react'
import Reviews from './Reviews';
import { motion as m, AnimatePresence } from "framer-motion";

export default function Testimonials({ windowScreenWidth }) {


    const pcCarouselCurrentClientWidth = 576
    const mobCarouselCurrentClientWidth = 254
    const mobileGap = 16 //gap between each review
    const desktopGap = 28 //gap between each review
    const extraMobileStylesWidth = 8 * 2 //margin left, right
    const extraDesktopStylesWidth = 48 * 2 //margin left, right
    const widthBreakPoint = 640 //mobile , sm

    const [InitPosition, setInitPosition] = useState(0)

    useEffect(() => {
        if (windowScreenWidth > widthBreakPoint) {
            setInitPosition((windowScreenWidth / 2 - extraDesktopStylesWidth / 2) + 16 - (desktopGap / 2 + pcCarouselCurrentClientWidth / 2))

        } else {
            setInitPosition(0)

        }
    }), [windowScreenWidth, widthBreakPoint, pcCarouselCurrentClientWidth, mobCarouselCurrentClientWidth, mobileGap, desktopGap, extraMobileStylesWidth, extraDesktopStylesWidth]

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
                <Reviews InitPosition={InitPosition} windowScreenWidth={windowScreenWidth} />
            </div>


        </m.section>
    )

}