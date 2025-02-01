"use client"

import { useEffect, useRef } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 1 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ;(ref.current as HTMLDivElement).textContent = Intl.NumberFormat().format(Math.floor(latest))
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

