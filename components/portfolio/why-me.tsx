'use client'

import { motion } from 'motion/react'
import {
  Boxes,
  Gauge,
  CodeXml,
  Target,
  Smartphone,
  Plug,
  Search,
  CloudUpload,
  Blocks,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Boxes, title: 'Scalable Architecture', desc: 'Systems designed to grow from first user to enterprise load.' },
  { icon: Gauge, title: 'Performance Optimization', desc: 'Fast load times and perfect Core Web Vitals by default.' },
  { icon: CodeXml, title: 'Clean Code', desc: 'Readable, maintainable, well-structured codebases.' },
  { icon: Target, title: 'Business First', desc: 'Engineering decisions tied to real business outcomes.' },
  { icon: Smartphone, title: 'Responsive UI', desc: 'Pixel-perfect experiences on every screen size.' },
  { icon: Plug, title: 'API Integrations', desc: 'Robust third-party and internal API integrations.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Discoverable, semantic, search-friendly builds.' },
  { icon: CloudUpload, title: 'Cloud Deployment', desc: 'CI/CD pipelines on AWS and Vercel.' },
  { icon: Blocks, title: 'Reusable Components', desc: 'Composable systems that speed up delivery.' },
  { icon: ShieldCheck, title: 'Production Ready', desc: 'Secure, tested and reliable from day one.' },
]

export function WhyMe() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(124,58,237,0.08), transparent 70%)',
        }}
      />
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionHeading
          align="center"
          eyebrow="Why Work With Me"
          title="Engineering discipline meets product thinking"
          description="Everything I build is measured against reliability, performance and business value."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="group h-full rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
