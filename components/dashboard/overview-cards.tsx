import { ArrowUpRight, Award, CheckCircle2, Flame, Target } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const stats = [
  { label: 'Roadmap progress', value: '38%', detail: '6 of 16 milestones', icon: Target },
  { label: 'Skills completed', value: '12', detail: '+3 this month', icon: CheckCircle2 },
  { label: 'Current streak', value: '7 days', detail: 'Personal best', icon: Flame },
  { label: 'DreamScore', value: '742', detail: 'Top 18%', icon: Award },
]

export function OverviewCards() {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, detail, icon: Icon }) => <article key={label} className="rounded-xl border border-border bg-card p-5"><div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-4" /></span><ArrowUpRight className="size-4 text-muted-foreground" /></div><p className="mt-5 text-sm text-muted-foreground">{label}</p><p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{value}</p><p className="mt-2 text-xs text-muted-foreground">{detail}</p>{label === 'Roadmap progress' && <Progress value={38} className="mt-3" />}</article>)}</div>
}
