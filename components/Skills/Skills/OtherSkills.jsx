import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image';
export default function OtherSkills() {
    const descTemplete = (desc) => {
        const text = ({ desc }) => {
            return (
                <m.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}>
                    <p className='py-3 text-sm'>{desc}</p>
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
                    <div className='grid grid-cols-1 py-3 sm:grid-cols-2 justify-evenly'>
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
                                <div className={`ml-2 text-sm font-medium text-gray-500 flex justify-center items-center ${href ? `text-black text-sm   text-start ` : ``}`}>
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

                                                            <img src={icon} />
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
        if (typeof desc === 'string') {
            return text({ desc })
        } else if (Array.isArray(desc)) {
            return array(desc)
        }
    }
    const badgeTemplete = (content = `expert`, ...args) => <span className={`p-1 ml-4 text-xs font-thin text-red-400 uppercase border border-red-400 rounded-md font-SourceCodePro ${args}`}>{content}</span>
    const [otherSkills, setOtherSkills] = useState([
        {
            name: 'Networking',
            desc: [
                {
                    name: 'Network design',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network administration',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network troubleshooting',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Network security',
                    color: 'bg-blue-500',
                },
            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/1239/1239682.png',
        },
        {
            name: 'Linux',
            desc: 'I have a good understanding of Linux and how it works. I have a good understanding of how to set up a Linux server and how to troubleshoot it.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2333/2333187.png',
        },
        {
            name: 'Cyber Security',
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
                    color: 'bg-red-500',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259560&amp;code=szfaTBVwD9&amp;qrcode=1',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                },
                {
                    name: 'Cyber Security Engineer',
                    color: 'bg-red-500',
                    by: 'ITI - Information Technology Institute',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259555&code=xnYmZEvZfd&qrcode=1',
                    id: 'xnYmZEvZfd',
                    date: 'Issued Jul 2022',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',

                },


            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716652.png',
            badge: true,
        },
        {
            name: '3D Designing',
            icon: 'https://cdn-icons-png.flaticon.com/512/1806/1806507.png',
            desc: [
                {
                    name: 'Blender',
                    color: 'bg-blue-500',
                },
                {
                    name: 'ZBrush',
                    color: 'bg-blue-500',
                }
            ],
            badge: true,
        },
        {
            name: 'Video Editing',
            icon: 'https://cdn-icons-png.flaticon.com/512/2886/2886875.png',
            desc: [
                {
                    name: 'Adobe Premiere',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Adobe After Effects',
                    color: 'bg-blue-500',
                },
            ],
        },
        {
            name: 'Photography',
            icon: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png',
        },
    ])
    return (
        <div className='grid items-start grid-cols-1 gap-4 sm:grid-cols-2'>
            {otherSkills.map(({
                name,
                desc,
                color,
                viewDesc,
                icon,
                badge,
                isOpen,
            }, index) => (
                <m.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    type='button'
                    className={`${desc ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'}  ${isOpen ? 'sm:col-span-2 sm:shadow-lg' : ''}  rounded-lg shadow-md`}
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
                            <div className={`flex-shrink-0 ${color}`}>
                                <Image
                                    priority={true}
                                    width="100"
                                    height="100"
                                    layout="intrinsic"
                                    src={icon} alt={name} className={`w-8 h-8 ${isOpen ? `hidden` : `block`}`} />
                            </div>
                            <div className='w-full ml-4'>
                                <div className='self-center font-medium text-gray-700 text-md text-start sm:text-md'>{name} {badge ? badgeTemplete() : null}</div>
                                {
                                    viewDesc ?
                                        descTemplete(desc)
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div className={` rounded-lg p-1 `}>
                            {desc ? <svg xmlns="http://www.w3.org/5000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`${viewDesc ? 'rotate - 0' : 'rotate-180'} transform h-6 w-6 text-blue-500`}>
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
