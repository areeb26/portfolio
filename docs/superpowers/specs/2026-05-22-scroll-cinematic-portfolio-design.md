# Scroll Cinematic Portfolio — Design Spec
**Date:** 2026-05-22
**Author:** Areeb Ahmed Khan
**Goal:** Impress startup founders + freelance clients → convert to "Book a Call" on Calendly

---

## Overview

Hybrid upgrade of existing portfolio. Keep: OKLch color palette, Instrument fonts, glassmorphism system. Add: 3D scroll-driven perspective transforms, 21st.dev components (magnetic button, cursor glow, animated counters), restructured content with real metrics and outcome-first messaging.

**Primary CTA:** Book a Call → Calendly
**Target audience:** Startup founders + freelance clients (non-technical)
**Conversion strategy:** Hook with visuals in 3 seconds → close with proof (metrics + results)

---

## Section 1 — Hero

### Layout
Full-screen. Three depth layers scroll at different speeds (parallax Z-axis):
- **Z1 (back):** Gradient orbs — drift slow on scroll
- **Z2 (mid):** Headline + subtext
- **Z3 (front):** CTA button + floating stat chips

### Content
**Headline:** "Your idea → working AI product in 2 weeks"
**Subtext:** "Full-stack AI engineer. Automation systems. WhatsApp bots. Real results."

**Floating stat chips** (animate in on load, staggered):
- `3,000+ certificates automated`
- `15k+ daily users served`
- `400+ hours eliminated`

### Interactions
- Magnetic "Book a Call" button (21st.dev component) → follows cursor → opens Calendly
- Stat chips drift in with spring physics, slight float animation on idle
- Scroll down arrow pulses subtly

---

## Section 2 — Stats Bar

### Layout
Full-width dark strip. Horizontal row of 5 stats. Numbers count up on scroll-enter (21st.dev animated counter component).

### Stats
| Label | Value |
|-------|-------|
| Certificates Automated | 3,000+ |
| Daily Users Served | 15,000+ |
| Hours Eliminated | 400+ |
| Projects Shipped | 10+ |
| Pilot Clients | 12 |

### Style
- Background: deep accent / near-black
- Numbers: Instrument Serif, large scale
- Labels: Instrument Sans, muted
- Count-up animation triggers on `useInView`

---

## Section 3 — Projects (3D Cinematic)

### Layout
Grid of 6 project cards. Cards start rotated 15° on X-axis + pushed back in Z. Scroll into view → rotate to flat + move forward. Staggered per card (0.1s delay each).

### Featured Projects
| Project | Outcome | Tech Tags |
|---------|---------|-----------|
| Certificate Automation | 3,000+ certs, 400hrs saved | FastAPI, Postgres, n8n, Cloudinary |
| WhatsApp Service Booking | End-to-end booking via WhatsApp | Meta API, n8n, Webhooks |
| LinkedIn Outreach Tool | 5–10 hrs/week saved, 12 pilots | n8n, Webhooks |
| Conversational AI Voice Agent | Open-source ElevenLabs alternative | FastAPI, Claude AI |
| WhatsApp AI Bot | 15k+ daily users | n8n, Google Sheets, Claude AI |
| Clipper Tool | Video → reels, auto-captions | Python, AI |

### Card Structure
- Project name (headline)
- 1-line outcome
- Metric badge (accent color pill)
- Tech tags (muted chips)
- "View Project →" link

### Interactions
- 3D rotate-in on scroll (Framer Motion `useScroll` + `useTransform`)
- Hover: card lifts + subtle shadow bloom
- Glassmorphism card background (existing `.glass-card` class)

---

## Section 4 — Services (Magnetic Hover Cards)

### Layout
2×2 grid. Each card: icon, service name, tagline, micro-CTA.

### Services
| Service | Tagline |
|---------|---------|
| AI Automation Systems | Replace manual work with intelligent workflows |
| WhatsApp Business Bots | Booking, support, sales — all on WhatsApp |
| Full-Stack AI Apps | From idea to deployed product in weeks |
| Content Automation | AI-powered content pipelines at scale |

### Interactions
- Magnetic hover (21st.dev component) — card follows cursor slightly
- On hover: card lifts + accent border glow + icon animates
- Bottom of each card: subtle "→ Book a Call" micro-CTA

---

## Section 5 — About (Credibility, Minimal)

### Layout
2 columns. Left: bio. Right: expertise tags grid with stagger animation on scroll.

### Bio (left)
> "I'm Areeb — AI engineer and automation builder. I work with startups and businesses to replace slow manual processes with fast, intelligent systems. I ship fast, I communicate clearly, and I don't stop until it works."

### Expertise Tags (right)
Stagger animate on scroll enter:
`n8n` `FastAPI` `WhatsApp Business API` `Claude AI` `Supabase` `Next.js` `Python` `Framer Motion` `Firebase` `Webhooks`

### Trust Signals Strip
Inline row below bio + tags:
- `✓ 3,000+ automations shipped`
- `✓ 15k+ users served daily`
- `✓ Available for new projects`

---

## Section 6 — Book a Call (Conversion)

### Layout
Full-width dark section. Cinematic scroll-in: text animates up from bottom, background shifts to deep accent.

### Content
**Headline:** "Ready to automate the slow parts?"
**Subtext:** "Book a free 30-min call. Tell me your problem. I'll tell you if I can solve it."

**CTA Button:** Large magnetic "Book a Call" → Calendly link
- 21st.dev cursor glow effect
- Subtle idle pulse animation

**Reassurance lines (below button):**
- `No commitment. No pitch deck. Just a conversation.`
- `Usually respond within 24 hours.`
- `itsareebahmedkhan@gmail.com`

---

## Section 7 — Footer (Minimal)

### Layout
Single row:
- Left: Name / logo
- Center: `© 2026 Areeb Ahmed Khan`
- Right: Social icons (LinkedIn, GitHub, Instagram — AreebNarrates)

**Above footer:** Floating "Back to top" button → smooth scroll to Hero.

---

## Technical Implementation Plan

### New Dependencies
- `@21st-dev/magic` MCP — already configured (API key set)
- Framer Motion (existing) — extend with `useScroll`, `useTransform`, `useSpring`
- 21st.dev components: magnetic button, cursor glow, animated counters

### Key Framer Motion Patterns
- **Hero parallax:** `useScroll` + `useTransform` for Z-layer speeds
- **3D card reveal:** `rotateX` from 15° → 0°, `translateZ` from -50px → 0
- **Stats count-up:** `useInView` trigger + spring animation
- **Section entrances:** `whileInView` with `viewport: { once: true }`

### Preserve
- OKLch color palette (`globals.css` tokens)
- Instrument Serif + Sans fonts
- `.glass-card` glassmorphism class
- Existing Navbar + mobile menu
- Contact form API route (`/api/contact`)
- TechMarquee component

### Replace / Upgrade
- Hero section — full rebuild with depth layers
- Projects section — 3D card system
- Services section — magnetic cards
- About section — restructured layout
- New: Stats Bar section
- Upgrade: Contact → Book a Call conversion section

---

## Success Criteria
- Visitor scrolls → jaw-drop in first 3 seconds (Hero wow)
- Stat numbers visible before fold-2 (Stats Bar)
- "Book a Call" CTA visible in Hero + Services + Book a Call section (3 touchpoints)
- Mobile responsive — all 3D effects gracefully degrade on mobile (reduced motion respected)
- Page load < 3s (no new heavy libs, 21st.dev components lazy-loaded)
