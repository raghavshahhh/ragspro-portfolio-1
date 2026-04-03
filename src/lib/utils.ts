import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ragsProContent = {
  name: "RAGS",
  tagline: "WhatsApp AI Solutions for Business Growth",
  description: "Transform your business with intelligent WhatsApp bots and automation that converts conversations into revenue.",
  services: [
    {
      title: "WhatsApp Bot Development",
      description: "Custom AI-powered WhatsApp bots that handle sales, support, and engagement 24/7",
      icon: "MessageCircle",
      features: ["Order automation", "Customer support", "Lead qualification", "Payment integration"],
    },
    {
      title: "Business Automation",
      description: "End-to-end workflow automation connecting WhatsApp with your CRM, inventory, and payment systems",
      icon: "Zap",
      features: ["CRM integration", "Auto-replies", "Broadcast messages", "Analytics dashboard"],
    },
    {
      title: "AI Integration",
      description: "Smart AI agents that understand context, handle complex queries, and learn from interactions",
      icon: "Brain",
      features: ["Natural language", "Sentiment analysis", "Multi-language", "Context memory"],
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete WhatsApp storefront with catalog, cart, payments, and order tracking",
      icon: "ShoppingCart",
      features: ["Product catalog", "One-click buy", "Order tracking", "Review collection"],
    },
  ],
  portfolio: [
    {
      title: "PuppyChef",
      category: "WhatsApp E-Commerce",
      description: "AI-powered WhatsApp ordering system for pet food business. 3x sales increase in 30 days.",
      stats: { conversion: "45%", response: "< 1 min" },
      image: "/projects/puppychef.jpg",
    },
    {
      title: "LAW AI",
      category: "Legal Tech Platform",
      description: "WhatsApp bot for legal document analysis and lawyer matching. 10,000+ queries handled.",
      stats: { users: "5,000+", accuracy: "98%" },
      image: "/projects/lawai.jpg",
    },
    {
      title: "Agency OS",
      category: "Business Automation",
      description: "Complete agency management with automated lead capture, nurturing, and onboarding via WhatsApp.",
      stats: { leads: "300%", time: "-80%" },
      image: "/projects/agencyos.jpg",
    },
    {
      title: "RAGS Pro",
      category: "AI Productivity Suite",
      description: "Developer tools and AI assistants. Premium Chrome extension with 500+ active users.",
      stats: { users: "500+", rating: "4.9/5" },
      image: "/projects/ragspro.jpg",
    },
  ],
  about: {
    title: "Turn Conversations Into Revenue",
    description: "We're India's leading WhatsApp automation agency, helping business founders scale with AI. From pet shops to law firms, we build bots that sell, support, and scale.",
    stats: [
      { label: "WhatsApp Bots Delivered", value: "25+" },
      { label: "Businesses Automated", value: "50+" },
      { label: "Messages Handled", value: "100K+" },
      { label: "Revenue Generated", value: "₹50L+" },
    ],
  },
  testimonials: [
    {
      quote: "Our WhatsApp bot handles 80% of orders automatically. Sales went up 3x without hiring more staff.",
      author: "Rahul Mehta",
      role: "Founder, PuppyChef",
      image: "/testimonials/rahul.jpg",
    },
    {
      quote: "Clients love the instant responses. Our lead conversion improved by 40% in just 2 weeks.",
      author: "Priya Sharma",
      role: "CEO, LegalTech Solutions",
      image: "/testimonials/priya.jpg",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "₹9,999",
      period: "one-time",
      description: "Perfect for small businesses starting with WhatsApp",
      features: [
        "WhatsApp Business API setup",
        "Basic chatbot (5 intents)",
        "Auto-reply messages",
        "Contact management",
        "30 days support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: "₹24,999",
      period: "one-time",
      description: "For businesses ready to scale with AI",
      features: [
        "Everything in Starter",
        "AI-powered bot (unlimited intents)",
        "CRM integration",
        "Payment gateway setup",
        "Analytics dashboard",
        "Broadcast messaging",
        "90 days support",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "project",
      description: "Full-scale automation for large operations",
      features: [
        "Everything in Growth",
        "Custom AI training",
        "Multi-agent system",
        "Advanced analytics",
        "Priority support",
        "Dedicated manager",
        "Custom integrations",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ],
  contact: {
    email: "hello@ragspro.com",
    phone: "+91 98183 78769",
    whatsapp: "+91 98183 78769",
    location: "Delhi, India",
    social: {
      twitter: "@ragspro",
      linkedin: "ragspro",
      github: "raghavshah",
    },
  },
};
