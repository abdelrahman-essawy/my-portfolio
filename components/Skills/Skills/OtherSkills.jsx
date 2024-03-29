import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from "next/image";
import update from 'immutability-helper';

export default function OtherSkills({ windowScreenWidth }) {
    const handleSlice = () => {
        if (windowScreenWidth < 640) {

            return 3

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
                            <>

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
                                                        <>
                                                            <div className={`flex justify-center items-center p-2`}>
                                                                <div className='mb-auto w-14 sm:w-10 h-14 sm:h-10'>

                                                                    <Image
                                                                        width="100"
                                                                        height="100"
                                                                        alt={by}
                                                                        src={icon}
                                                                        className='rounded-lg'
                                                                        style={{
                                                                            maxWidth: "100%",
                                                                            height: "auto"
                                                                        }} />
                                                                </div>

                                                                <div className={`flex flex-col gap-1 ml-2 text-start`}>
                                                                    {by ? <div className='text-sm tracking-tay-600 font-mediumfont-medium font-SourceCodePro'>{by}</div> : null}
                                                                    {date ? <div className='text-xs font-light text-gray-500'>{date}</div> : null}
                                                                    {id ? <div className='text-xs font-light text-gray-500'>Credential ID : {id}</div> : null}
                                                                </div>
                                                            </div>
                                                        </>
                                                        : null}

                                            </div>


                                        </div>

                                    </div>
                                    <div className='m-auto sm:mr-10 sm:m-auto'>
                                        <a
                                            href={href}
                                        >

                                            {href ? <a href={href
                                                ? href
                                                : '#'} target='_blank' rel='noreferrer' >
                                                {badgeTemplete('verify', 'text-red-400 border-red-400 hover:bg-red-400 hover:text-white active:bg-red-400 active:text-white')}
                                            </a> : ``}

                                        </a>
                                    </div>
                                </m.div>
                                {by && <m.hr
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.07 * index }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className={`my-2 sm:hidden ${index == desc.length - 1 && `hidden`}`} />}

                            </>
                        ))}
                    </div>
                </m.div>
            );
        }
        return (
            <>
                {wordDesc && text(wordDesc)}
                {desc && array(desc)}
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
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-white lowercase border bg-red-400 rounded-md font-SourceCodePro  ${args}`}>
                        expert
                    </div>
                )
            case 'verify':

                return (
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-red-400 lowercase border border-red-400 rounded-md font-SourceCodePro  hover:bg-red-400 hover:text-white active:bg-red-400 active:text-white ${args}`}>
                        Verify
                    </div>
                )
            case 'Cert.':

                return (
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-purple-400 lowercase border border-purple-400 rounded-md font-SourceCodePro   ${args}`}>
                        Cert.
                    </div>
                )
            case 'amature':

                return (
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-blue-400 lowercase border border-blue-400 rounded-md font-SourceCodePro  ${args}`}>
                        amature
                    </div>
                )
            case 'hands-on':

                return (
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-green-500 lowercase border border-green-500 rounded-md font-SourceCodePro ${args}`}>
                        hands-on
                    </div>
                )
            case 'intern':
                return (
                    <div className={`p-1 ml-4 text-[.68rem] leading-3 sm:text-xs text-yellow-600 lowercase border border-yellow-600 rounded-md font-SourceCodePro ${args}`}>
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
    const cert = (
        name,
        by,
        date,
        id,
        icon,
        href = null,
        color = 'bg-red-500',
    ) => {
        const certTemplete = {
            name: name,
            by: by,
            href: href,
            id: id,
            date: date,
            icon: icon,
            color: color,
        }
        return certTemplete
    }


    const [otherSkills, setOtherSkills] = useState([
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
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Nmap',
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Wireshark',
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Burp Suite',
                    color: 'bg-yellow-600',
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
                    name: 'Cert. Ethical Hacker',
                    by: 'ITI',
                    date: 'Issued Jul 2022',
                    id: 'szfaTBVwD9',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259560&amp;code=szfaTBVwD9&amp;qrcode=1',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                    color: 'bg-red-500',

                },
                {
                    name: 'Cyber Security Engineer',
                    by: 'ITI',
                    date: 'Issued Jul 2022',
                    id: 'xnYmZEvZfd',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259555&code=xnYmZEvZfd&qrcode=1',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                    color: 'bg-red-500',


                },
                {
                    name: 'Netowrk Security Engineer',
                    by: 'ITI',
                    date: 'Issued Jul 2022',
                    id: 'e8lLCxRnrI',
                    href: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35618&code=e8lLCxRnrI&qrcode=1',
                    icon: 'https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1519885145295?e=1680739200&v=beta&t=X4Q4dPPe6YvMn8LJEoZuP9ZwDc7Kpv0xwCt9wnx8tjU',
                    color: 'bg-red-500',


                },
                {
                    name: 'Pre Security',
                    by: 'TryHackMe',
                    date: 'Issued Jul 2022',
                    id: 'THM-V1OLTKREBZ',
                    icon: 'https://media.licdn.com/dms/image/C4D0BAQHbrQNn-KIK_g/company-logo_100_100/0/1555598012984?e=1680739200&v=beta&t=EBhAyahiHPZ41TJu8RR4CX3a3PxLIEJrV_iel9-xAFk',
                    href: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-V1OLTKREBZ.png',
                    color: 'bg-red-500',


                },
                {
                    name: 'Social Engineering',
                    by: 'CodeRed',
                    date: 'Issued Jul 2022',
                    id: '1d0a1029-036e-4693-aa0f-03e5244e65bf',
                    icon: 'https://media.licdn.com/dms/image/C4E0BAQFs-2ABuczSnA/company-logo_100_100/0/1647326522520?e=1680739200&v=beta&t=8M1StpjDoT8vDZn1M6yjigr2ccZT6YEx9w83HLRHopU',
                    href: 'https://media.licdn.com/dms/image/C4E0BAQFs-2ABuczSnA/company-logo_100_100/0/1647326522520?e=1680739200&v=beta&t=8M1StpjDoT8vDZn1M6yjigr2ccZT6YEx9w83HLRHopU',
                    color: 'bg-red-500',


                },
                cert('Internship',
                    'EZDK',
                    'Aug 2022 - Sep 2022',
                    '',
                    'https://media.licdn.com/dms/image/C4E0BAQGOXgJ-PCvrpg/company-logo_100_100/0/1519878976704?e=1680739200&v=beta&t=Nt7cPWWqd8LPyzQBezizd0efFR3hnQgQ2oEYozUm3us',
                    '')


            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716652.png',
            badges: [
                'expert', 'intern', 'Cert.', 'hands-on',
            ],
        },
        {
            name: 'Networking',
            wordDesc: 'Have been working with networking since 2018. I have worked with many networking devices and protocols. I have also worked with many network solutions like Packet Tracer and Wireshark.',
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
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Wireshark',
                    color: 'bg-yellow-600',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: '',
                    color: '',
                },
                cert('Internship',
                    'EZDK',
                    'Aug 2022 - Sep 2022',
                    '',
                    'https://media.licdn.com/dms/image/C4E0BAQGOXgJ-PCvrpg/company-logo_100_100/0/1519878976704?e=1680739200&v=beta&t=Nt7cPWWqd8LPyzQBezizd0efFR3hnQgQ2oEYozUm3us',
                    '')


            ],
            icon: 'https://cdn-icons-png.flaticon.com/512/1239/1239682.png',
            badges: [
                'intern', 'hands-on'
            ],
        },
        {
            name: 'Linux',
            wordDesc: 'I have a good understanding of Linux and how it works. I have worked with many Linux distributions and I have also worked with many Linux tools.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2333/2333187.png',
            badges: [
                'hands-on', 'amature'
            ],
            desc: [
                {
                    name: 'Linux Administration',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Linux Troubleshooting',
                    color: 'bg-blue-500',
                },
                {
                    name: 'Kali Linux',
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Ubuntu',
                    color: 'bg-yellow-600',
                },
                {
                    name: '',
                    color: '',
                },
                {
                    name: '',
                    color: '',
                },
                cert('Shell Bash Scripting',
                    'Coursera',
                    'Issued May 2022',
                    '2PRJQYMSXA35',
                    'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1680739200&v=beta&t=Wtfo6t88A1NRA7A29vN1gsY1km-hYTbpHx5lgHinTJs',
                    'https://coursera-certificate-images.s3.amazonaws.com/2PRJQYMSXA35')
            ],
        },

        {
            name: '3D Designing',
            wordDesc: 'I have been working as Freelance 3D Desginer since 2020. I have worked with many 3D designing tools and finished more than 150 projects.',
            icon: 'https://cdn-icons-png.flaticon.com/512/1806/1806507.png',
            desc: [
                {
                    name: 'Blender',
                    color: 'bg-yellow-600',
                },
                {
                    name: 'ZBrush',
                    color: 'bg-yellow-600',
                },
                {
                    name: '',
                    color: '',
                }, {
                    name: '',
                    color: '',
                },
                cert('3D Designer',
                    'Fiverr',
                    '97 Reviews, 98% Positive Rating',
                    '',
                    'https://media.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1680739200&v=beta&t=gtIusyHXsCts8HOmeYPtl5fAfqPL2DprENS0rEEPhD8',
                    'https://www.fiverr.com/abdelrahman_ess')

            ],
            badges: [
                'expert', 'hands-on'
            ],
        },
        {
            name: 'Video Editing',
            icon: 'https://cdn-icons-png.flaticon.com/512/2886/2886875.png',
            wordDesc: `Used to montage and edit videos for my college projects. Have worked with many video editing tools like Adobe Premiere and Adobe After Effects.`,
            desc: [
                {
                    name: 'Adobe Premiere',
                    color: 'bg-yellow-600',
                },
                {
                    name: 'Adobe After Effects',
                    color: 'bg-yellow-600',
                },
            ],
            badges: [
                'hands-on'
            ],
        },
        {
            name: 'Photography',
            icon: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png',
            wordDesc: `I love taking good photos and know how to edit them. I have worked with many editing tools like Adobe Lightroom and Adobe Photoshop.`,
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
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    type='button'
                    className={`${desc ? `cursor-pointer hover:shadow-lg ${isOpen ? 'sm:col-span-2 sm:shadow-lg' : ''}` : 'cursor-default'} border border-zinc-200/70 rounded-lg shadow-md`}
                    onClick={
                        () => {
                            const newarray = update(otherSkills, { [index]: { isOpen: { $set: !isOpen } } })
                            setOtherSkills(newarray)
                        }
                    }
                >
                    <m.div
                        className='flex items-center justify-between p-3 '>
                        <div className='flex items-center flex-grow'>
                            <div className={`${color}  ${isOpen ? `mb-auto mt-[7.063px]` : `m-auto `}`}>
                                <Image
                                    priority={true}
                                    width="50"
                                    height="50"
                                    src={icon}
                                    alt={name}
                                    className={`sm:w-10 sm:h-10 w-10 h-10 ${isOpen ? `hidden sm:block` : `block`}`}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <div className='w-full ml-4'>
                                <div className='self-center text-sm font-medium text-gray-700 text-start sm:text-md'>
                                    {name}
                                    <span>
                                        <div key={index} className={` mt-1`}>
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
                                    isOpen ?

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
                </m.div>
            ))
            }
        </div>
    );

}
