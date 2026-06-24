export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    description: string;
    challenge: string;
    solution: string;
    techStack: string[];
    status: 'Live' | 'In Development';
    metrics?: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'eec-onboarding-app',
        title: 'EEC Onboarding App',
        client: 'Whop Creators',
        description: 'B2B SaaS onboarding platform reducing refund rates for education creators.',
        challenge: 'Education creators on Whop were losing up to 40% of new members within the first week due to poor onboarding. No structured path existed to guide users from purchase to value.',
        solution: 'Built a multi-step onboarding flow with progress tracking, automated email sequences, and creator dashboards showing real-time engagement metrics. Integrated directly with the Whop API.',
        techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Whop API'],
        status: 'Live',
        metrics: [
            { label: 'Refund Rate Reduction', value: '35%' },
            { label: 'Onboarding Completion', value: '78%' },
            { label: 'Time to Value', value: '<24hrs' },
        ],
    },
    {
        slug: 'upscale-dv-site',
        title: 'Upscale DV Website',
        client: 'Internal',
        description: 'High-performance agency portfolio built with Next.js 15 and deployed on Vercel.',
        challenge: 'Needed a portfolio site that demonstrates technical capability while also being a lead generation tool with fast load times and strong SEO.',
        solution: 'Built with Next.js 15 App Router, React 19, server components for SEO, Framer Motion animations, and a glassmorphic design system. Integrated n8n webhook for contact form processing.',
        techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        status: 'Live',
    },
    {
        slug: 'accountability-partner',
        title: 'Accountability Partner',
        client: 'Internal Product',
        description: 'Habit tracking and accountability app for professionals who want structured daily routines.',
        challenge: 'Most productivity apps are overwhelming. Users need a simple, opinionated system that tells them what to do and holds them accountable.',
        solution: 'Designing a mobile-first React Native app with daily check-ins, streak tracking, push notifications, and a peer accountability matching system.',
        techStack: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
        status: 'In Development',
    },
];
