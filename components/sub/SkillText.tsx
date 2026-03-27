"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mb-12'>
      <motion.div
        variants={slideInFromTop}
        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-4"
      >
        <FontAwesomeIcon icon={faStar} className="text-[#3b82f6] h-4 w-4" />
        <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
          
        </span>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className='text-3xl sm:text-4xl font-extrabold mt-2 text-center mb-4 text-white'
      >
        Technologies que
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]"> j utilise</span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        className='text-sm text-gray-500 max-w-xl text-center leading-relaxed'
      >
        Un arsenal de technologies modernes pour concevoir des applications web et mobiles performantes.
      </motion.p>
    </div>
  )
}

export default SkillText
