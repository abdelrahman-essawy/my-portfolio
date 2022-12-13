import React, { useEffect, useState, useRef } from 'react'
import { motion as m } from 'framer-motion'
import { useSwipeable } from "react-swipeable";
import Review from './Review';



export default function Reviews({ review }) {

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

    const [position, setPosition] = useState(0);
    const handleSwipe = ({ dir }) => {
        if (dir === "Left") {
            if (position < reviews.length - 1) {
                setPosition(position + 1);
            }
        }
        if (dir === "Right") {
            if (position > 0) {
                setPosition(position - 1);
            }
        }
    };
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            handleSwipe(eventData)
            console.log(eventData)
            console.log(position)
        }
    });
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        // add your conditional logic here
    }
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const extraMobileStylesWidth = 8 * 2 //margin left, right
        const mobileGap = 16 //gap between each review
        const desktopGap = 28 //gap between each review
        const extraDesktopStylesWidth = 48 * 2 //margin left, right
        const widthBreakPoint = 640 //mobile , sm

        const totalWidth = () => {
            if (window.screen.width < widthBreakPoint) {
                //mobile
                return ((mobileGap + carousel.current.clientWidth) * reviews.length + extraMobileStylesWidth) - window.screen.width
            } else {
                //desktop
                return ((desktopGap + carousel.current.clientWidth) * reviews.length + extraDesktopStylesWidth) - window.screen.width
            }
        }
        setWidth(totalWidth)


    }, [reviews.length])
    return (
        // <div className='overflow-hidden h-96 '>
        //     <div className='flex justify-center items-center space-x-4 lg:space-x-8'>
        //         <button onClick={() => setPosition(position + 1)} className='text-7xl bg-red-200 rounded-xl p-3'>+</button>
        //         <button onClick={() => setPosition(position - 1)} className='text-7xl bg-red-200 rounded-xl p-3'>-</button>
        //     </div>


        //     <m.div animate={{
        //         left: `${position * 20}vw`,
        //     }}
        //         onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        //         {...handlers}
        //         className='flex center items-center sm:my-8 space-x-4 lg:space-x-8 relative '>
        //         {
        //             reviews.map(({ name, desc, icon, country }, index) => {

        //                 return <m.div

        //                     key={index}
        //                     initial={{ scale: 0, rotation: -180 }}
        //                     animate={{
        //                         rotate: 0,
        //                         scale: index === position ? 1.1 : 0.9,
        //                     }}
        //                     transition={{
        //                         type: "spring",
        //                         stiffness: 260,
        //                         damping: 20,
        //                     }}
        //                 >
        //                     <Review />
        //                 </m.div>
        //             })
        //         }

        //     </m.div>
        // </div>


        <div className='overflow-hidden'
        >
            <m.div
                layout
                drag='x'
                dragConstraints={{ right: 0, left: - width }}
                animate={{

                }}
                className='flex center items-center sm:my-8 my-0 sm:space-x-7 space-x-4 relative sm:mx-12 mx-0'>
                {
                    reviews.map(({ name, desc, icon, country }, index) => {

                        return <m.div
                            ref={carousel}
                            className='cursor-grab'
                            key={index}
                            initial={{ scale: 0, rotation: -180 }}
                            animate={{
                                rotate: 0,
                                scale: 1
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <Review name={name} desc={desc} icon={icon} country={country} />
                        </m.div>
                    })
                }

            </m.div>
        </div>


    )
}


