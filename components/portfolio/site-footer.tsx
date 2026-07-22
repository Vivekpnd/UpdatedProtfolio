import { Terminal, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            V
          </span>
          <div>
            <div className="font-mono text-sm font-semibold">Vivek Kumar</div>
            <div className="text-xs text-muted-foreground">
              Full Stack Developer · ERP & SaaS
            </div>
          </div>
        </div>

        <p className="order-last text-center text-xs text-muted-foreground sm:order-none">
          © {new Date().getFullYear()} — Designed & built with Next.js and Tailwind.
        </p>

        <div className="flex items-center gap-2">
          {[
            { icon: GithubIcon, href: '#', label: 'GitHub' },
            { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hello@yourdomain.dev', label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
