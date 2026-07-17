"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { BrandMark } from "@/components/brand"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button nativeButton={false} render={<Link href="/login" />} variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button nativeButton={false} render={<Link href="/signup" />} className="hidden sm:inline-flex">
            Get Started
          </Button>

          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button nativeButton={false} render={<Link href="/login" />} variant="outline">
                    Sign in
                  </Button>
                  <Button nativeButton={false} render={<Link href="/signup" />}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
