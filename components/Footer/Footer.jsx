import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Facebook from './../SVG/Social Media/Facebook';
import Instagram from './../SVG/Social Media/Instagram';
import Github from './../SVG/Social Media/Github';
import Linkedin from './../SVG/Social Media/Linkedin';

export default function Footer({ navigation }) {
    const socialMedia = [
        {
            name: 'Facebook',
            icon: 'https://cdn-icons-png.flaticon.com/512/3128/3128304.png',
            href: 'https://www.facebook.com/abdelrahman.mo.essawy/',
            extraCss: '',
            svg: <Facebook className='w-5 h-5' />
        },
        {
            name: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
            href: 'https://www.instagram.com/abdelrahman_essawy/',
            extraCss: '',
            svg: <Instagram className='w-5 h-5' />

        },
        {
            name: 'Github',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111425.png',
            href: 'https://github.com/abdelrahman-essawy',
            extraCss: '',
            svg: <Github className='w-5 h-5' />

        },
        {
            name: 'Linkedin',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111499.png',
            href: 'https://www.linkedin.com/in/abdelrahman-essawy/',
            extraCss: 'mb-1',
            svg: <Linkedin className='w-5 h-5' />

        },
        // {
        //     name: 'Discord',
        //     icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
        //     href:'',
        //     extraCss:'mt-1'
        // },
    ]
    return (

        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900 text-center sm:text-start">
            <div class="px-4 sm:mt-2  max-w-screen-xl m-auto mx-auto sm:text-start text-center lg:py-0 lg:px-12 md:flex md:justify-between">
                <div class="mb-6 md:mb-0 text-4xl sm:text-2xl ">
                    <Link href="https://essawy.me/" >
                        <span className='text-gray-700'>&lt;</span>
                        <span className='text-blue-700'>
                            AE
                        </span>
                        <span className='text-gray-700'>/&gt;</span>
                    </Link>
                </div>
                <div class=" mt-8 sm:mt-0">
                    <div>
                        <ul class="text-gray-600 dark:text-gray-400 sm:flex sm:gap-x-12 sm:items-center grid grid-cols-3 gap-y-3">
                            {navigation.map((
                                {
                                    name,
                                    href,

                                }, index
                            ) => (
                                <li
                                    key={index}>
                                    <Link
                                        href={href}
                                        className={`hover:underline`}
                                        aria-current={name}
                                    >

                                        {name}
                                    </Link>
                                </li>

                            ))}

                        </ul>
                    </div>


                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="px-4  max-w-screen-xl m-auto mx-auto sm:text-start text-center lg:py-0 lg:px-12 md:flex md:justify-between sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://essawy.me/" class="hover:underline">Abdelrahman Essawy</Link>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center justify-center sm:mt-0 items-center">
                    {
                        socialMedia.map(({
                            name,
                            icon,
                            svg,
                            href
                        }, index) => (
                            <>
                                <Link
                                    key={index}
                                    href={href}
                                    class="text-gray-500 grayscale sm:hover:grayscale-0 hover:text-gray-900 dark:hover:text-white"
                                >
                                    {svg}
                                </Link>
                            </>

                        ))
                    }
                </div>
            </div>
        </footer>

    )
}
