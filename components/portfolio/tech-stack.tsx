'use client'

import { motion } from 'motion/react'
import {
  Cloud,
  Database,
  Gauge,
  LayoutGrid,
  Server,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Group = {
  title: string
  icon: LucideIcon
  items: string[]
}

const groups: Group[] = [
  {
    title: 'Frontend',
    icon: LayoutGrid,
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'CMS',
    icon: Database,
    items: ['WordPress', 'WooCommerce', 'Magento', 'Wix Studio'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    items: ['AWS', 'Vercel', 'Hostinger', 'GitHub'],
  },
  {
    title: 'Performance',
    icon: Gauge,
    items: ['Core Web Vitals', 'SEO', 'Responsive Design', 'RBAC', 'Authentication'],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionHeading
          eyebrow="Technology Stack"
          title="A modern toolkit for production-grade software"
          description="The languages, frameworks and platforms I use to ship reliable, scalable systems from database to interface."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 ${
                  gi === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <group.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
