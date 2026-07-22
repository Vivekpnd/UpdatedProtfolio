'use client'

import { motion } from 'motion/react'
import { Briefcase } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Role = {
  company: string
  role: string
  duration: string
  achievements: string[]
  tech: string[]
}

const roles: Role[] = [
  {
    company: 'Athratech Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: '2024 — Present',
    achievements: [
      'Led development of a multi-module ERP platform serving multiple business units',
      'Architected role-based access control and audit logging across services',
      'Improved application performance and reporting speed by ~40%',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'MoreTasks Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: '2023 — 2024',
    achievements: [
      'Built inventory and HRM systems used daily by operations teams',
      'Developed a React Native technician tracking app with live GPS',
      'Implemented REST APIs and Supabase auth with row-level security',
    ],
    tech: ['React', 'React Native', 'Express.js', 'Supabase'],
  },
  {
    company: 'FinixPay Pvt. Ltd.',
    role: 'Web Developer',
    duration: '2022 — 2023',
    achievements: [
      'Delivered high-performance Next.js business websites with perfect Core Web Vitals',
      'Built and customized WooCommerce and Magento storefronts',
      'Optimized SEO and responsive design across client projects',
    ],
    tech: ['Next.js', 'WordPress', 'Magento', 'Tailwind'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping real software"
          description="Three years building and scaling business-critical applications across product teams."
        />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* glowing vertical line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px sm:left-[11px]"
            style={{
              background:
                'linear-gradient(180deg, transparent, #2563eb 12%, #7c3aed 88%, transparent)',
            }}
          />

          <div className="flex flex-col gap-10">
            {roles.map((r, i) => (
              <Reveal key={r.company} delay={i * 0.08}>
                <div className="relative">
                  {/* node */}
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/40" />
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  </span>

                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold leading-tight">
                            {r.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {r.company}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                        {r.duration}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {r.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {r.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
