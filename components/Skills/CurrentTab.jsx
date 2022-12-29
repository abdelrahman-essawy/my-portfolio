import React, { useEffect } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import OtherSkills from './Skills/OtherSkills'
import TechnicalSkills from './Skills/TechnicalSkills'
import SoftSkills from './Skills/SoftSkills'
import useMeasure from 'react-use-measure'




export default function CurrentTab({ tab, isVisible, windowScreenWidth }) {


  const [ref, { height }] = useMeasure()
  useEffect(() => {
    const screenWidth = window.innerWidth
    console.log(screenWidth)
  }, [])

  return (

    <m.div
      animate={{ height }}
      transition={{ when: 'beforeChildren', type: 'spring', stiffness: 1000, damping: 50 }}
      className='mt-1 text-gray-600 bg-white rounded-lg shadow-inner'
    >
      <div ref={ref} className={'p-3'}>
        {tab === 'Soft Skills' && <SoftSkills windowScreenWidth={windowScreenWidth} />}
        {tab === 'Technical Skills' && <TechnicalSkills windowScreenWidth={windowScreenWidth} />}
        {tab === 'Other Skills' && <OtherSkills windowScreenWidth={windowScreenWidth} />}
      </div>


    </m.div>

  )
}
