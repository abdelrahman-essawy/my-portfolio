import React, { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import useMeasure from 'react-use-measure'

const SoftSkills = lazy(() => import('./Skills/SoftSkills'))
const TechnicalSkills = lazy(() => import('./Skills/TechnicalSkills'))
const OtherSkills = lazy(() => import('./Skills/OtherSkills'))




export default function CurrentTab({ tab, windowScreenWidth, isSkillsVisible }) {


  const [ref, { height }] = useMeasure()
  useEffect(() => {
    const screenWidth = window.innerWidth
  }, [])

  return (

    <m.div
      animate={{ height }}
      transition={{ when: 'beforeChildren', type: 'spring', stiffness: 1000, damping: 50 }}
      className='mt-1 text-gray-600 bg-white rounded-lg shadow-inner'
    >
      <div ref={ref} className={'p-3'}>
        {
          isSkillsVisible && (
            <AnimatePresence>
              <Suspense fallback={<div>Loading Skills...</div>}>
                {tab === 'Soft Skills' && <SoftSkills />}
                {tab === 'Technical Skills' && <TechnicalSkills />}
                {tab === 'Other Skills' && <OtherSkills />}
              </Suspense>
            </AnimatePresence>
          )
        }
      </div>


    </m.div>

  )
}
