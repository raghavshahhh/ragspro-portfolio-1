"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Play, Pause, ChevronDown } from "lucide-react";

// Custom cursor component
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

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
      <a href="#" className="text-xl font-bold tracking-tight">RAGS</a>
      <div className="hidden md:flex items-center gap-8">
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="btn-outline hidden md:block">
        <span>Get in Touch</span>
      </button>
    </motion.nav>
  );
}

// Hero with parallax slider
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const slides = [
    {
      title: "CRAFTING",
      title2: "DIGITAL",
      subtitle: "Exceptional by Design",
      description: "Premium web development for visionary brands",
    },
    {
      title: "BUILDING",
      title2: "FUTURE",
      subtitle: "Innovation First",
      description: "AI-powered solutions that transform businesses",
    },
    {
      title: "CREATING",
      title2: "IMPACT",
      subtitle: "Results Driven",
      description: "50+ projects delivered with excellence",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Animated background layers */}
      <div
        className="absolute inset-0 parallax-layer"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-[90vw]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {slide.subtitle}
                </span>
              </motion.div>

              {/* Main Title */}
              <div
                className="parallax-layer"
                style={{
                  transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
                }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="headline-xl text-white mb-2"
                >
                  {slide.title}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="headline-xl text-stroke mb-8"
                >
                  {slide.title2}
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-white/60 max-w-xl mb-12"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button className="btn-outline group">
                  <span className="flex items-center gap-3">
                    View Our Work
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-500 ${
                currentSlide === index ? "w-12 bg-white" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 right-6 md:right-12 lg:right-24"
        >
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Stats section with counter animation
function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-item text-center md:text-left ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="counter mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services section with hover effects
function Services() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description: "Custom Next.js applications with premium animations and seamless user experiences.",
    },
    {
      num: "02",
      title: "AI Integration",
      description: "Intelligent features powered by cutting-edge AI to automate and enhance your workflows.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      description: "Pixel-perfect interfaces that users love, designed with precision and purpose.",
    },
    {
      num: "04",
      title: "Automation",
      description: "Streamlined workflows with n8n, Make, and custom automation solutions.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">
            What We Do
          </span>
          <h2 className="headline-lg gradient-text">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card bg-[#050505] group cursor-pointer"
            >
              <span className="text-xs text-white/30 block mb-8">{service.num}</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white/80 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                <span className="text-xs uppercase tracking-widest">Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio section with horizontal scroll
function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  const projects = [
    { title: "LAW AI", category: "Legal Tech", year: "2024" },
    { title: "Agency OS", category: "Business", year: "2024" },
    { title: "RAGS Pro", category: "Extension", year: "2024" },
    { title: "E-Commerce", category: "Shopify", year: "2023" },
    { title: "Portfolio X", category: "Creative", year: "2023" },
    { title: "SaaS Platform", category: "Technology", year: "2023" },
  ];

  return (
    <section id="work" ref={containerRef} className="py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">
            Selected Work
          </span>
          <h2 className="headline-lg gradient-text">Portfolio</h2>
        </motion.div>
      </div>

      <motion.div style={{ x: springX }} className="flex gap-6 px-6 md:px-12 lg:px-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="portfolio-card flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[35vw] aspect-[4/3] bg-white/5 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs text-white/40 mb-2">{project.category}</span>
              <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
              <span className="text-xs text-white/30 mt-2">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// About section with parallax
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">
              About Us
            </span>
            <h2 className="headline-lg gradient-text mb-8">
              Building the Future
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              We&apos;re a team of developers, designers, and AI enthusiasts creating
              premium digital experiences that captivate, convert, and scale.
            </p>
            <p className="text-white/40 leading-relaxed mb-8">
              Based in Delhi, India, we work with clients worldwide to deliver
              exceptional results. Every project is an opportunity to push boundaries
              and create something extraordinary.
            </p>
            <button className="btn-outline">
              <span>Learn More About Us</span>
            </button>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative aspect-square bg-white/5"
          >
            <div className="absolute inset-4 border border-white/10" />
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-white/10 mb-4">R</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/30">
                  RAGS Pro
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact section
function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">
            Get in Touch
          </span>
          <h2 className="footer-cta mb-8">
            Let&apos;s Build Something<br />
            <span className="text-stroke">Exceptional</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            Ready to start your next project? We&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
          <button className="btn-outline text-lg px-12 py-5">
            <span className="flex items-center gap-3">
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-white/30 mb-2">Email</div>
              <a href="mailto:hello@ragspro.com" className="text-white hover:text-white/70 transition-colors">
                hello@ragspro.com
              </a>
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-widest text-white/30 mb-2">Location</div>
              <span className="text-white">Delhi, India</span>
            </div>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
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
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-white/40">© 2024 RAGS Pro. All rights reserved.</span>
        <span className="text-xs uppercase tracking-widest text-white/30">
          Crafted with precision
        </span>
      </div>
    </footer>
  );
}

// Main page
export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
