"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Layout, Server, Wrench } from "lucide-react";
import { useEffect, useState } from 'react';

const skills = {
  frontend: [
    { name: "HTML5", level: "Expert" },
    { name: "NextJS", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Tailwind Css", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "ReactJS", level: "Expert" },
  ],
  backend: [
    { name: "NodeJS", level: "Expert" },
    { name: "ExpressJS", level: "Expert" },
    { name: "MongoDB", level: "Expert" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "VS Code", level: "Expert" },
  ],
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="skills" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0f1113] text-zinc-900 dark:text-gray-100 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white">
            Skills
          </h2>
          <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold">My Technical Level</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-0.5 rounded-[2.5rem] overflow-hidden group/container shadow-xl dark:shadow-zinc-950/50"
          >
            <motion.div
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#3b82f6_330deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.4rem] h-full transition-colors">
              <h3 className="font-bold mb-10 text-xl flex items-center gap-3 justify-start dark:text-gray-100">
                <span className="p-2 bg-blue-500/10 rounded-lg">
                  <Layout className="w-6 h-6 text-blue-500" />
                </span>
                Frontend
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skills.frontend.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-zinc-200/50 dark:bg-zinc-800 transition-all duration-300"
                  >
                    <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#3b82f6_180deg,transparent_210deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-[15px] h-full z-10 shadow-sm border border-zinc-50 dark:border-zinc-800 transition-colors">
                      <BadgeCheck className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">{skill.name}</h4>
                        <p className="text-zinc-400 dark:text-gray-500 text-[10px] font-medium uppercase tracking-wider">{skill.level}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-0.5 rounded-[2.5rem] overflow-hidden group/container shadow-xl dark:shadow-zinc-950/50"
          >
            <motion.div
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#a855f7_330deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
            />

            <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.4rem] h-full transition-colors">
              <h3 className="font-bold mb-10 text-xl flex items-center gap-3 justify-start dark:text-gray-100">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <Server className="w-6 h-6 text-purple-500" />
                </span>
                Backend
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skills.backend.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-zinc-200/50 dark:bg-zinc-800 transition-all duration-300"
                  >
                    <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#a855f7_180deg,transparent_210deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-[15px] h-full z-10 shadow-sm border border-zinc-50 dark:border-zinc-800 transition-colors">
                      <BadgeCheck className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm">{skill.name}</h4>
                        <p className="text-zinc-400 dark:text-gray-500 text-[10px] font-medium uppercase tracking-wider">{skill.level}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-0.5 rounded-[2.5rem] overflow-hidden group/container shadow-xl dark:shadow-zinc-950/50"
          >
            <motion.div
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#f97316_330deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.4rem] h-full transition-colors">
              <h3 className="font-bold mb-10 text-xl flex items-center gap-3 justify-start dark:text-gray-100">
                <span className="p-2 bg-orange-500/10 rounded-lg">
                  <Wrench className="w-6 h-6 text-orange-500" />
                </span>
                Tools
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skills.tools.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-[1.5px] rounded-2xl overflow-hidden bg-zinc-200/50 dark:bg-zinc-800 transition-all duration-300"
                  >
                    <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#f97316_180deg,transparent_210deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-[15px] h-full z-10 shadow-sm border border-zinc-50 dark:border-zinc-800 transition-colors">
                      <BadgeCheck className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">{skill.name}</h4>
                        <p className="text-zinc-400 dark:text-gray-500 text-[10px] font-medium uppercase tracking-wider">{skill.level}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
