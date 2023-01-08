import React from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { motion as m } from 'framer-motion'
export default function Review({ name, country, icon, desc }) {

    return (
        <m.figure
            layout

            className="w-[calc(100vw_-_38px)] px-4 py-10 sm:max-w-xl bg-zinc-50 rounded-lg shadow-sm border-zinc-100 border h-fit">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
                <p className='text-center'>
                    <span className='font-sourceCodePro text-xl text-gray-400'>&quot;
                    </span>
                    <span className="font-sans text-gray-900 text-md dark:text-white">

                        <ReactReadMoreReadLess
                            charLimit={160}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                        >
                            {desc || <Skeleton count={4} />}
                        </ReactReadMoreReadLess>
                    </span>
                    <span className='font-sourceCodePro text-xl text-gray-400'>&quot;
                    </span>
                </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image width={32} height={32} loading='lazy' quality={1} className="rounded-full" src={icon || `/placeholder.png`} alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">{name || <Skeleton />}</div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{country || <Skeleton />}</div>
                </div>
            </figcaption>
        </m.figure>
    )
}
