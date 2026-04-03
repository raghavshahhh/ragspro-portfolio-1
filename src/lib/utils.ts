import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// RAGS WhatsApp Automation Agency Content
export const ragsProContent = {
  brand: {
    name: "RAGS",
    fullName: "RAGS Pro",
    tagline: "WhatsApp Automation That Sells While You Sleep",
    subTagline: "AI-powered WhatsApp bots for Indian businesses",
    description: "We build intelligent WhatsApp automation systems that handle sales, support, and customer engagement 24/7. From order automation to AI chatbots, we help businesses scale without hiring more staff.",
    location: "Delhi, India",
    phone: "+91 98183 78769",
    email: "hello@ragspro.com",
    whatsappLink: "https://wa.me/919818378769",
  },

  // Hero Section
  hero: {
    headline: "Your Customers Are on WhatsApp.",
    headlineHighlight: "Why Isn't Your Business?",
    description: "73% of Indians prefer WhatsApp over any other channel. We build AI-powered WhatsApp systems that handle sales, support, and automation — so you can focus on growing your business, not answering repetitive messages.",
    ctaPrimary: "Get Free Demo",
    ctaSecondary: "See How It Works",
    trustBadge: "Trusted by 50+ Indian businesses",
    stats: [
      { value: "3x", label: "Average sales increase" },
      { value: "24/7", label: "Automated responses" },
      { value: "< 1 min", label: "Average response time" },
    ],
    chatDemo: {
      messages: [
        { sender: "bot", text: "Hi Rahul! 👋 Saw you checked out our Premium Dog Food. Want me to show you what's in stock?", time: "10:30 AM" },
        { sender: "user", text: "Yes, show me options", time: "10:31 AM" },
        { sender: "bot", text: "Here's what we have:\n\n🥩 Chicken & Rice - ₹999\n🐟 Salmon Grain-Free - ₹1,299\n🦃 Turkey Puppy Formula - ₹899\n\nWant to order? Just reply with the number!", time: "10:31 AM" },
        { sender: "user", text: "I'll take #1", time: "10:32 AM" },
        { sender: "bot", text: "Perfect! 🎉\n\nOrder: 1x Chicken & Rice\nTotal: ₹999 + ₹50 shipping\n\nPay here: [UPI Link]\nOr Cash on Delivery?", time: "10:32 AM" },
      ],
    },
  },

  // Pain Points Section
  painPoints: {
    headline: "Still Doing This Manually?",
    subheadline: "Every minute you spend on WhatsApp is a minute not spent on growth",
    problems: [
      {
        icon: "Clock",
        title: "Waking up to 200+ unread messages",
        description: "Orders, inquiries, support requests — all piling up while you sleep",
      },
      {
        icon: "UserX",
        title: "Losing customers to slow replies",
        description: "78% of customers buy from whoever responds first. Manual replies = lost revenue",
      },
      {
        icon: "Repeat",
        title: "Answering the same questions daily",
        description: "Price? Stock? Delivery? Your time is worth more than ₹50/hour",
      },
      {
        icon: "Scale",
        title: "Can't scale without hiring",
        description: "More sales = more messages = need more staff. It's a trap.",
      },
    ],
    solution: "There's a better way. Automation that actually works.",
  },

  // Services Section
  services: {
    headline: "What We Build",
    subheadline: "End-to-end WhatsApp automation systems, not just chatbots",
    items: [
      {
        number: "01",
        title: "WhatsApp Sales Bot",
        description: "A complete storefront inside WhatsApp. Product catalog, cart, payments, order tracking — everything your customers need without leaving the app.",
        features: ["Product catalog with images", "Add to cart & checkout", "UPI/credit card payments", "Order status updates", "Abandoned cart recovery"],
        bestFor: "E-commerce, D2C brands, retailers",
        result: "3x more sales, 70% less manual work",
      },
      {
        number: "02",
        title: "AI Customer Support",
        description: "Smart responses that understand context, not just keyword matching. Handles 80% of queries automatically, escalates complex issues to you.",
        features: ["Natural language understanding", "Multi-language support (Hinglish too)", "Smart escalation rules", "FAQ auto-learning", "Human handoff when needed"],
        bestFor: "Service businesses, SaaS, support-heavy companies",
        result: "80% queries auto-resolved, < 1 min response time",
      },
      {
        number: "03",
        title: "Lead Qualification",
        description: "Never miss a lead again. Bot asks qualification questions, scores leads, books appointments, and syncs with your CRM.",
        features: ["Automated lead scoring", "Appointment booking", "CRM integration", "Follow-up sequences", "Source tracking"],
        bestFor: "B2B services, real estate, agencies, consultants",
        result: "40% more qualified leads, 60% faster response",
      },
      {
        number: "04",
        title: "Business Automation",
        description: "Connect WhatsApp to your entire business. Inventory sync, order processing, delivery updates — all automated.",
        features: ["Inventory sync", "Order management", "Delivery tracking", "Payment reconciliation", "Multi-system integration"],
        bestFor: "Operations-heavy businesses, logistics, manufacturing",
        result: "90% task automation, zero manual errors",
      },
    ],
  },

  // How It Works
  process: {
    headline: "How It Works",
    steps: [
      {
        number: "1",
        title: "Discovery Call",
        description: "30-minute call to understand your business, pain points, and goals. We identify automation opportunities.",
        timeline: "Day 1",
      },
      {
        number: "2",
        title: "Strategy & Design",
        description: "We map your customer journey, design conversation flows, and plan integrations.",
        timeline: "Day 2-3",
      },
      {
        number: "3",
        title: "Build & Test",
        description: "We build your bot, train the AI on your data, and test with real scenarios.",
        timeline: "Day 4-7",
      },
      {
        number: "4",
        title: "Go Live",
        description: "Launch with monitoring. We optimize based on real conversations for 30 days.",
        timeline: "Day 8",
      },
    ],
  },

  // Case Studies
  caseStudies: {
    headline: "Real Results",
    subheadline: "Not theory. Actual businesses we helped.",
    items: [
      {
        client: "PuppyChef",
        industry: "Pet Food E-commerce",
        challenge: "Manual order taking on WhatsApp was overwhelming. 3-hour average response time.",
        solution: "WhatsApp sales bot with catalog, cart, and payment integration.",
        results: [
          { metric: "3x", label: "Sales increase in 30 days" },
          { metric: "< 1 min", label: "Response time" },
          { metric: "4 hours", label: "Daily time saved" },
        ],
        quote: "The bot handles 80% of orders automatically. I only step in for custom requests. Game changer.",
        author: "Rahul Mehta, Founder",
      },
      {
        client: "LegalTech Solutions",
        industry: "Legal Services",
        challenge: "Missing leads after hours. Potential clients messaging at night, no one to respond.",
        solution: "AI lead qualification bot with appointment booking and CRM sync.",
        results: [
          { metric: "40%", label: "More qualified leads" },
          { metric: "60%", label: "Faster response time" },
          { metric: "24/7", label: "Lead capture" },
        ],
        quote: "We wake up to pre-qualified leads with all the info we need. Best investment we made.",
        author: "Priya Sharma, CEO",
      },
      {
        client: "Delhi Fashion Hub",
        industry: "Fashion Retail",
        challenge: "Same questions daily: Price? Size? Delivery? Stock check?",
        solution: "Smart FAQ bot with product search and order tracking.",
        results: [
          { metric: "80%", label: "Queries automated" },
          { metric: "₹2L+", label: "Saved in staffing" },
          { metric: "4.9★", label: "Customer rating" },
        ],
        quote: "Our customers love instant replies. We love not answering the same questions 50 times a day.",
        author: "Amit Kumar, Owner",
      },
    ],
  },

  // Pricing
  pricing: {
    headline: "Simple Pricing",
    subheadline: "One-time build. You own it forever. No monthly fees to us.",
    note: "* You pay WhatsApp Business API fees directly to Meta (~₹0.5-1 per conversation). We don't markup.",
    plans: [
      {
        name: "Starter",
        price: "₹14,999",
        description: "Perfect for small businesses testing WhatsApp automation",
        features: [
          "Basic WhatsApp bot (5 conversation flows)",
          "Auto-replies & welcome messages",
          "Working hours auto-responder",
          "Basic analytics dashboard",
          "30 days support",
        ],
        notIncluded: ["AI features", "Payment integration", "CRM sync"],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Growth",
        price: "₹34,999",
        description: "For businesses ready to scale with AI",
        features: [
          "Everything in Starter",
          "AI-powered conversations",
          "Product catalog & cart",
          "Payment gateway (Razorpay/Cashfree)",
          "Order tracking & updates",
          "CRM integration (HubSpot/Zoho)",
          "Abandoned cart recovery",
          "90 days support",
        ],
        notIncluded: [],
        cta: "Most Popular",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale automation for large operations",
        features: [
          "Everything in Growth",
          "Custom AI training",
          "Multi-agent system",
          "Advanced analytics",
          "Priority support (6 months)",
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantee",
        ],
        notIncluded: [],
        cta: "Talk to Sales",
        popular: false,
      },
    ],
    faq: [
      {
        question: "Are there any monthly fees?",
        answer: "No monthly fees to us. You pay WhatsApp Business API fees directly to Meta (~₹0.5-1 per conversation). We don't take a cut.",
      },
      {
        question: "How long does it take to build?",
        answer: "Starter: 3-5 days. Growth: 7-10 days. Enterprise: 2-4 weeks depending on complexity.",
      },
      {
        question: "Can I upgrade later?",
        answer: "Yes. Pay the difference and we'll upgrade your bot with new features.",
      },
      {
        question: "Do I need technical knowledge?",
        answer: "No. We handle everything. You get a working system with a simple dashboard to manage it.",
      },
    ],
  },

  // Trust Signals
  trust: {
    headline: "Why Businesses Choose RAGS",
    reasons: [
      {
        title: "Built for India",
        description: "Hinglish support, UPI integration, local payment gateways — we understand the Indian market.",
      },
      {
        title: "You Own Everything",
        description: "No vendor lock-in. You get full source code, documentation, and training.",
      },
      {
        title: "Real AI, Not Templates",
        description: "GPT-4 powered conversations that understand context, not rigid decision trees.",
      },
      {
        title: "Results in 30 Days",
        description: "Most clients see measurable ROI within a month. We track it and show you.",
      },
    ],
  },

  // CTA Section
  cta: {
    headline: "Ready to Automate?",
    subheadline: "Get a free 15-minute demo. See exactly how WhatsApp automation would work for your business.",
    offer: "No commitment. No sales pressure. Just a real conversation about your business.",
    button: "Book Free Demo",
    alternative: "Or WhatsApp us directly: +91 98183 78769",
  },

  // Footer
  footer: {
    tagline: "WhatsApp automation for Indian businesses",
    links: {
      services: ["Sales Bots", "AI Support", "Lead Qualification", "Automation"],
      company: ["About", "Blog", "Careers", "Contact"],
      legal: ["Privacy", "Terms", "Refund Policy"],
    },
    social: ["Twitter", "LinkedIn", "Instagram"],
  },
};

// Utility functions
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number) => {
  if (num >= 100000) return (num / 100000).toFixed(1) + "L";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};
