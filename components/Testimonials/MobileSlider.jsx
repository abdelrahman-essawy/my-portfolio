import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion as m } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";

import Review from './Review'

export default function MobileSlider({ reviews }) {
    return <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        className='w-screen'
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        lazy={true}

    >
        {
            reviews.map(({ name, desc, icon, country }, index) => {

                return <SwiperSlide
                    className='rounded-xl w-full h-full py-6 grid items-start' key={index}>
                        <Review name={name} desc={desc} icon={icon} country={country} />
                </SwiperSlide>
            })
        }

    </Swiper>

}
