'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X, Terminal } from 'lucide-react'

const links = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'glass border border-border shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            V
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            Vivek Kumar
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_8px_24px_-8px_rgba(37,99,235,0.6)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-20 left-4 right-4 rounded-2xl border border-border p-3 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-3 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Hire me
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
