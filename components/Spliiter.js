import React from 'react'
import { motion as m } from 'framer-motion'
import { inflate } from 'zlib'

export default function Spliiter() {
  return (
    <m.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 'auto', opacity: 1 }}
      transition={{ duration: '.5' }}
      className='rounded-full z-50 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></m.div>
  )
}
