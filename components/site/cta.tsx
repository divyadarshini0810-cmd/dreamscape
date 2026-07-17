import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 70%, transparent), transparent)",
          }}
        />
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Your dream career is closer than you think
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Join over 120,000 learners building their futures with an AI mentor that never sleeps.
        </p>
        <Button nativeButton={false} render={<Link href="/signup" />} size="lg" className="mt-8">
          Start for free
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  )
}
