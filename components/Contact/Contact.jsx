import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import Email from './Email';
import SocialMedia from './SocialMedia';
import PersonalInformations from './PersonalInformations';

export default function Contact() {

    const [currentPage, setCurrentPage] = useState('email')

    const pageNavigation = [
        {
            name: 'social media',
            icon: 'https://cdn-icons-png.flaticon.com/512/5075/5075620.png'
        },
        {
            name: 'email',
            icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png'
        },

        {
            name: 'personal informations',
            icon: 'https://cdn-icons-png.flaticon.com/512/4413/4413664.png'
        }
    ]


    const pages = [
        {
            name: 'email',
            component: <Email />
        },
        {
            name: 'social media',
            component: <SocialMedia />
        },
        {
            name: 'personal informations',
            component: <PersonalInformations />
        }

    ]
    return (
        <m.section
            id='Contact'
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ delay: 0.1 }}
            className='relative px-4 py-6 overflow-hidden sm:py-0 bg-zinc-50 '>
            <div className='px-12 sm:mt-8 sm:mx-0'>
                <h2 className='text-3xl tracking-tight text-center text-blue-500 leading-2 '>Contact me</h2>
            </div>
            <h3 className='my-4 text-xl text-center text-gray-500 sm:mb-8 sm:tracking-normal leading-2'>
                Get in touch with me, I&apos;m always open to new opportunities.
            </h3>

            <div className='max-w-screen-xl m-auto mx-auto text-center sm:flex sm:justify-center sm:items-center sm:px-6 lg:px-8'>

                <div className='overflow-hidden bg-white rounded-lg shadow border-zinc-100'>
                    <div className='flex items-center justify-around gap-[.1rem] cursor-pointer '>
                        {
                            pageNavigation.map(({
                                name,
                                icon: icon

                            }, index) => {

                                return (
                                    <div
                                        key={name}
                                        onClick={() => setCurrentPage(name)}
                                        className={`flex-grow p-2 transition duration-100 ease-in bg-blue-100 rounded rounded-t-none sm:hover:bg-blue-200 active:bg-blue-200 ${currentPage === name ? `bg-blue-200` : ``} ${index === 0 ? 'rounded-l-none' : ''} ${index === pageNavigation.length - 1 ? 'rounded-r-none' : ''}`}>
                                        <Image
                                            alt={name}
                                            src={icon}
                                            width="32"
                                            height="32"
                                            layout="intrinsic"
                                            className={`w-8 h-8 m-auto`} />
                                    </div>
                                )
                            }
                            )
                        }

                    </div>
                    <div className='flex items-center justify-center m-auto mt-4 bg-zinc-50'>
                        {/* {
                            pages.map(page => {
                                const { name, component } = page
                                if (name === currentPage) {
                                    return (
                                        <div key={name}>
                                            {component}
                                        </div>
                                    )
                                }
                            }
                            )
                        } */}
                        <Email />
                    </div>
                </div>
            </div>

            <div className='my-8 sm:px-0 sm:p-0'>
            </div>


        </m.section>
    )
}
