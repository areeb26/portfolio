'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'

const skills = [
  { name: 'n8n Automation', level: 95 },
  { name: 'WhatsApp Business API', level: 90 },
  { name: 'PostgreSQL & pgvector', level: 85 },
  { name: 'Vector Search & RAG', level: 85 },
  { name: 'Firebase & Firestore', level: 90 },
  { name: 'API Integration', level: 95 },
  { name: 'Python & TypeScript', level: 80 },
  { name: 'System Architecture', level: 90 },
]

const timeline = [
  { year: '2024', title: '100+ Workflows Shipped', desc: 'Crossed milestone of 100 automation workflows deployed' },
  { year: '2023', title: 'Enterprise AI Systems', desc: 'Built first RAG-powered chatbot with pgvector' },
  { year: '2022', title: 'Automation Focus', desc: 'Specialized in n8n and no-code/low-code automation' },
  { year: '2021', title: 'Product Builder', desc: 'Started building automation products for education' },
]

const tools = [
  'n8n', 'WhatsApp Business', 'PostgreSQL', 'Firebase', 'Qdrant', 'Supabase',
  'OpenAI', 'Anthropic', 'Canva API', 'Google Sheets', 'Make.com', 'Zapier',
]

const values = [
  { title: 'Outcomes Over Activity', desc: 'Focus on results, not hours or tasks' },
  { title: 'Simple Beats Complex', desc: 'Choose the simplest solution that works' },
  { title: 'Built to Last', desc: 'Code for maintainability and scalability' },
  { title: 'Document Everything', desc: 'Knowledge should transfer seamlessly' },
]

export default function AboutPage() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Bio */}
          <div className="space-y-6">
            <SectionHeading
              title="About Me"
              subtitle="Building intelligent automation systems that solve real problems"
            />
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Areeb Ahmed Khan, an AI automation architect based in Karachi, Pakistan.
                I specialize in building intelligent automation systems using n8n, WhatsApp Business API,
                vector databases, and AI models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work focuses on practical automation that saves time, scales operations, and solves
                real business problems. I've helped education platforms, service marketplaces, and
                growing startups automate their operations and reduce manual work by 60-90%.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not building automation systems, I'm writing technical playbooks,
                speaking at tech events, or experimenting with new AI models and tools.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Skills & Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-20 text-primary font-bold">{item.year}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Tools I Use</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="glass" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-6 rounded-lg"
                >
                  <h3 className="font-heading font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <h3 className="text-2xl font-heading font-bold">Let's Work Together</h3>
            <p className="text-muted-foreground">
              Ready to automate your operations? Book a discovery call.
            </p>
            <Link href="/contact">
              <Button size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
