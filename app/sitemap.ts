import { MetadataRoute } from 'next'
import caseStudies from '@/data/case-studies.json'
import playbooks from '@/data/playbooks.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://areebkhan.com'

  const staticPages = [
    '',
    '/work',
    '/services',
    '/about',
    '/playbooks',
    '/speaking',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const playbookPages = playbooks.map((playbook) => ({
    url: `${baseUrl}/playbooks/${playbook.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...caseStudyPages, ...playbookPages]
}
