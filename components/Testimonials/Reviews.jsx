import React, { useEffect, useState, useRef, } from 'react'
import { animate, motion as m } from 'framer-motion'
import { useSwipeable } from "react-swipeable";
import Review from './Review';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";


export default function Reviews({ InitPosition, windowScreenWidth }) {

    const reviews = [

        {
            name: 'druckbar_de'
            , desc: "Great work as always. Fast and reliable. He implements my customer requests excellently and simply has the necessary artistic streak."
            , icon: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c3c90dd13d914ee873b61525eeaad4b0-1617719665852/09bba909-047a-46aa-bbab-10d1af8f538b.jpg'
            , country: 'Germany'

        },
        {
            name: 'mrmattbarr'
            , desc: "If there were six stars, I'd give them. Incredibly fast work and enthusiastically helpful in walking me through the parts I needed help with."
            , icon: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/eb1108a867bc83d61b3ecba62ac6a9fa-1631573910582/c95b7714-40bc-4b66-9e2b-36a25d81609d.png'
            , country: 'United States'

        },
        {
            name: 'mrmattbarr'
            , desc: "Abdelrahman has gone above and beyond. His patience, ingenuity and creativity helped me take an idea further then I would have imagined. I felt like I had a team mate throughout this experience, someone to bounce ideas off and discuss epiphanies with. Not only would I highly recommend him but I am really looking forward to working with him again."
            , icon: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5675cc3e93574885b3f1c13c285e72eb-77093841587652388694/JPEG_20200423_093308_8800783325805886115.jpg'
            , country: 'United States'
        },
        {
            name: 'denisemerc'
            , desc: "I'm thrilled with the results of his hard work and how quickly he was able to complete my project! Abdelrahman vast knowledge of computer science, creative approach to problem solving, skillful execution, and patience the process was easy and enjoyable! His clever suggestions produced a project that was more cost effective and functional. If you want quality work performed by a skillful computer engineer with an artistic eye for design, Abdelrahman is your guy!"
            , icon: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/318e7d01847f7942fdc26c796034ff59-1620687279109/2e9829ef-8902-4b8b-b353-1869951a6386.png'
            , country: 'United States'

        },

        {
            name: 'danieledge696'
            , desc: "Highly recommend, great attention to detail and customer satisfaction - wants you to be absolutely happy with the project."
            , icon: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0457d5f89eb04f3d909e390acda50dfe-1634589649863/e0e9c4a4-b0c0-4ef6-a867-3b5b6e003888.png'
            , country: 'United Kingdom'

        },

    ]


    let [position, setPosition] = useState(0);
    let [useEffectInvoked, setUseEffectInvoked] = useState(false);
    let [inCenter, setInCenter] = useState(0);


    const carousel = useRef()
    const [width, setWidth] = useState(0)
    const extraMobileStylesWidth = 8 * 2 //margin left, right
    const mobileGap = 16 //gap between each review
    const bordersWidth = reviews.length //border of each review
    const desktopGap = 28 //gap between each review
    const extraDesktopStylesWidth = 48 * 2 //margin left, right
    const widthBreakPoint = 640 //mobile , sm



    return (

        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            className='w-screen'>
            {
                reviews.map(({ name, desc, icon, country }, index) => {

                    return <SwiperSlide
                        className='rounded-xl w-full h-full py-6 grid items-center shadow-none' key={index}>

                        <Review name={name} desc={desc} icon={icon} country={country} />
                    </SwiperSlide>
                })
            }

        </Swiper>


    )
}


