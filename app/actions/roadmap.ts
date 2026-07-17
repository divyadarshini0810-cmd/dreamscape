'use server'

import { generateText, Output } from 'ai'
import { z } from 'zod'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { roadmaps } from '@/lib/db/schema'

const roadmapSchema = z.object({
  summary: z.string(),
  phases: z.array(z.object({
    title: z.string(),
    duration: z.string(),
    objective: z.string(),
    tasks: z.array(z.string()).min(2).max(4),
  })).min(3).max(5),
  skills: z.array(z.string()).min(4).max(8),
  firstAction: z.string(),
})

export async function generateRoadmap(input: { career: string; experience: string; timeline: string }) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  const career = input.career.trim().slice(0, 120)
  const experience = input.experience.trim().slice(0, 80)
  const timeline = input.timeline.trim().slice(0, 80)
  if (!career || !experience || !timeline) throw new Error('All fields are required')

  const { output } = await generateText({
    model: 'google/gemini-3.5-flash',
    output: Output.object({ schema: roadmapSchema }),
    instructions: 'You are an expert career strategist. Create practical, specific, encouraging career plans. Avoid vague advice. Each task must be directly actionable.',
    prompt: `Create a career roadmap for someone targeting: ${career}. Current experience: ${experience}. Desired timeline: ${timeline}.`,
  })

  await db.insert(roadmaps).values({ userId: session.user.id, career, experience, timeline, content: output })
  return output
}
