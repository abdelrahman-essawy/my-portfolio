import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image';
export default function OtherSkills({ windowScreenWidth }) {
    const handleSlice = () => {
        if (windowScreenWidth < 640) {

            return 2

        }
        return 5
    }
    const descTemplete = (wordDesc, desc) => {
        const text = (wordDesc) => {
            return (
                <m.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}>
                    <p className='py-3 text-sm text-start'>{wordDesc}</p>
                </m.div>
            )
        }
        const array = (desc) => {
            return (
                <m.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                >
                    <div className='grid w-full grid-cols-1 py-3 sm:grid-cols-2 justify-evenly'>
                        {desc.map(({
                            name,
                            color,
                            href,
                            by,
                            id,
                            date,
                            icon
                        }, index) => (
                            <m.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.07 * index }}
                                exit={{ opacity: 0, y: 5 }}
                                key={index} className='flex items-start justify-start'>
                                <div className={`ml-2 text-sm font-medium text-gray-500 flex justify-center items-center ${href ? `text-black text-sm text-start ` : ``}`}>
                                    <div className='self-start flex-grow mr-auto'>
                                        <div className={`flex justify-start gap-2 items-center`}>
                                            <div className={`h-2 w-2 ${color} rounded-full`} />

                                            {name}
                                        </div>
                                        <div>
                                            {
                                                by ?
                                                    <div className={`flex justify-center items-center p-2`}>
                                                        <div className='mb-auto w-14 sm:w-10 h-14 sm:h-10'>

                                                            <Image
                                                                width="100"
                                                                height="100"
                                                                layout="intrinsic"
                                                                alt={by}
                                                                src={icon} />
                                                        </div>

                                                        <div className={`flex flex-col gap-1 ml-2`}>
                                                            {by ? <div className='text-sm font-medium tracking-wide text-gray-600'>{by}</div> : null}
                                                            {date ? <div className='text-xs font-light text-gray-500'>{date}</div> : null}
                                                            {id ? <div className='text-xs font-light text-gray-500'>Credential ID : {id}</div> : null}
                                                        </div>
                                                    </div>
                                                    : null}

                                        </div>


                                    </div>

                                </div>
                                <div className='ml-auto sm:m-auto '>
                                    <a
                                        href={href}
                                    >

                                        {href ? <a href={href
                                            ? href
                                            : '#'} target='_blank' rel='noreferrer' >
                                            {badgeTemplete('verify', 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white')}
                                        </a> : ``}

                                    </a>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            )
        }
        return (
            <>
                {text(wordDesc)}
                {array(desc)}
            </>

        )

    }
    const badgeTemplete = (
        content,
        ...args
    ) => {
        switch (content) {
            case 'expert':
                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-white uppercase border bg-red-400 rounded-md font-SourceCodePro  ${args}`}>
                        expert
                    </div>
                )
            case 'verify':

                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-blue-400 uppercase border border-blue-400 rounded-md font-SourceCodePro  hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white ${args}`}>
                        Verify
                    </div>
                )
            case 'certified':

                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-blue-400 uppercase border border-blue-400 rounded-md font-SourceCodePro  hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white ${args}`}>
                        Certified
                    </div>
                )
            case 'amature':

                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-blue-400 uppercase border border-blue-400 rounded-md font-SourceCodePro  hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white ${args}`}>
                        amature
                    </div>
                )
            case 'hands-on':

                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-green-500 uppercase border border-green-500 rounded-md font-SourceCodePro ${args}`}>
                        hands-on
                    </div>
                )
            case 'intern':
                return (
                    <div className={`p-1 ml-4 text-xs font-thin text-yellow-500 uppercase border border-yellow-500 rounded-md font-SourceCodePro ${args}`}>
                        intern
                    </div>
                )

            default:
                return (
                    <div className={`flex justify-center items-center px-2 py-1 text-xs font-medium tracking-wide text-white rounded-full ${args}`}>
                        expert
                    </div>
                )
        }

    }

    const [otherSkills, setOtherSkills] = useState([
        {
            name: 'Networking',
            wordDesc: 'I have been working with networking since 2018. I have worked with many networking devices and protocols. I have also worked with many network simulators like Packet Tracer and Wireshark.',
            desc: [
                {
                    name: 'Network Design',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network Administration',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network Troubleshooting',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network Security',
                    color: 'bg-blue-500',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: 'Packet Tracer',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'Wireshark',
                    color: 'bg-yellow-500',
                },


            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/1239/1239682.png',
            badges: [
                'intern', 'hands-on'
            ],
        },
        {
            name: 'Linux',
            wordDesc: 'I have a good understanding of Linux and how it works. I have a good understanding of how to set up a Linux server and how to troubleshoot it.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2333/2333187.png',
            badges: [
                'hands-on', 'amature'
            ],
            desc: [
                {
                    name: 'Linux Administration',
                    color: 'bg-blue-500',
                }
            ],
        },
        {
            name: 'Cyber Security',
            wordDesc: 'I have a good understanding of Cyber Security and how it works. I have a good understanding of how to set up a Cyber Security server and how to troubleshoot it.',
            desc: [
                {
                    name: 'SOC Analysis',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Incidents Response',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Web Security & OWASP Top 10',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network & Wireless Security',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Vulnerability Assessment',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Risk Assessment',
                    color: 'bg-blue-500',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: 'Metasploit',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'Nmap',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'Wireshark',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'Burp Suite',
                    color: 'bg-yellow-500',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: 'Certified Ethical Hacker',
                    by: 'ITI - Information Technology Institute',
                    date: 'Issued Jul 2022',
                    id: 'szfaTBVwD9',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259560&amp;code=szfaTBVwD9&amp;qrcode=1',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                    color: 'bg-red-500',

                },
                {
                    name: 'Cyber Security Engineer',
                    by: 'ITI - Information Technology Institute',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259555&code=xnYmZEvZfd&qrcode=1',
                    id: 'xnYmZEvZfd',
                    date: 'Issued Jul 2022',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                    color: 'bg-red-500',


                },


            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716652.png',
            badges: [
                'expert', 'intern', 'hands-on',
            ],
        },
        {
            name: '3D Designing',
            icon: 'https://cdn-icons-png.flaticon.com/512/1806/1806507.png',
            desc: [
                {
                    name: 'Blender',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'ZBrush',
                    color: 'bg-yellow-500',
                }
            ],
            badges: [
                'expert', 'hands-on'
            ],
        },
        {
            name: 'Video Editing',
            icon: 'https://cdn-icons-png.flaticon.com/512/2886/2886875.png',
            desc: [
                {
                    name: 'Adobe Premiere',
                    color: 'bg-yellow-500',
                },
                {
                    name: 'Adobe After Effects',
                    color: 'bg-yellow-500',
                },
            ],
            badges: [
                'hands-on'
            ],
        },
        {
            name: 'Photography',
            icon: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png',
            badges: [
                'amature'],
            desc: [
                {
                    name: 'Adobe Lightroom',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Adobe Photoshop',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Adobe Illustrator',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Lighting and Composition Rules',
                    color: 'bg-blue-500',
                }
            ],

        },

    ])
    return (
        <div className='grid items-start grid-cols-1 gap-4 sm:grid-cols-2'>
            {otherSkills.map(({
                name,
                desc,
                color,
                wordDesc,
                viewDesc,
                icon,
                badges,
                isOpen,
            }, index) => (
                <m.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    type='button'
                    className={`${desc ? `cursor-pointer hover:shadow-lg ${isOpen ? 'sm:col-span-2 sm:shadow-lg' : ''}` : 'cursor-default'} border border-zinc-200/70 rounded-lg shadow-md`}
                    onClick={() => {
                        setOtherSkills((prev) => {
                            const newSkillsWithDesc = [...prev]
                            newSkillsWithDesc[index].viewDesc = !newSkillsWithDesc[index].viewDesc
                            newSkillsWithDesc[index].isOpen = !newSkillsWithDesc[index].isOpen
                            return newSkillsWithDesc
                        })
                    }}
                >
                    <m.div
                        className='flex items-center justify-between p-3 '>
                        <div className='flex items-center flex-grow'>
                            <div className={`${color} mb-auto`}>
                                <Image
                                    priority={true}
                                    width="100"
                                    height="100"
                                    layout="intrinsic"
                                    src={icon} alt={name} className={`w-8 h-8  ${isOpen ? `hidden sm:block` : `block`}`} />
                            </div>
                            <div className='w-full ml-4'>
                                <div className='self-center font-medium text-gray-700 text-md text-start sm:text-md'>{name}<span>
                                    <div key={index} className={`inline-block`}>
                                        {

                                            badges ?
                                                badges
                                                    .slice(0, handleSlice())
                                                    .map((badge, index) => (
                                                        <div key={index} className={`inline-block`}>
                                                            {
                                                                badgeTemplete(badge)
                                                            }
                                                        </div>

                                                    ))
                                                :
                                                null

                                        }
                                    </div>

                                </span>
                                </div>
                                {
                                    viewDesc ?

                                        descTemplete(wordDesc, desc)



                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div className={` rounded-lg p-1 `}>
                            {desc || wordDesc ? <svg xmlns="http://www.w3.org/5000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`${viewDesc ? 'rotate - 0' : 'rotate-180'} transform h-6 w-6 text-blue-500`}>
                                <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd">
                                </path>
                            </svg> : ''}
                        </div>

                    </m.div>
                </m.button>
            ))
            }
        </div>
    )
}
