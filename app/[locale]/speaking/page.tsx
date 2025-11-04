'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Users, Clock, Mic } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import speakingData from '@/data/speaking.json'

export default function SpeakingPage() {
  const locale = useLocale()

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Speaking"
          title="Let's Talk About Automation"
          subtitle="Available for keynotes, workshops, and fireside chats on AI automation, WhatsApp systems, and vector search"
          align="center"
          className="mb-16"
        />

        {/* Topics */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Talk Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {speakingData.topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full glass hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">
                      {locale === 'ur' ? topic.title_ur : topic.title_en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {locale === 'ur' ? topic.description_ur : topic.description_en}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {topic.duration}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <strong>Audience:</strong> {topic.audience}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {speakingData.formats.map((format, index) => (
              <motion.div
                key={format.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <h3 className="font-heading font-bold text-lg mb-2">{format.type}</h3>
                <div className="text-sm text-primary mb-2">{format.duration}</div>
                <p className="text-sm text-muted-foreground">{format.description_en}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Past Events</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {speakingData.pastEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.topic}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-primary">{event.date}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                    <Users className="h-3 w-3" />
                    {event.audience} attendees
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Request a Talk</h2>
          <Card className="glass">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Name</label>
                  <Input placeholder="Tech Conference 2024" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Expected Audience Size</label>
                  <Input placeholder="e.g. 100-200" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Topic</label>
                  <Input placeholder="AI Automation Era" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Details</label>
                  <Textarea
                    placeholder="Tell me about the event, audience, and what you're looking for..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Mic className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
