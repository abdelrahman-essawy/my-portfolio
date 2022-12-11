import React from 'react'
import { motion as m } from 'framer-motion'
import { inflate } from 'zlib'

export default function ReversedSpliiter() {
  return (
    <m.div
      initial={{ width: "0vw", x: "100vw" }}
      whileInView={{ width: "50vw", x: 0 }}
      transition={{ duration: 1, origin: 1 }}
      className='rounded-full z-50 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500'></m.div>
  )
}
