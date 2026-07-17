import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Bell, CalendarDays, ChevronRight } from 'lucide-react'
import { auth } from '@/lib/auth'
import { DashboardSidebar } from '@/components/dashboard/sidebar'
import { OverviewCards } from '@/components/dashboard/overview-cards'
import { RoadmapGenerator } from '@/components/dashboard/roadmap-generator'
import { SignOutButton } from '@/components/dashboard/sign-out-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/login')
  const firstName = session.user.name.split(' ')[0]

  return <main className="flex min-h-svh bg-background">
    <DashboardSidebar />
    <div className="min-w-0 flex-1">
      <header className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8"><div><p className="text-xs text-muted-foreground">Friday, July 17</p><p className="text-sm font-medium text-foreground">DreamScape workspace</p></div><div className="flex items-center gap-1"><ThemeToggle /><Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="size-4" /></Button><div className="mx-2 hidden h-6 w-px bg-border sm:block" /><span className="hidden text-sm font-medium sm:block">{firstName}</span><SignOutButton /></div></header>
      <div className="mx-auto flex max-w-7xl flex-col gap-7 p-4 sm:p-6 lg:p-8">
        <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-mono text-xs uppercase tracking-widest text-primary">Command center</p><h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Good morning, {firstName}.</h1><p className="mt-2 text-sm text-muted-foreground">Your dream is closer than it was yesterday. Keep moving.</p></div><Button variant="outline"><CalendarDays className="size-4" />Plan this week</Button></section>
        <OverviewCards />
        <RoadmapGenerator />
        <div className="grid gap-4 lg:grid-cols-3"><section className="rounded-xl border border-border bg-card p-5 lg:col-span-2"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-foreground">Next milestone</p><h2 className="mt-1 text-xl font-semibold text-foreground">Complete your portfolio case study</h2></div><ChevronRight className="size-5 text-muted-foreground" /></div><div className="mt-6 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-primary" /></div><div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>Research and outline complete</span><span>67%</span></div></section><section className="rounded-xl border border-border bg-card p-5"><p className="text-sm font-medium text-foreground">AI recommendation</p><p className="mt-4 text-sm leading-6 text-muted-foreground">Block 45 minutes tomorrow morning to finish the impact section of your case study.</p><Button variant="link" className="mt-3 px-0">Add to my plan<ChevronRight className="size-4" /></Button></section></div>
      </div>
    </div>
  </main>
}
