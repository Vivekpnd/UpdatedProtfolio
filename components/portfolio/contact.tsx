'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Mail,
  Download,
  Send,
  Check,
  ArrowUpRight,
  Loader2,
} from 'lucide-react'

import { Reveal } from './reveal'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: 'Vivekpnd',
    href: 'https://github.com/Vivekpnd',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'vivek-pandey-5176542a5',
    href: 'https://www.linkedin.com/in/vivek-pandey-5176542a5',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'vivekpnd4321@gmail.com',
    href: 'mailto:vivekpnd4321@gmail.com',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget

    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      form.reset()

      setSent(true)

      setTimeout(() => {
        setSent(false)
      }, 3000)
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 100%, rgba(37,99,235,0.14), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-[1280px] px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                Contact
              </span>

              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s Build Something{' '}
                <span className="text-gradient">Great Together.</span>
              </h2>

              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Have a product, ERP or platform in mind? I'm available for
                freelance and full-time opportunities. Let's talk about how to
                build it.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60 ring-1 ring-border">
                        <social.icon className="h-5 w-5 text-foreground" />
                      </span>

                      <span>
                        <span className="block text-sm font-medium">
                          {social.label}
                        </span>

                        <span className="block font-mono text-xs text-muted-foreground">
                          {social.handle}
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}

                <a
                  href="/Document from vivek (2).pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl border border-border p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="input-base"
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="input-base"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="input-base"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="input-base resize-none"
                  />
                </Field>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}