import React from 'react'
import EducationSVG from '../SVG/About/EducationSVG'
import NewbornSVG from '../SVG/About/NewbornSVG'
import TournamentSVG from '../SVG/About/TournamentSVG'
import { motion as m } from 'framer-motion'

export default function Timeline({ learnMore }) {

    const timelineItems = [
        {
            date: 'Nov 2022 – Present',
            title: 'Front End Developer',
            description: 'IEEE',
            arrayDescription: [
                'Implemented modern web applications with React, Next.js, Tailwind, and firebase.',
                'Built websites, and landing pages from concept through deployment.',
                'Standardized all output with a new, responsive, mobile-first approach and strategy.',
                'Assessed UX and UI designs for technical feasibility.',
                'Collaborated with product team members to implement new feature developments.',
            ],
            extraInfo: 'Volunteering',
        },
        {
            date: 'Aug 2022 – Sep 2022',
            title: 'Software Engineer',
            description: 'EZDK',
            arrayDescription: [
                'Completed maintenance on existing programs.',
                'Confirmed that completed software met client requirements.',
                'Worked closely with the production team on scope of future projects and innovations.',
                'Carried out continuous identification, measurement, and improvement of processes.',
            ],
            extraInfo: 'Internship',
        },
        {
            date: 'August 2021',
            title: '2st place, 2021 IAC tournament.',
            description: 'Achieved 2st place in the 2021 IAC tournament. IAC is an extreme compatitve gaming competition that takes place in Egypt.',
            svg: <TournamentSVG stroke="currentColor" fill="currentColor" strokeWidth={0} aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" height="1em" width="1em" />
        },
        {
            date: 'August 2020',
            title: 'Joined College - Arab Academy for Science, Technology and Maritime Transport.',
            description: 'Joined college in 2020. Majored Computer Science.',
            svg: <EducationSVG stroke="currentColor" fill="currentColor" strokeWidth={0} aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" height="1em" width="1em" />

        },
        {
            date: 'July 2020',
            title: 'High School Diploma.',
            description: 'Graduated from high school in 2020, to start my programming journey.',
            svg: <EducationSVG stroke="currentColor" fill="currentColor" strokeWidth={0} aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" height="1em" width="1em" />
        },
        {
            date: 'April 2002',
            title: 'A legend is born.',
            description: 'Not to much to say here, but I was born in the year 2002.',
            svg: <NewbornSVG stroke="currentColor" fill="currentColor" strokeWidth={0} aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" height="1em" width="1em" />
        },]

    return (
        <m.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            viewport={{once: true}}
            transition={{ delay: 0.1, when: 'beforeChildren' }}
            
        >
            <ol data-testid="timeline-component" className="relative border-l border-blue-200 dark:border-gray-700 ">
                {
                    timelineItems
                        .slice(0, learnMore ? timelineItems.length : 2)
                        .map((
                        {
                            date,
                            title,
                            description,
                            extraInfo,
                            link,
                            arrayDescription,
                            svg
                        }
                        , index) => {
                        return (
                            <m.li
                                initial={{ opacity: 0,}}
                                whileInView={{ opacity: 1, type: 'spring' }}
                                viewport={{ once: true }}
                                transition={{ delay: .1 * index, when: 'beforeChildren' }}
                                
                                
                                data-testid="timeline-item" className="mb-10 ml-6" key={index}>
                                <div data-testid="timeline-point" className='bg-zinc-50' >
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-zinc-50 dark:bg-blue-900 dark:ring-gray-900">
                                        {svg ? svg : <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>}
                                    </span>
                                </div>
                                <div data-testid="timeline-content" className>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title} {extraInfo && <span className='italic font-normal text-gray-600'> - {extraInfo}</span>}</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                                    <ol className='relative ml-4 border-l border-gray-200 dark:border-gray-700' >

                                        {
                                            arrayDescription && arrayDescription
                                                .slice(0, learnMore ? arrayDescription.length : 3)
                                                .map((desc, index) => {
                                                return (
                                                    <m.li
                                                        initial={{ opacity: 0, }}
                                                        whileInView={{ opacity: 1, type: 'spring' }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: .2 * index }}
                                                        className="mb-4 ml-5 " key={index}>
                                                        <div className='bg-zinc-50' >
                                                            <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full -left-3 ring-8 ring-zinc-50 dark:bg-blue-900 dark:ring-gray-900">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" className='p-1 text-blue-700'>
                                                                    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M21 6L9 18 4 13" />
                                                                </svg>

                                                            </span>
                                                        </div>
                                                        <div className>
                                                            <p className="my-auto text-sm font-normal text-gray-500 dark:text-gray-400">{desc}</p>
                                                        </div>
                                                    </m.li>
                                                )
                                            }
                                            )

                                        }

                                    </ol>
                                    {
                                        link && (
                                            <button className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
                                                <span className="flex items-center px-4 py-2 text-sm rounded-md">Learn More<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" className="w-3 h-3 ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />            </svg>
                                                </span>
                                            </button>)

                                    }
                                </div>
                            </m.li>
                        )
                    }
                    )

                }
            </ol>
        </m.div>


    )
}
