"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "backOut" }}
      className="p-2 rounded-xl bg-[#0d1220] border border-[#1a2040] hover:border-[#3b82f640] transition-colors duration-300"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className="opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  )
}

export default SkillDataProvider
