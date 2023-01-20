import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'
import MessengerSVG from '../SVG/Projects/Share/MessengerSVG'
import WhatsappSVG from '../SVG/Projects/Share/WhatsappSVG'
import FacebookSVG from '../SVG/Projects/Share/FacebookSVG'
import TwitterSVG from '../SVG/Projects/Share/TwitterSVG'

export default function ShareButton({ link }) {
    const [hoveredOnShareButton, setHoveredOnShareButton] = useState(false)

    const socialMedia = [
        {
            name: 'facebook',
            icon: <FacebookSVG className='w-4 h-4 rounded-full' />,
            link: `https://www.facebook.com/sharer/sharer.php?u=${link}`
        },
        // {
        //     name: 'messenger',
        //     icon: <MessengerSVG className='w-4 h-4' />,
        //     link: `fb-messenger://share?link=${link}`
        // },
        {
            name: 'whatsapp',
            icon: <WhatsappSVG className='w-4 h-4' />,
            link: `https://wa.me/?text=Check this out ${link}`
        },
        {
            name: 'twitter',
            icon: <TwitterSVG className='w-4 h-4' />,
            link: `https://twitter.com/intent/tweet?url=${link}&text=Check%20this%20out%20`
        },
    ]
    return link &&
        <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setHoveredOnShareButton((prev) => !prev)}

            className='bg-white rounded-full p-1 ring-1 ring-gray-200'>
            <svg
                className='w-4 h-4 mx-auto '
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0 0 15 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 0 0 5 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 0 0 1.7-.675l5.938 3.463a2.339 2.339 0 0 0-.067.546A2.428 2.428 0 1 0 15 13.442z" />
            </svg>
            <div className={`mt-2 grid gap-2 ${hoveredOnShareButton ? `block` : `hidden`} grid-rows-3`}>
                {socialMedia.map(({
                    name,
                    icon,
                    link

                }, index) => (
                    <Link
                        key={index}
                        href={link}
                        target='_blank'
                        rel='noreferrer'
                        className='bg-white rounded-full p-1 hover:bg-gray-200'
                    >
                        {icon}
                    </Link>

                ))}

            </div>
        </m.button>

}
