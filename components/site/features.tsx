import {
  Map,
  FileText,
  Globe,
  Lightbulb,
  MessageSquare,
  Gauge,
  BookOpen,
  Flame,
  Trophy,
  Users,
  Rocket,
  Bell,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  { icon: Map, title: "AI Career Roadmaps", desc: "Enter your dream role and get a step-by-step plan with skills, courses, and milestones." },
  { icon: FileText, title: "AI Resume Builder", desc: "Generate ATS-friendly resumes from your profile with multiple templates and PDF export." },
  { icon: Globe, title: "Portfolio Generator", desc: "Spin up a personal portfolio site with projects, skills, certificates, and contact links." },
  { icon: Lightbulb, title: "Project Recommendations", desc: "Beginner to advanced project ideas with tech stacks, timelines, and folder structures." },
  { icon: MessageSquare, title: "AI Mock Interviews", desc: "Practice HR, technical, behavioral, and coding rounds with scored feedback." },
  { icon: Gauge, title: "Skill Gap Analyzer", desc: "Compare your skills to your target role and get a prioritized learning plan." },
  { icon: BookOpen, title: "Learning Hub", desc: "Organize notes, PDFs, and flashcards. Generate AI summaries and quizzes instantly." },
  { icon: Flame, title: "Smart Habit Tracker", desc: "Keep coding streaks and daily goals with weekly and monthly analytics." },
  { icon: Rocket, title: "Hackathons & Internships", desc: "Personalized recommendations for contests, internships, and scholarships." },
  { icon: Users, title: "Community", desc: "Share projects, find teammates, ask questions, and get peer feedback." },
  { icon: Trophy, title: "Gamification", desc: "Earn XP, badges, levels, and climb leaderboards to stay motivated." },
  { icon: Bell, title: "Smart Reminders", desc: "AI notifications for deadlines, interviews, and weekly learning goals." },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to reach your dream career
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          One intelligent platform that guides you from where you are to where you want to be.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card
            key={f.title}
            className="group border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
