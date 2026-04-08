export const projects = [
  {
    id: 1,
    title: "AI SquadX VIP Clipper",
    description: "AI-powered viral clip generator that automatically transcribes, identifies engaging moments, and creates shareable clips from long-form content.",
    tech: ["Python", "Whisper AI", "FFmpeg", "n8n"],
    featured: true,
    github: "https://github.com/areebkhan",
    live: "#",
  },
  {
    id: 2,
    title: "Seerat Ki Dunya Reel Script Generator",
    description: "Urdu AI agent that generates engaging reel scripts with cultural context and emotional hooks for social media content creators.",
    tech: ["Claude AI", "n8n", "Supabase"],
    featured: false,
    github: "https://github.com/areebkhan",
  },
  {
    id: 3,
    title: "LinkedIn/Facebook AI Auto-Poster",
    description: "Automated social media posting pipeline that transforms RSS feeds into platform-optimized posts using AI.",
    tech: ["n8n", "Gemini", "RSS", "Webhooks"],
    featured: false,
    github: "https://github.com/areebkhan",
  },
  {
    id: 4,
    title: "Instagram Video Downloader",
    description: "Fast, clean Instagram video downloader built with Next.js 14. No ads, no tracking, just pure functionality.",
    tech: ["Next.js", "Vercel", "API Routes"],
    featured: false,
    github: "https://github.com/areebkhan",
    live: "#",
  },
  {
    id: 5,
    title: "Adobe Stock Video Pipeline",
    description: "Automated video generation pipeline for stock footage using AI to create, edit, and prepare videos for submission.",
    tech: ["Remotion", "Claude AI", "FFmpeg"],
    featured: false,
    github: "https://github.com/areebkhan",
  },
];

export type Project = (typeof projects)[number];
