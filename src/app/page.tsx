"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUpRight, Clock, UserX, Repeat, TrendingUp, Check, Phone, Mail, MapPin, ChevronRight, Play, Calendar, Sparkles, Shield } from "lucide-react";
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
      <a href="#" className="flex items-center gap-2">
        <span className="text-2xl font-bold">RAGS</span>
        <span className="text-xs text-white/40 uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded">PRO</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {["Services", "Results", "Pricing", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href={ragsProContent.brand.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary hidden md:flex items-center gap-2 text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Get Demo</span>
      </a>
    </motion.nav>
  );
}

// Hero Section
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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B141A] via-[#050505] to-[#050505]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#25D366]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Now accepting projects for April
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {ragsProContent.hero.headline}
              <br />
              <span className="text-[#25D366]">{ragsProContent.hero.headlineHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/60 mb-8 max-w-lg"
            >
              {ragsProContent.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href={ragsProContent.brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{ragsProContent.hero.ctaPrimary}</span>
              </a>
              <a href="#services" className="btn-outline flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span>{ragsProContent.hero.ctaSecondary}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 text-sm text-white/40"
            >
              {ragsProContent.hero.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-[#25D366] font-bold">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="bg-[#0B141A] rounded-[2.5rem] border-4 border-[#202C33] overflow-hidden shadow-2xl">
                {/* Chat Header */}
                <div className="bg-[#202C33] px-4 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">PuppyChef Bot</div>
                    <div className="text-xs text-[#25D366]">online</div>
                  </div>
                </div>
                {/* Chat Messages */}
                <div className="p-4 space-y-3 min-h-[400px] bg-[#0B141A]">
                  {ragsProContent.hero.chatDemo.messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + idx * 0.3 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-lg text-sm ${
                          msg.sender === "user"
                            ? "bg-[#005C4B] rounded-tr-none"
                            : "bg-[#202C33] rounded-tl-none"
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                        <span className="text-[10px] text-white/40 float-right mt-1 ml-2">{msg.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Input */}
                <div className="bg-[#202C33] p-3 flex items-center gap-2">
                  <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-sm text-white/40">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pain Points Section
function PainPoints() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B141A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.painPoints.headline}</h2>
          <p className="text-white/50 max-w-xl mx-auto">{ragsProContent.painPoints.subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ragsProContent.painPoints.problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/5 rounded-2xl p-6 hover:border-[#25D366]/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4">
                {problem.icon === "Clock" && <Clock className="w-6 h-6 text-[#25D366]" />}
                {problem.icon === "UserX" && <UserX className="w-6 h-6 text-[#25D366]" />}
                {problem.icon === "Repeat" && <Repeat className="w-6 h-6 text-[#25D366]" />}
                {problem.icon === "Scale" && <TrendingUp className="w-6 h-6 text-[#25D366]" />}
              </div>
              <h3 className="font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-white/50">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#25D366] font-medium">{ragsProContent.painPoints.solution}</p>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#25D366] text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.services.headline}</h2>
          <p className="text-white/50 max-w-xl mx-auto">{ragsProContent.services.subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ragsProContent.services.items.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#0B141A] border border-white/5 rounded-2xl p-8 hover:border-[#25D366]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[#25D366]/40 text-sm">{service.number}</span>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#25D366] transition-colors">{service.title}</h3>
              <p className="text-white/60 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-white/40 mb-1">Best for: {service.bestFor}</p>
                <p className="text-sm text-[#25D366]">{service.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function Process() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B141A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#25D366] text-sm uppercase tracking-wider mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold">{ragsProContent.process.headline}</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {ragsProContent.process.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 h-full">
                <div className="text-4xl font-bold text-[#25D366]/20 mb-4">{step.number}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 mb-4">{step.description}</p>
                <span className="text-xs text-[#25D366]">{step.timeline}</span>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#25D366]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies Section
function CaseStudies() {
  return (
    <section id="results" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#25D366] text-sm uppercase tracking-wider mb-4 block">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.caseStudies.headline}</h2>
          <p className="text-white/50">{ragsProContent.caseStudies.subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ragsProContent.caseStudies.items.map((study, idx) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0B141A] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{study.client}</h3>
                  <p className="text-xs text-white/50">{study.industry}</p>
                </div>
              </div>
              <p className="text-sm text-white/60 mb-4">{study.solution}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center p-2 bg-[#050505] rounded-lg">
                    <div className="text-lg font-bold text-[#25D366]">{result.metric}</div>
                    <div className="text-[10px] text-white/50">{result.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="text-sm text-white/70 italic border-l-2 border-[#25D366] pl-3">
                "{study.quote}"
              </blockquote>
              <p className="text-xs text-white/40 mt-2">— {study.author}</p>
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
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B141A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#25D366] text-sm uppercase tracking-wider mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.pricing.headline}</h2>
          <p className="text-white/50">{ragsProContent.pricing.subheadline}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ragsProContent.pricing.plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-[#25D366]/10 border-2 border-[#25D366]"
                  : "bg-[#050505] border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#25D366] rounded-full text-xs font-medium text-black">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-white/50 text-sm ml-1">one-time</span>}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={ragsProContent.brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-medium transition-all ${
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

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {ragsProContent.pricing.faq.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#050505] border border-white/5 rounded-xl p-4"
              >
                <h4 className="font-medium mb-2">{item.question}</h4>
                <p className="text-sm text-white/60">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-white/40 mt-8">{ragsProContent.pricing.note}</p>
      </div>
    </section>
  );
}

// Trust Section
function Trust() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.trust.headline}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ragsProContent.trust.reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-white/50">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B141A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{ragsProContent.cta.headline}</h2>
          <p className="text-white/60 mb-4 max-w-xl mx-auto">{ragsProContent.cta.subheadline}</p>
          <p className="text-sm text-white/40 mb-8">{ragsProContent.cta.offer}</p>
          <a
            href={ragsProContent.brand.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Calendar className="w-5 h-5" />
            <span>{ragsProContent.cta.button}</span>
          </a>
          <p className="text-sm text-white/40 mt-6">{ragsProContent.cta.alternative}</p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">RAGS</span>
            <span className="text-xs text-white/40 uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded">PRO</span>
            <span className="text-sm text-white/40 ml-4">{ragsProContent.footer.tagline}</span>
          </div>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-sm text-white/40 hover:text-[#25D366] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-white/30">
          © 2024 {ragsProContent.brand.fullName}. All rights reserved. Made in Delhi.
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
      <PainPoints />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}
