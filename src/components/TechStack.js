"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const techs = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST API", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "JWT", icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export default function TechStack() {
  
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  return (
    <section className="text-center bg-zinc-50 dark:bg-zinc-950/20 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white">Technologies</h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm mb-16 uppercase tracking-widest font-bold">My Tech Stack</p>
      
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {techs.map((tech, idx) => (
          <motion.div 
            key={idx}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.15
            }}
            whileHover={{ scale: 1.1, y: -12 }}
            className="group relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex items-center justify-center p-4 tech-card cursor-help transition-colors"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-zinc-400/5 dark:bg-white/5"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.15
              }}
            />

            <div className="relative z-10 w-full h-full">
              <Image 
                src={tech.icon} 
                alt={tech.name} 
                fill
                className="object-contain" 
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-bold uppercase tracking-widest">
              {tech.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
