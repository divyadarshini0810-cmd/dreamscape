import Link from 'next/link'
import { BadgeCheck, BookOpen, BriefcaseBusiness, LayoutDashboard, Map, MessageSquareText, Sparkles, Target } from 'lucide-react'
import { BrandMark } from '@/components/brand'

const links = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'AI Roadmap', icon: Map, href: '#roadmap' },
  { label: 'Skill Studio', icon: BookOpen },
  { label: 'Job Match', icon: BriefcaseBusiness },
  { label: 'Mock Interview', icon: MessageSquareText },
  { label: 'Achievements', icon: BadgeCheck },
]

export function DashboardSidebar() {
  return <aside className="hidden min-h-svh w-64 shrink-0 border-r border-border bg-card/50 p-5 lg:flex lg:flex-col">
    <BrandMark />
    <nav aria-label="Dashboard" className="mt-10 flex flex-1 flex-col gap-1">
      {links.map(({ label, icon: Icon, active, href }) => <Link key={label} href={href ?? '#'} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}><Icon className="size-4" />{label}</Link>)}
    </nav>
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4"><Sparkles className="size-5 text-primary" /><p className="mt-3 text-sm font-medium text-foreground">Keep your momentum</p><p className="mt-1 text-xs leading-5 text-muted-foreground">One focused action today moves the dream closer.</p></div>
  </aside>
}
