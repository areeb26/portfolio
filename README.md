# Areeb Ahmed Khan - Portfolio

A premium, futuristic personal portfolio showcasing AI automation work, services, and technical expertise.

## Features

- **Next.js 14 App Router** with TypeScript
- **Internationalization** (English and Urdu with RTL support)
- **Dark/Light Theme** toggle
- **Command Palette** (Ctrl+K) for quick navigation
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Framer Motion** animations with respect for reduced motion preferences
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** components
- **SEO Optimized** with metadata, OG tags, and sitemap

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- next-intl (i18n)
- Radix UI
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── [locale]/       # Internationalized routes
│   │   ├── page.tsx    # Home page
│   │   ├── work/       # Case studies
│   │   ├── services/   # Service packages
│   │   ├── about/      # About page
│   │   ├── playbooks/  # Technical guides
│   │   ├── speaking/   # Speaking page
│   │   └── contact/    # Contact form
│   ├── layout.tsx      # Root layout
│   └── sitemap.ts      # Dynamic sitemap
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── sections/      # Page sections
│   └── ...            # Other components
├── data/              # JSON data files
│   ├── site.json
│   ├── navigation.json
│   ├── case-studies.json
│   ├── services.json
│   ├── testimonials.json
│   ├── playbooks.json
│   └── speaking.json
├── lib/               # Utility functions
│   ├── utils.ts
│   └── i18n/         # Internationalization config
├── public/            # Static assets
├── styles/            # Global styles
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Customization

### Update Content

Edit JSON files in the `data/` directory to update:
- Site information
- Case studies
- Services
- Testimonials
- Playbooks
- Speaking topics

### Update Translations

Edit message files:
- `lib/i18n/messages/en.json` for English
- `lib/i18n/messages/ur.json` for Urdu

### Update Styles

- Global styles: `styles/globals.css`
- Design tokens: `tailwind.config.ts`
- Color palette is defined in CSS variables

### Add New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. Add route to `data/navigation.json`
3. Add translations to message files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables (if any)
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Performance

- Lighthouse score: 95+ on mobile
- CLS (Cumulative Layout Shift): < 0.1
- TTI (Time to Interactive): < 2.5s on 4G

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Focus visible styles
- Screen reader friendly
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Areeb Ahmed Khan

## Contact

- Email: areeb@example.com
- Website: https://areebkhan.com
- Location: Karachi, Pakistan
