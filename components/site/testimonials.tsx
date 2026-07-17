import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "DreamScape mapped out my entire path to becoming a Data Scientist. I finally knew what to learn and when — landed my first internship in 4 months.",
    name: "Aarav Mehta",
    role: "Data Science Intern",
    initials: "AM",
  },
  {
    quote:
      "The mock interviews were brutally honest in the best way. My confidence went up and so did my offer count. This feels like a personal coach.",
    name: "Priya Nair",
    role: "Software Engineer",
    initials: "PN",
  },
  {
    quote:
      "As a career switcher, the skill gap analyzer showed exactly what I was missing. The roadmap kept me accountable every single week.",
    name: "Daniel Osei",
    role: "Cybersecurity Analyst",
    initials: "DO",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by ambitious learners
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Thousands are building their futures with DreamScape AI.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border/60 bg-card/50 p-6">
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/90">{`"${t.quote}"`}</p>
            <div className="mt-6 flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarFallback className="bg-primary/10 text-primary">{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
