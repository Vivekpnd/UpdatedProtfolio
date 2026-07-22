'use client'

import { motion } from 'motion/react'
import {
  Activity,
  ArrowUpRight,
  Boxes,
  CircleDollarSign,
  Cpu,
  Users,
} from 'lucide-react'

const bars = [38, 52, 44, 66, 58, 78, 71, 92, 84]

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 20%, rgba(37,99,235,0.35), transparent 70%), radial-gradient(50% 50% at 20% 80%, rgba(124,58,237,0.28), transparent 70%)',
        }}
      />

      {/* main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="glass relative overflow-hidden rounded-2xl border border-border p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] sm:p-5"
      >
        {/* window chrome */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <div className="ml-3 flex items-center gap-2 rounded-md bg-secondary/60 px-2.5 py-1">
            <Boxes className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="font-mono text-[11px] text-muted-foreground">
              erp / overview
            </span>
          </div>
        </div>

        {/* stat row */}
        <div className="mb-4 grid grid-cols-3 gap-2.5">
          {[
            { icon: CircleDollarSign, label: 'Revenue', value: '$482K', up: '+12%' },
            { icon: Users, label: 'Active users', value: '9,214', up: '+6%' },
            { icon: Activity, label: 'Uptime', value: '99.98%', up: 'SLA' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-background/40 p-3"
            >
              <s.icon className="mb-2 h-4 w-4 text-primary" />
              <div className="text-sm font-semibold leading-none">{s.value}</div>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-[10px] text-muted-foreground">{s.label}</span>
                <span className="text-[10px] font-medium text-success">{s.up}</span>
              </div>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-foreground">
              Throughput
            </span>
            <span className="flex items-center gap-1 text-[11px] text-success">
              <ArrowUpRight className="h-3.5 w-3.5" /> 40% faster
            </span>
          </div>
          <div className="flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-1 rounded-t-md"
                style={{
                  background:
                    i === bars.length - 1
                      ? 'linear-gradient(180deg, #2563eb, #7c3aed)'
                      : 'linear-gradient(180deg, rgba(37,99,235,0.55), rgba(37,99,235,0.12))',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating card: deploy status */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float glass absolute -right-4 top-16 hidden rounded-xl border border-border p-3 shadow-2xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <div>
            <div className="text-xs font-semibold leading-none">Deploy ready</div>
            <div className="mt-1 font-mono text-[10px] text-muted-foreground">
              build · 12.4s
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating card: latency */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float-slow glass absolute -left-5 bottom-10 hidden rounded-xl border border-border p-3 shadow-2xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
            <Cpu className="h-4 w-4 text-accent" />
          </span>
          <div>
            <div className="text-xs font-semibold leading-none">API p99</div>
            <div className="mt-1 font-mono text-[10px] text-muted-foreground">
              42ms · healthy
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
