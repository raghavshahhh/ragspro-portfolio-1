"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUpRight, Zap, Brain, ShoppingCart, Check, Phone, Mail, MapPin, ExternalLink, ChevronRight, Play } from "lucide-react";
import { ragsProContent } from "@/lib/utils";

const WA_GREEN = "#25D366";

// Custom cursor
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateOutline();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  );
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`nav-fixed flex items-center justify-between ${scrolled ? "scrolled" : ""}`}
    >
      <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-2">
        <span className="text-[#25D366]">●</span> RAGS
      </a>
      <div className="hidden md:flex items-center gap-8">
        {["Services", "Work", "Pricing", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href={`https://wa.me/${ragsProContent.contact.phone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline hidden md:flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Chat on WhatsApp</span>
      </a>
    </motion.nav>
  );
}

// Hero with WhatsApp focus
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Effects */}
      <div
        className="absolute inset-0 parallax-layer"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#25D366]/3 rounded-full blur-[100px]" />
      </div>

      {/* WhatsApp Chat Mockup floating */}
      <motion.div
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }}
      >
        <div className="w-[380px] bg-[#0B141A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="bg-[#202C33] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium">RAGS Bot</div>
              <div className="text-xs text-white/50">online</div>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="p-4 space-y-3 min-h-[300px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-[#202C33] rounded-lg rounded-tl-none p-3 max-w-[85%]"
            >
              <p className="text-sm">Hello! 👋 Welcome to our store. How can I help you today?</p>
              <span className="text-[10px] text-white/40 float-right mt-1">10:30 AM</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="bg-[#005C4B] rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto"
            >
              <p className="text-sm">I want to order dog food</p>
              <span className="text-[10px] text-white/40 float-right mt-1">10:31 AM</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="bg-[#202C33] rounded-lg rounded-tl-none p-3 max-w-[85%]"
            >
              <p className="text-sm">Great choice! 🐕 Here&apos;s our menu:</p>
              <div className="mt-2 space-y-2">
                <div className="bg-white/5 rounded p-2 flex justify-between">
                  <span className="text-xs">Premium Dog Food</span>
                  <span className="text-xs text-[#25D366]">₹999</span>
                </div>
                <div className="bg-white/5 rounded p-2 flex justify-between">
                  <span className="text-xs">Organic Treats</span>
                  <span className="text-xs text-[#25D366]">₹499</span>
                </div>
              </div>
              <span className="text-[10px] text-white/40 float-right mt-1">10:31 AM</span>
            </motion.div>
          </div>
          {/* Input */}
          <div className="bg-[#202C33] p-3 flex items-center gap-2">
            <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-sm text-white/50">Type a message...</div>
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Now Accepting New Projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="headline-xl mb-6"
        >
          Turn WhatsApp
          <br />
          <span className="text-[#25D366]">Conversations</span>
          <br />
          Into Revenue
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mb-8"
        >
          AI-powered WhatsApp bots that handle sales, support, and automation
          24/7 for your business. Built for founders who want to scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={`https://wa.me/${ragsProContent.contact.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start on WhatsApp</span>
          </a>
          <a href="#work" className="btn-outline flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>See Demo</span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex items-center gap-8"
        >
          <div>
            <div className="text-2xl font-bold text-[#25D366]">25+</div>
            <div className="text-xs text-white/40">Bots Delivered</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-[#25D366]">3x</div>
            <div className="text-xs text-white/40">Avg. Sales Boost</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-[#25D366]">24/7</div>
            <div className="text-xs text-white/40">Auto Support</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </motion.div>
    </section>
  );
}

// Stats Section
function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ragsProContent.about.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#25D366] mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = ragsProContent.services;

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4">What We Do</span>
          <h2 className="headline-lg">WhatsApp Solutions</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card bg-[#0B141A] border border-white/10 rounded-2xl p-8 group hover:border-[#25D366]/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-[#25D366]/60">0{index + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  {service.icon === "MessageCircle" && <MessageCircle className="w-6 h-6 text-[#25D366]" />}
                  {service.icon === "Zap" && <Zap className="w-6 h-6 text-[#25D366]" />}
                  {service.icon === "Brain" && <Brain className="w-6 h-6 text-[#25D366]" />}
                  {service.icon === "ShoppingCart" && <ShoppingCart className="w-6 h-6 text-[#25D366]" />}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#25D366] transition-colors">{service.title}</h3>
              <p className="text-white/50 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {(service as any).features?.map((feature: string) => (
                  <span key={feature} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0B141A]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4">Our Work</span>
          <h2 className="headline-lg">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ragsProContent.portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#050505] rounded-2xl overflow-hidden border border-white/10 hover:border-[#25D366]/30 transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-[#25D366]/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/5">{project.title[0]}</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#25D366]">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#25D366] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/50 mb-6">{project.description}</p>
                {(project as any).stats && (
                  <div className="flex gap-6">
                    {Object.entries((project as any).stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-[#25D366]">{value as string}</div>
                        <div className="text-xs text-white/40 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4">Pricing</span>
          <h2 className="headline-lg">Simple Pricing</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">One-time payment. No monthly fees. You own the bot.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ragsProContent.pricing?.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-[#25D366]/10 border-2 border-[#25D366]"
                  : "bg-[#0B141A] border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#25D366] rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-white/50 text-sm ml-2">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${ragsProContent.contact.phone.replace(/\D/g, "")}?text=Hi! I'm interested in the ${plan.name} plan`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "bg-[#25D366] text-black hover:bg-[#25D366]/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4">About Us</span>
            <h2 className="headline-lg mb-6">{ragsProContent.about.title}</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">{ragsProContent.about.description}</p>
            <div className="flex flex-wrap gap-4">
              {["WhatsApp API", "AI Integration", "Business Automation", "E-Commerce"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-[#0B141A] rounded-2xl border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-12 h-12 text-[#25D366]" />
                </div>
                <div className="text-2xl font-bold mb-2">RAGS</div>
                <div className="text-sm text-white/50">WhatsApp Automation Agency</div>
                <div className="text-xs text-white/30 mt-4">Delhi, India</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0B141A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#25D366] block mb-4">Get Started</span>
          <h2 className="headline-lg mb-6">
            Ready to Automate
            <br />
            <span className="text-[#25D366]">Your Business?</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            Let&apos;s build a WhatsApp bot that works 24/7 for your business.
            Get your first demo in 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`https://wa.me/${ragsProContent.contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`mailto:${ragsProContent.contact.email}`}
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{ragsProContent.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{ragsProContent.contact.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#25D366]">●</span>
            <span className="font-bold">RAGS</span>
            <span className="text-white/40">| WhatsApp Automation Agency</span>
          </div>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs uppercase tracking-widest text-white/40 hover:text-[#25D366] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          © 2024 RAGS Pro. All rights reserved. Made with ❤️ in Delhi.
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
