'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, TrendingUp, Layers } from 'lucide-react'

import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

type Project = {
  title: string
  category: string
  description: string
  image: string
  tech: string[]
  architecture: string
  impact: string
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: 'ERP Management System',
    category: 'Enterprise Platform',
    description:
      'A modular ERP unifying finance, inventory, sales and HR into a single real-time control center with role-based access.',
    image: '/projects/erp.png',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'RBAC'],
    architecture: 'Multi-tenant, event-driven services',
    impact: '40% faster operational reporting',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'Inventory Management System',
    category: 'Operations',
    description:
      'Real-time inventory tracking with automated reorder points, warehouse management and business analytics.',
    image: '/projects/inventory.png',
    tech: ['React', 'Express.js', 'PostgreSQL'],
    architecture: 'REST APIs + Caching Layer',
    impact: 'Zero stock-out incidents',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'HRM System',
    category: 'People Operations',
    description:
      'Attendance, payroll, leave management and employee lifecycle platform with secure authentication.',
    image: '/projects/hrm.png',
    tech: ['Next.js', 'Supabase', 'TypeScript'],
    architecture: 'Row-Level Security',
    impact: 'Automated monthly payroll',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'Technician Tracking App',
    category: 'React Native',
    description:
      'Live GPS tracking, attendance, work assignment and technician management application.',
    image: '/projects/technician-app.png',
    tech: ['React Native', 'Node.js', 'Google Maps'],
    architecture: 'Offline-first Synchronization',
    impact: '2× Dispatch Efficiency',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'Magento eCommerce Platform',
    category: 'eCommerce',
    description:
      'Enterprise Magento store with custom checkout, optimized catalog management and scalable architecture.',
    image: '/projects/ecommerce.png',
    tech: ['Magento', 'PHP', 'REST API'],
    architecture: 'Redis Cache + CDN',
    impact: '28% Higher Conversion',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    title: 'Next.js Business Websites',
    category: 'Marketing Websites',
    description:
      'SEO optimized, blazing fast business websites focused on Core Web Vitals and conversion.',
    image: '/projects/business-web.png',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    architecture: 'SSG + Edge Rendering',
    impact: '100 Lighthouse Performance',
    liveUrl: '#',
    githubUrl: '#',
  },
]
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 24,
      }}
      className={`group flex h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${
        project.featured
          ? 'flex-col xl:col-span-2 xl:flex-row'
          : 'flex-col'
      }`}
    >
      {/* Image */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          project.featured
            ? 'aspect-[16/10] w-full xl:w-[48%] xl:aspect-auto'
            : 'aspect-[16/10] w-full'
        }`}
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          priority={project.featured}
          sizes={
            project.featured
              ? '(max-width:1280px) 100vw,48vw'
              : '(max-width:768px) 100vw,(max-width:1280px) 50vw,33vw'
          }
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-mono text-muted-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-1 flex-col p-5 sm:p-6 ${
          project.featured ? 'xl:justify-center xl:p-8' : ''
        }`}
      >
        <h3 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 break-words text-muted-foreground sm:text-[15px]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background/60 px-3 py-1 text-[11px] font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Architecture + Impact */}
        <div className="mt-6 grid gap-3 lg:grid-cols-1">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
            <Layers className="mt-1 h-4 w-4 shrink-0 text-primary" />

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Architecture
              </p>

              <p className="mt-1 text-xs font-medium leading-5 break-words">
                {project.architecture}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
            <TrendingUp className="mt-1 h-4 w-4 shrink-0 text-success" />

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Impact
              </p>

              <p className="mt-1 text-xs font-medium leading-5 break-words">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-5 text-sm font-medium transition-colors hover:bg-secondary/60"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at top, rgba(37,99,235,.08), transparent 60%)',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Products Engineered for Scale & Impact"
            description="A collection of enterprise platforms, SaaS products, ERP systems, mobile applications and high-performance websites built with scalability, clean architecture and exceptional user experience."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 xl:grid-cols-2">

          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}
