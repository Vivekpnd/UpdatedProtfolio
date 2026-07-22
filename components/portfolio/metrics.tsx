'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'motion/react'
import { Reveal } from './reveal'

type Metric = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  sub: string
  decimals?: number
}

const metrics: Metric[] = [
  { value: 3, prefix: '~', suffix: ' yrs', label: 'Experience', sub: 'Building production software' },
  { value: 20, suffix: '+', label: 'Projects delivered', sub: 'ERP, SaaS & web platforms' },
  { value: 40, suffix: '%', label: 'Performance gain', sub: 'Average speed improvement' },
  { value: 99.9, suffix: '%', label: 'Uptime', sub: 'On production deployments', decimals: 1 },
]

function Counter({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, metric.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, metric.value])

  return (
    <span ref={ref}>
      {metric.prefix}
      {display.toFixed(metric.decimals ?? 0)}
      {metric.suffix}
    </span>
  )
}

export function Metrics() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-[1280px] px-5">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="px-2 py-4 text-center sm:text-left">
                <div className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                  <Counter metric={m} />
                </div>
                <div className="mt-3 text-sm font-medium text-foreground">
                  {m.label}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
