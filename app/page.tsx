import { MouseGlow } from '@/components/portfolio/mouse-glow'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { TechStack } from '@/components/portfolio/tech-stack'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { WhyMe } from '@/components/portfolio/why-me'
import { Metrics } from '@/components/portfolio/metrics'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <MouseGlow />
      <SiteNav />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <WhyMe />
        <Metrics />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
