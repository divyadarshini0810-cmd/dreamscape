import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is DreamScape AI really free?",
    a: "Yes. Our free plan includes roadmap generation, progress tracking, and community access. Premium unlocks advanced AI interviews, unlimited resumes, and portfolio hosting.",
  },
  {
    q: "How does the AI create my roadmap?",
    a: "You tell us your dream career and current level. Our AI analyzes the skills, certifications, projects, and resources needed for that role and builds a personalized, sequenced plan.",
  },
  {
    q: "Which careers are supported?",
    a: "Everything from AI Engineer, Data Scientist, and Software Developer to Doctor, IAS Officer, and Entrepreneur. If you can dream it, we can map it.",
  },
  {
    q: "Can I export my resume and portfolio?",
    a: "Absolutely. Resumes export to ATS-friendly PDFs, and portfolios generate as shareable websites with your projects, skills, and contact links.",
  },
  {
    q: "Is my data private and secure?",
    a: "Your data is encrypted and never sold. You control what is shared with the community, and you can delete your account and data at any time.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">Everything you need to know before you start.</p>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
