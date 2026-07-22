'use client'

import { motion } from 'motion/react'
import {
  Cloud,
  Database,
  Gauge,
  GitBranch,
  Globe,
  LayoutGrid,
  Server,
  Smartphone,
  Workflow,
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
    title: 'Frontend Development',
    icon: LayoutGrid,
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
      'Redux',
      'Context API',
      'Shadcn UI',
      'Material UI',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'JWT',
      'Role-Based Access Control',
      'CRUD APIs',
      'API Integration',
      'Server-side Rendering',
      'Middleware',
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    items: [
      'React Native',
      'Android',
      'Cross Platform Apps',
      'Mobile UI',
      'API Integration',
      'Push Notifications',
      'GPS Services',
    ],
  },
  {
    title: 'Databases & ORM',
    icon: Database,
    items: [
      'PostgreSQL',
      'MySQL',
      'Supabase',
      'Prisma ORM',
      'SQL',
      'Database Design',
      'Data Modeling',
      'CRUD Operations',
    ],
  },
  {
    title: 'CMS & E-Commerce',
    icon: Globe,
    items: [
      'WordPress',
      'WooCommerce',
      'Magento',
      'Wix Studio',
      'Wix Editor',
      'Elementor',
      'Custom Themes',
      'Plugin Configuration',
      'SEO Optimization',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      'AWS',
      'Vercel',
      'Hostinger',
      'Git',
      'GitHub',
      'CI/CD',
      'Domain & DNS',
      'SSL Configuration',
      'Deployment',
      'Linux Basics',
      'Environment Variables',
    ],
  },
  {
    title: 'Performance & SEO',
    icon: Gauge,
    items: [
      'Technical SEO',
      'Core Web Vitals',
      'Google Lighthouse',
      'PageSpeed Optimization',
      'Lazy Loading',
      'Image Optimization',
      'Caching',
      'Accessibility',
      'Responsive UI',
      'Semantic HTML',
      'Schema Markup',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Workflow,
    items: [
      'VS Code',
      'Postman',
      'Figma',
      'npm',
      'pnpm',
      'ESLint',
      'Prettier',
      'Chrome DevTools',
      'Agile',
      'Debugging',
      'Problem Solving',
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    items: [
      'Git',
      'GitHub',
      'Branching',
      'Pull Requests',
      'Merge Conflict Resolution',
      'Code Review',
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Building Modern Web, Mobile & Enterprise Applications"
          description="From scalable backend systems and high-performance frontends to mobile applications, CMS platforms, cloud deployment, DevOps, databases and technical SEO."
        />

        <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <motion.article
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="flex min-h-[64px] items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold leading-tight">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-6 flex-1">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-background/70 px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}