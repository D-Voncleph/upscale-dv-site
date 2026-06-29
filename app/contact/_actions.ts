'use server'
import { z } from 'zod'

const schema = z.object({
    fullName: z.string().min(1),
    companyName: z.string().min(1),
    officialEmail: z.string().email(),
    linkedinProfile: z.string().url().optional().or(z.literal("")),
    coreChallenge: z.string().min(50),
    serviceNeeded: z.enum(['web-development', 'mobile-app', 'systems-architecture', 'not-sure']),
    budgetRange: z.enum(['<5k', '5k-15k', '15k-50k', '50k+', 'prefer-not-to-say']),
    timeline: z.enum(['asap', '1-3-months', '3-6-months', 'flexible']),
})

export async function submitContactForm(prevState: any, formData: FormData) {
    const parsed = schema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Validation failed.', success: false }

    const res = await fetch(process.env.N8N_CONTACT_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, submissionTimestamp: new Date().toISOString() }),
    })

    if (!res.ok) return { error: 'Failed to send. Try again.', success: false }
    return { success: true, error: null }
}
