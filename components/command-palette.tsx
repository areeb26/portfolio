'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Search, FileText, Briefcase, Code } from 'lucide-react'
import navigation from '@/data/navigation.json'
import caseStudies from '@/data/case-studies.json'
import playbooks from '@/data/playbooks.json'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const locale = useLocale()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false)
      router.push(href)
    },
    [router]
  )

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages, case studies, and playbooks..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {navigation.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => handleSelect(item.href)}
              className="cursor-pointer"
            >
              <Search className="mr-2 h-4 w-4" />
              <span>{locale === 'ur' ? item.label_ur : item.label_en}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Case Studies">
          {caseStudies.slice(0, 5).map((study) => (
            <CommandItem
              key={study.slug}
              onSelect={() => handleSelect(`/work/${study.slug}`)}
              className="cursor-pointer"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{locale === 'ur' ? study.title_ur : study.title_en}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Playbooks">
          {playbooks.slice(0, 5).map((playbook) => (
            <CommandItem
              key={playbook.slug}
              onSelect={() => handleSelect(`/playbooks/${playbook.slug}`)}
              className="cursor-pointer"
            >
              <Code className="mr-2 h-4 w-4" />
              <span>{locale === 'ur' ? playbook.title_ur : playbook.title_en}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
