import React, { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import CurrentTab from './CurrentTab'

export default function Tabs() {
    const [tabs, setTabs] = useState(['Soft Skills', 'Technical Skills', 'Personal Skills'])
    const [selected, setSelected] = useState('Technical Skills')
    const [x, setX] = useState(0)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handleTap = (tab, event) => {
        setSelected(tab)
        console.log(event)
    }

    return (
        <m.div
            className='w-full max-w-screen-xl p-1 bg-blue-500/50 rounded-xl' >
            <m.div
                className="flex space-x-1 text-blue-500 rounded-xl ">
                {tabs.map((tab) => (
                    <m.button
                        layout
                        animate={{
                            x: selected === tab ? x : 5,
                            opacity: selected === tab ? 1 : 0.7,
                        }}

                        key={tab}
                        onClick={() => handleTap(tab, event)}
                        className={
                            classNames(
                                'w-full py-2.5 text-md rounded-lg font-medium leading-5',
                                'focus:outline-none',
                                selected === tab ?
                                    'bg-white shadow'
                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        {tab}
                    </m.button>
                ))}


            </m.div>
            <AnimatePresence
                exitBeforeEnter
                animate={{ opacity: 1, x: 0, type: 'spring' }}
            >
                <CurrentTab tab={selected} />

            </AnimatePresence>
        </m.div>
    )
}
