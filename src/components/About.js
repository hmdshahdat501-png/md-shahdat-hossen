"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { initTextReveal } from "../lib/animations";
import { Download, Award, Briefcase, Headphones } from "lucide-react";
import Image from "next/image";
import image from "../assets/1000055466 (1).png";

const stats = [
  { icon: Award, label: "Experience", sub: "3 Years Working" },
  { icon: Briefcase, label: "Completed", sub: "150+ Projects" },
  { icon: Headphones, label: "Support", sub: "Online 24/7" },
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add a slight delay to ensure the DOM is ready for the reveal animation
    setTimeout(() => initTextReveal(".reveal-about"), 100);
  }, []);

  if (!mounted)
    return (
      <section
        id="about"
        className="py-16 px-6 md:px-24 max-w-7xl mx-auto opacity-0"
      />
    );

  return (
    <section
      id="about"
      className="px-6 md:px-24 max-w-7xl mx-auto transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-about dark:text-white">
          About
        </h2>
        <p className="text-secondary dark:text-gray-400 text-sm uppercase tracking-widest font-bold">
          My Introduction
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group h-125"
        >
          <div className="absolute inset-0 rounded-4xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src={image}
              alt="About Md Shakil Islam"
              fill
              referrerPolicy="no-referrer"
              className="object-cover grayscale group-hover:grayscale-0 rounded-4xl transition-all duration-700 dark:brightness-90"
            />
          </div>
        </motion.div>

        <div className="text-left space-y-10">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative p-px rounded-3xl overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#a855f7_50%,#e2e8f0_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-zinc-50 dark:bg-zinc-900 p-5 rounded-[calc(1.5rem-1px)] h-full border border-zinc-200 dark:border-zinc-800 shadow-sm text-center space-y-2 z-10 transition-colors">
                    <Icon className="text-primary dark:text-blue-400 w-6 h-6 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-xs uppercase tracking-tight text-zinc-900 dark:text-gray-100">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-zinc-500 dark:text-gray-400 font-medium">
                      {stat.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-6">
            <p className="text-secondary dark:text-gray-400 text-base leading-relaxed font-medium reveal-about">
             I’m a web developer focused on building scalable, high-performance web applications using React.js, Next.js, and Node.js. I craft clean, responsive, and intuitive user interfaces backed by efficient backend logic and MongoDB. My focus is on delivering seamless digital experiences with maintainable and production-ready code.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] dark:bg-[linear-gradient(135deg,#1e293b,#0f172a,#020617)] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 overflow-hidden group shadow-xl"
            >
              <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

              <span className="relative z-10">Download Resume</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative z-10"
              >
                <Download
                  size={20}
                  fill="currentColor"
                  fillOpacity={0.2}
                  strokeWidth={2.5}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
