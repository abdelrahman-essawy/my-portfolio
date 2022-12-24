import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import OtherSkills from './Skills/OtherSkills'
import TechnicalSkills from './Skills/TechnicalSkills'
import SoftSkills from './Skills/SoftSkills'
import useMeasure from 'react-use-measure'




export default function CurrentTab({ tab, isVisible }) {


  const [ref, { height }] = useMeasure()


  return (

    <m.div
      animate={{ height }}
      transition={{ when: 'beforeChildren', type: 'spring', stiffness: 1000, damping: 45 }}
      className='mt-1 text-gray-600 bg-white rounded-lg shadow-inner'
    >
      <div ref={ref} className={'p-3'}>
        {tab === 'Soft Skills' && <SoftSkills />}
        {tab === 'Technical Skills' && <TechnicalSkills />}
        {tab === 'Other Skills' && <OtherSkills />}
      </div>


    </m.div>

  )
}
