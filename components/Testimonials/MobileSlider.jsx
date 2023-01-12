import React, { memo } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion as m } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";

import Review from './Review'

const MobileSlider = ({ reviews }) =>
    <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        lazy={true}
        rewind={true}
    >
        {
            reviews.map(({ name, desc, icon, country }, index) => 

                 <SwiperSlide
                    className='rounded-xl w-full h-full py-6 grid items-start' key={index}>
                    <Review name={name} desc={desc} icon={icon} country={country} />
                </SwiperSlide>
            )
        }

    </Swiper>

export default MobileSlider