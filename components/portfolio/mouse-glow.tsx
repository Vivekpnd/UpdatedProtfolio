'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function MouseGlow() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 30, mass: 0.6 })

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 300)
      y.set(e.clientY - 300)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[600px] w-[600px] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)',
      }}
    />
  )
}
