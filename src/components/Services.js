"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { initTextReveal } from '../lib/animations';
import { Layout, Server, Database, ArrowRight, X, CheckCircle2, Code, Rocket } from "lucide-react";

const services = [
  { 
    title: "Frontend Development", 
    icon: Layout,
    glowColor: "#3b82f6",
    desc: "Crafting beautiful, accessible, and fast web experiences using modern frameworks.",
    details: [
      "Responsive and adaptive UI designs",
      "Modern animations with Framer Motion",
      "Performance-focused development",
      "Highly interactive user interfaces",
      "Reusable component design systems"
    ]
  },
  { 
    title: "Backend Development", 
    icon: Server,
    glowColor: "#a855f7",
    desc: "Building robust APIs, database architectures, and secure server-side logic.",
    details: [
      "RESTful and GraphQL API development",
      "Secure authentication systems (JWT/OAuth)",
      "Database modeling and optimization (NoSQL/SQL)",
      "Server-side efficiency and caching",
      "Cloud functions and serverless architecture"
    ]
  },
  { 
    title: "Full Stack Development", 
    icon: Database,
    glowColor: "#10b981",
    desc: "End-to-end solutions combining elegant frontends with powerful backends.",
    details: [
      "Complete end-to-end web applications",
      "Seamless frontend & backend integration",
      "DevOps and deployment management",
      "System architecture and planning",
      "Scalable production-ready solutions"
    ]
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initTextReveal('.reveal-services');
  }, []);

  // Return a placeholder or null if not mounted yet to prevent hydration errors
  if (!mounted) {
    return (
      <section id="services" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }


  return (
    <section id="services" className="py-24 px-6 md:px-24 max-w-7xl mx-auto text-center bg-zinc-50/50 dark:bg-zinc-950/20 overflow-hidden transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-services text-zinc-900 dark:text-white">Services</h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold mb-16">What I offer</p>
      
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
          <div 
            key={idx}
            className="group relative"
          >
            <div className="relative p-0.5 rounded-[2.5rem] overflow-hidden h-full group-hover:-translate-y-2.5 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-zinc-950/50">
              <motion.div 
                className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, ${service.glowColor} 180deg, transparent 210deg, transparent 360deg)`
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-white dark:bg-zinc-900 p-12 rounded-[2.4rem] h-full text-left z-10 overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.07] group-hover:scale-150 transition-transform duration-700">
                   <Icon size={120} color={service.glowColor} />
                </div>
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500"
                  style={{ 
                    backgroundColor: `${service.glowColor}10`,
                    color: service.glowColor
                  }}
                >
                  <Icon size={32} />
                </div>
                
                <h3 className="font-bold text-2xl mb-4 leading-tight text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-500 dark:text-gray-400 text-sm leading-relaxed mb-10 grow">
                  {service.desc}
                </p>
                
                <button 
                  onClick={() => setActiveService(service)}
                  suppressHydrationWarning
                  className="text-xs font-extrabold flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest outline-none"
                  style={{ color: service.glowColor }}
                >
                  Explore <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>

      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md p-[1.5px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <motion.div 
                className="absolute inset-[-200%] opacity-100" 
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, ${activeService.glowColor} 330deg, transparent 360deg)`
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.9rem] p-10 sm:p-12 overflow-hidden text-left z-10 transition-colors">
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-all text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-100 dark:border-zinc-700 shadow-sm"
                >
                  <X size={20} />
                </button>

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: `${activeService.glowColor}15` }}>
                  {activeService && <activeService.icon size={32} color={activeService.glowColor} />}
                </div>

                <h3 className="text-3xl font-extrabold mb-4 text-zinc-900 dark:text-white">{activeService.title}</h3>
                <p className="text-zinc-500 dark:text-gray-400 mb-10 leading-relaxed text-sm">
                  {activeService.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {activeService.details.map((detail, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="mt-0.5" style={{ color: activeService.glowColor }} />
                      <span className="text-sm font-medium text-zinc-700 dark:text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveService(null)}
                  className="w-full py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/20"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
