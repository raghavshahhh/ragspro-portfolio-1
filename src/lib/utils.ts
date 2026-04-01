import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ragsProContent = {
  name: "RAGS Pro",
  tagline: "Premium Web Development & AI Solutions",
  description: "We craft digital experiences that captivate, convert, and scale.",
  services: [
    {
      title: "Web Development",
      description: "Custom Next.js applications with premium animations and 3D effects",
      icon: "Code2",
    },
    {
      title: "AI Integration",
      description: "Intelligent features powered by cutting-edge language models",
      icon: "Brain",
    },
    {
      title: "UI/UX Design",
      description: "Pixel-perfect interfaces that users love and remember",
      icon: "Palette",
    },
    {
      title: "Automation",
      description: "Streamlined workflows with n8n, Make, and custom solutions",
      icon: "Workflow",
    },
  ],
  portfolio: [
    {
      title: "LAW AI",
      category: "Legal Tech Platform",
      description: "AI-powered legal document analysis for Indian law",
    },
    {
      title: "Agency OS",
      category: "Business Automation",
      description: "Complete agency management with lead automation",
    },
    {
      title: "RAGS Pro",
      category: "Chrome Extension",
      description: "Premium Claude Code enhancement suite",
    },
    {
      title: "E-Commerce",
      category: "Shopify Store",
      description: "High-converting custom storefront with 3D product views",
    },
  ],
  about: {
    title: "Building the Future",
    description: "We're a team of developers, designers, and AI enthusiasts creating premium digital experiences. Based in Delhi, serving clients worldwide.",
    stats: [
      { label: "Projects Delivered", value: "50+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Years Experience", value: "5+" },
      { label: "Team Members", value: "8" },
    ],
  },
  contact: {
    email: "hello@ragspro.com",
    phone: "+91 98765 43210",
    location: "Delhi, India",
    social: {
      twitter: "@ragspro",
      linkedin: "ragspro",
      github: "raghavshah",
    },
  },
};
