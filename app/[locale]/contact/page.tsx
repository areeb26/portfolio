'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Mail, Send } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: '',
    honeypot: '', // spam protection
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return
    }

    // TODO: Send to API endpoint
    console.log('Form submitted:', formData)
    alert('Thank you! I\'ll be in touch within 24 hours.')
  }

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          subtitle="Book a discovery call or send me a message about your automation needs"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Book a Discovery Call
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  20-minute call to discuss your automation needs, goals, and how I can help
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video glass-light rounded-lg flex items-center justify-center">
                  {/* Placeholder for calendar embed */}
                  <div className="text-center space-y-4">
                    <Calendar className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <p className="font-semibold mb-2">Calendar Integration</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Connect your Cal.com or Calendly account here
                      </p>
                      <Button asChild>
                        <a
                          href="https://cal.com/areeb-khan"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Schedule on Cal.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="text-sm">
                    <strong>What to expect:</strong>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Understanding your current workflows</li>
                    <li>• Identifying automation opportunities</li>
                    <li>• Discussing technical constraints</li>
                    <li>• Estimating timeline and investment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Project Inquiry
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Share details about your project and I'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Budget Range
                      </label>
                      <Input
                        placeholder="e.g. $5k-$10k"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Timeline
                      </label>
                      <Input
                        placeholder="e.g. 4-6 weeks"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell me about your project, goals, and what you're looking to automate..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="glass p-8 rounded-lg">
            <h3 className="text-xl font-heading font-bold mb-4">
              Other Ways to Connect
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="glass" className="text-sm">
                Email: areeb@example.com
              </Badge>
              <Badge variant="glass" className="text-sm">
                WhatsApp: +92 300 1234567
              </Badge>
              <Badge variant="glass" className="text-sm">
                Location: Karachi, Pakistan
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
