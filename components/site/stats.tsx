const stats = [
  { value: "120K+", label: "Learners guided" },
  { value: "45K+", label: "Roadmaps generated" },
  { value: "92%", label: "Report faster progress" },
  { value: "3.2x", label: "More interviews landed" },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
