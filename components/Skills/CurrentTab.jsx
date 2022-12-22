import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import PersonalSkills from './Skills/PersonalSkills'
import TechnicalSkills from './Skills/TechnicalSkills'
import SoftSkills from './Skills/SoftSkills'


export default function CurrentTab({ tab, isVisible }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      animate={{ opacity: 1, x: 0, type: 'spring' }}
    >
      <m.div
        className='p-4 mt-1 text-gray-500 bg-white rounded-lg shadow-lg'
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0, type: 'spring' }}
        transition={{ delay: 0.1 }}
      >

        <p className='text-lg font-medium'></p>
        {tab === 'Soft Skills' && <SoftSkills />}
        {tab === 'Technical Skills' && <TechnicalSkills />}
        {tab === 'Personal Skills' && <PersonalSkills />}

      </m.div>
    </AnimatePresence>

  )
}
