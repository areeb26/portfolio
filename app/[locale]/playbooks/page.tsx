'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Download, Clock, BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import playbooks from '@/data/playbooks.json'

export default function PlaybooksPage() {
  const locale = useLocale()
  const [filter, setFilter] = useState('all')

  const filteredPlaybooks =
    filter === 'all'
      ? playbooks
      : playbooks.filter((playbook) => playbook.category === filter)

  const categories = ['all', 'n8n', 'WhatsApp', 'AI', 'Database', 'Social Media']

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Resources"
          title="Playbooks"
          subtitle="Step-by-step guides for building automation systems. Free to download and use."
          align="center"
          className="mb-16"
        />

        <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
          <TabsList className="mx-auto w-fit">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={filter} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaybooks.map((playbook, index) => (
                <motion.div
                  key={playbook.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full glass hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge
                          variant={
                            playbook.difficulty === 'beginner'
                              ? 'glass'
                              : playbook.difficulty === 'intermediate'
                                ? 'purple'
                                : 'cyan'
                          }
                        >
                          {playbook.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {playbook.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-heading">
                        {locale === 'ur' ? playbook.title_ur : playbook.title_en}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {locale === 'ur' ? playbook.summary_ur : playbook.summary_en}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {playbook.tags.map((tag) => (
                          <Badge key={tag} variant="glass" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="glass"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={playbook.downloadUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center glass p-8 rounded-lg max-w-2xl mx-auto">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold mb-2">Need Custom Help?</h3>
          <p className="text-muted-foreground mb-6">
            These playbooks cover common patterns, but every project is unique. Book a call to discuss your specific needs.
          </p>
          <Button size="lg">Schedule Consultation</Button>
        </div>
      </div>
    </div>
  )
}
