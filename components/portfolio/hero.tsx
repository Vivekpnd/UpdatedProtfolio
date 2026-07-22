'use client'

import { motion } from 'motion/react'
import { ArrowRight, Download, Sparkles, ChevronDown } from 'lucide-react'
import { DashboardMockup } from './dashboard-mockup'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* backgrounds */}
      <div aria-hidden className="grid-bg absolute inset-0 -z-20" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(70% 55% at 80% 10%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(60% 50% at 5% 90%, rgba(124,58,237,0.14), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for work
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building{' '}
            <span className="text-gradient">Scalable Business Applications</span>{' '}
            That Drive Real Results.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Full Stack Developer with nearly 3 years of experience building ERP
            systems, SaaS platforms, business applications, mobile apps, and
            high-performance web experiences using React, Next.js, Node.js,
            TypeScript, PostgreSQL, and modern cloud technologies.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_16px_40px_-12px_rgba(37,99,235,0.7)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary/60"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-6 font-mono text-xs text-muted-foreground"
          >
            <span>~3 yrs experience</span>
            <span className="h-4 w-px bg-border" />
            <span>20+ projects</span>
            <span className="h-4 w-px bg-border" />
            <span>ERP · SaaS · Web</span>
          </motion.div>
        </motion.div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#stack"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
