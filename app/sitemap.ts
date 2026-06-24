import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://upscaledv.com'

    const staticPages = [
        '',
        '/services',
        '/services/web-development',
        '/services/mobile-development',
        '/services/systems-architecture',
        '/case-studies',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const caseStudyPages = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...caseStudyPages]
}
