import { 
  Workflow, 
  Video, 
  Code2,
  type LucideIcon 
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "AI Automation",
    description: "Custom n8n workflows, AI agents, and intelligent automations that run 24/7 without manual intervention.",
    icon: Workflow,
    features: [
      "Custom n8n workflows",
      "API integrations",
      "Error handling & monitoring",
    ],
  },
  {
    id: 2,
    title: "Content Automation",
    description: "Viral script generation, automated posting pipelines, and content systems that scale your reach.",
    icon: Video,
    features: [
      "Social media automation",
      "AI script generation",
      "Scheduling & analytics",
    ],
  },
  {
    id: 3,
    title: "Full-Stack AI Apps",
    description: "Production-ready web applications with AI capabilities, from database design to deployment.",
    icon: Code2,
    features: [
      "Next.js applications",
      "Database architecture",
      "AI API integration",
    ],
  },
];
