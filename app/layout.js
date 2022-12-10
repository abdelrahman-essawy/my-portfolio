"use client"
import '../styles/globals.css'
import {motion} from 'framer-motion'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <motion.body initial={{opacity:0}} animate={{opacity:1}}>{children}</motion.body>
    </html>
  )
}
