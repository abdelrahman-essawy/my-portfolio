import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer({ navigation }) {
    const socialMedia = [
        {
            name: 'Facebook',
            icon: 'https://cdn-icons-png.flaticon.com/512/3128/3128304.png',
            href:'https://www.facebook.com/abdelrahman.mo.essawy/',
            extraCss:'w-6 h-6'
        },
        {
            name: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
            href:'https://www.instagram.com/abdelrahman_essawy/',
            extraCss:''
        },
        {
            name: 'Github',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111425.png',
            href:'https://github.com/abdelrahman-essawy',
            extraCss:''
        },
        {
            name: 'Linkedin',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111499.png',
            href:'https://www.linkedin.com/in/abdelrahman-essawy/',
            extraCss:'mb-1'
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
            <div class="max-w-screen-xl px-4 mx-auto max-w-screen-xl m-auto mx-auto sm:text-start text-center lg:py-0 lg:px-12 md:flex md:justify-between">
                <div class="mb-6 md:mb-0 text-4xl sm:text-2xl">
                    <Link href="https://essawy.me/" >
                        <span className='text-gray-700'>&lt;</span>
                        <span className='text-blue-700'>
                            AE
                        </span>
                        <span className='text-gray-700'>/&gt;</span>
                    </Link>
                </div>
                <div class=" ">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul class="text-gray-600 dark:text-gray-400 grid grid-cols-3 gap-x-12 gap-y-3">
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
            <div class="max-w-screen-xl px-4 mx-auto max-w-screen-xl m-auto mx-auto sm:text-start text-center lg:py-0 lg:px-12 md:flex md:justify-between sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://essawy.me/" class="hover:underline">Abdelrahman Essawy</Link>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center justify-center sm:mt-0 items-center">
                    {/* {
                        socialMedia.map(({
                            name,
                            icon
                        }, index) => (
                            <Link
                                key={index}
                                href="#"
                                class="text-gray-500 grayscale sm:hover:grayscale-0  hover:text-gray-900 dark:hover:text-white"
                            >
                                <Image
                                    src={icon}
                                    width="24"
                                    height="24"
                                    layout="intrinsic"
                                    alt={name}
                                    className='w-5 h-5 hover:scale-105' />
                            </Link>
                        ))
                    } */}
                </div>
            </div>
        </footer>

    )
}
