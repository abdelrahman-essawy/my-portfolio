import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion as m } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from './Review';

export default function DesktopSlider({ reviews }) {
    return <Swiper
        slideActiveClass='swiper-slide-active'
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
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
