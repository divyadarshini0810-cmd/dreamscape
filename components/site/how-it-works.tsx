const steps = [
  {
    step: "01",
    title: "Tell us your dream",
    desc: "Pick your target career — AI Engineer, Data Scientist, IAS Officer, Entrepreneur, and more.",
  },
  {
    step: "02",
    title: "Get your AI roadmap",
    desc: "Receive a personalized plan with skills, certifications, projects, and resources.",
  },
  {
    step: "03",
    title: "Track & level up",
    desc: "Follow milestones, practice interviews, and watch your progress grow every week.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From dream to done in three steps
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            No guesswork. Just a clear, guided path built around your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-border/60 bg-background/50 p-8">
              <span className="font-mono text-4xl font-bold text-primary/30">{s.step}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
