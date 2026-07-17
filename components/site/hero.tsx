import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 60%, transparent), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-accent" />
            Your personal AI career mentor
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Turn Your Dreams into Reality with <span className="text-primary">AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 sm:text-lg">
            Visualize your future before you live it. DreamScape AI builds a personalized roadmap to your dream
            career — with the skills, projects, resources, and interview prep you need to get there.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#how">See how it works</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">No credit card required · Free forever plan</p>
        </div>

        <div className="relative">
          <div className="glass relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/hero-orb.png"
              alt="Abstract AI visualization representing a personalized career journey"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          {/* floating chips */}
          <div className="glass absolute -left-2 top-6 hidden rounded-xl px-3 py-2 text-xs font-medium sm:block">
            <span className="text-primary">Roadmap</span> generated in 12s
          </div>
          <div className="glass absolute -right-2 bottom-8 hidden rounded-xl px-3 py-2 text-xs font-medium sm:block">
            <span className="text-accent">+320 XP</span> this week
          </div>
        </div>
      </div>
    </section>
  )
}
