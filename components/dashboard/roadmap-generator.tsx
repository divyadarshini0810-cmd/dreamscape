'use client'

import { useState, useTransition } from 'react'
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react'
import { generateRoadmap } from '@/app/actions/roadmap'
import type { RoadmapContent } from '@/lib/db/schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function RoadmapGenerator() {
  const [result, setResult] = useState<RoadmapContent | null>(null)
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setError('')
    startTransition(async () => {
      try {
        const roadmap = await generateRoadmap({ career: String(form.get('career')), experience: String(form.get('experience')), timeline: String(form.get('timeline')) })
        setResult(roadmap)
      } catch {
        setError('We could not generate your roadmap. Please try again.')
      }
    })
  }

  return <section id="roadmap" className="rounded-2xl border border-primary/20 bg-card p-5 sm:p-7">
    <div className="flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-5" /></span><div><p className="font-mono text-xs uppercase tracking-widest text-primary">DreamScape AI</p><h2 className="mt-1 text-xl font-semibold text-foreground">Build your career roadmap</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">Tell us where you want to go. AI will turn it into a focused, step-by-step plan.</p></div></div>
    <form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-3">
      <div className="flex flex-col gap-2"><Label htmlFor="career">Dream career</Label><Input id="career" name="career" required placeholder="AI Product Designer" /></div>
      <div className="flex flex-col gap-2"><Label htmlFor="experience">Current level</Label><Input id="experience" name="experience" required placeholder="2 years in UX" /></div>
      <div className="flex flex-col gap-2"><Label htmlFor="timeline">Target timeline</Label><Input id="timeline" name="timeline" required placeholder="12 months" /></div>
      <div className="md:col-span-3"><Button type="submit" size="lg" disabled={pending}>{pending ? <><Loader2 className="size-4 animate-spin" />Designing your path...</> : <>Generate my roadmap<ArrowRight className="size-4" /></>}</Button></div>
    </form>
    {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
    {result && <div className="mt-8 border-t border-border pt-7"><p className="max-w-3xl text-sm leading-6 text-muted-foreground">{result.summary}</p><div className="mt-6 grid gap-4 lg:grid-cols-2">{result.phases.map((phase, index) => <article key={phase.title} className="rounded-xl border border-border bg-background p-5"><div className="flex items-center justify-between gap-3"><span className="font-mono text-xs text-primary">PHASE {index + 1}</span><span className="text-xs text-muted-foreground">{phase.duration}</span></div><h3 className="mt-3 font-semibold text-foreground">{phase.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{phase.objective}</p><ul className="mt-4 flex flex-col gap-2">{phase.tasks.map(task => <li key={task} className="flex gap-2 text-sm text-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{task}</li>)}</ul></article>)}</div><div className="mt-4 rounded-xl bg-primary/10 p-5"><p className="text-xs font-medium uppercase tracking-wider text-primary">Start here</p><p className="mt-2 font-medium text-foreground">{result.firstAction}</p></div></div>}
  </section>
}
