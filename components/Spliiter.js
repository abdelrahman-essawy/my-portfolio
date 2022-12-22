import React from 'react'
import { motion as m } from 'framer-motion'
import { inflate } from 'zlib'

export default function Spliiter() {
  return (
    <>
      <m.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 'auto', opacity: 1 }}
      transition={{ duration: '.5' }}
        className='z-50 hidden h-1 rounded-full sm:block bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500' />

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: '.5' }}
        className='z-50 block h-1 rounded-full sm:hidden bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500' />
    </>
  )
}
