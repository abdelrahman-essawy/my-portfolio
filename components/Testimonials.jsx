import React from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Element } from 'react-scroll'

export default function Testimonials() {
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


    return (
        <Element id='Testimonials'>

            <section  className='bg-white py-6 px-4 sm:p-0 relative overflow-y-hidden'>
                <div className='px-12 my-8 sm:p-0'>

                    <h2 className='text-3xl tracking-tight text-blue-500 leading-2 text-center'>Testimonials</h2>
                    <h3 className='mt-3 font-medium  text-xl sm:tracking-wide text-gray-500 leading-2 text-center'>What My Clients Are Saying...</h3>
                </div>
                <div className='max-screen-w-xl m-auto sm:px-12 my-8 sm:p-0  relative '>

                    <div className='sm:block hidden bg-gradient-to-r from-white to-transparent sm:w-64 h-full absolute left-0 z-20'>
                        <div className='relative flex justify-start h-full w-full items-center'>
                            <button type="button" className="mx-8 z-50 rotate-180 text-gray-500  hover:text-gray-700 focus:outline-none ">
                                <svg aria-hidden="true" className="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Icon description</span>
                            </button>
                        </div>
                    </div>

                    <div className='sm:block justify-between hidden bg-gradient-to-r from-transparent to-white sm:w-64 h-full absolute right-0 z-20'>
                        <div className='relative flex justify-end h-full w-full items-center'>
                            <button type="button" className="mx-8 z-50  text-gray-500  hover:text-gray-700 focus:outline-none ">
                                <svg aria-hidden="true" className="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Icon description</span>
                            </button>
                        </div>
                    </div>



                    <div className=' flex center items-center sm:my-8 overflow-x-auto overflow-clip scroll-smooth scrollbar-hide snap-x snap-mandatory	 space-x-4 lg:space-x-8'>
                        {
                            reviews.map((review, index) => {
                                return <div key={index} className='bg-zinc-50 block select-none rounded-md sm:hover:scale-105 snap-center sm:hover:shadow-xl shadow-sm sm:px-6 sm:py-8  border border-gray-100  sm:flex sm:justify-center sm:items-center'>

                                    <figure className="w-[calc(100vw_-_38px)] px-4 py-6 sm:max-w-xl">
                                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                        <blockquote>
                                            <p className='text-center'>
                                                <span className='text-xl text-gray-400 font-mono'>&quot;
                                                </span>
                                                <span className="text-md font-sans text-gray-900 dark:text-white">{review.desc || <Skeleton count={4} />}</span>
                                                <span className='text-xl text-gray-400 font-mono'>&quot;
                                                </span>
                                            </p>
                                        </blockquote>
                                        <figcaption className="flex items-center  justify-center mt-6 space-x-3">
                                            <Image width={32} height={32} className="rounded-full" src={review.icon || `/placeholder.png`} alt="profile picture" />
                                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                                <div className="pr-3 font-medium text-gray-900 dark:text-white">{review.name || <Skeleton />}</div>
                                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{review.country || <Skeleton />}</div>
                                            </div>
                                        </figcaption>
                                    </figure>

                                </div>
                            })
                        }
                    </div>

                </div>


            </section>
        </Element>
    )

}