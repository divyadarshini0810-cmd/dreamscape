'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { authClient } from '@/lib/auth-client'
import { BrandMark } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const isSignUp = mode === 'sign-up'
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setError('')
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email'))
    const password = String(data.get('password'))
    const result = isSignUp
      ? await authClient.signUp.email({ email, password, name: String(data.get('name')) })
      : await authClient.signIn.email({ email, password })
    if (result.error) {
      setError(result.error.message ?? 'Something went wrong. Please try again.')
      setPending(false)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center"><BrandMark /></div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/5 sm:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Your next chapter</p>
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-foreground">{isSignUp ? 'Create your account' : 'Welcome back'}</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{isSignUp ? 'Start turning your ambition into a clear plan.' : 'Continue building the career you imagined.'}</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            {isSignUp && <div className="flex flex-col gap-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required autoComplete="name" placeholder="Alex Morgan" /></div>}
            <div className="flex flex-col gap-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></div>
            <div className="flex flex-col gap-2"><Label htmlFor="password">Password</Label><Input id="password" name="password" type="password" required minLength={8} autoComplete={isSignUp ? 'new-password' : 'current-password'} placeholder="At least 8 characters" /></div>
            {error && <p role="alert" className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
            <Button type="submit" size="lg" disabled={pending} className="mt-1 w-full">
              {pending ? <Loader2 className="size-4 animate-spin" /> : <>{isSignUp ? 'Create account' : 'Sign in'}<ArrowRight className="size-4" /></>}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isSignUp ? 'Already have an account?' : 'New to DreamScape?'}{' '}
            <Link href={isSignUp ? '/login' : '/signup'} className="font-medium text-primary hover:underline">{isSignUp ? 'Sign in' : 'Create an account'}</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
