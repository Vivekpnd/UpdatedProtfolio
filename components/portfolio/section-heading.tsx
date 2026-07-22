import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal>
      <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
