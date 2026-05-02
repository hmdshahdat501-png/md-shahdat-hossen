"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { useEffect, useState } from 'react';

const qualifications = [
  {
    title: "Web Development Course",
    subtitle: "Programming Hero",
    date: "2024",
    side: "left"
  },
  {
    title: "B.A. Honors (Philosophy)",
    subtitle: "Govt. Azizul Haque College, Bogura",
    date: "Recent",
    side: "right"
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Govt. Begum Nurun Nahar Tarkabagish Honors College",
    date: "2018 - 2020",
    side: "left"
  }
];

export default function Qualification() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto text-center transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-white">Qualification</h2>
      <p className="text-secondary dark:text-gray-400 text-sm mb-16 uppercase tracking-widest font-bold">My educational journey</p>
      
      <div className="flex justify-center gap-12 mb-16">
        <div className="flex items-center gap-2 text-primary dark:text-blue-400 font-bold uppercase tracking-widest text-xs">
          <GraduationCap size={20} /> Education
        </div>
      </div>

      <div className="relative max-w-2xl mx-auto pb-20">
        <div className="timeline-line dark:bg-zinc-800"></div>
        <div className="space-y-20">
          {qualifications.map((q, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: q.side === 'left' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between w-full"
            >
              {q.side === 'left' ? (
                <>
                  <div className="w-[45%] text-right pr-8">
                    <h4 className="font-bold text-sm dark:text-zinc-100">{q.title}</h4>
                    <p className="text-secondary dark:text-gray-400 text-xs mt-1">{q.subtitle}</p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-400 dark:text-gray-500 mt-2 font-bold uppercase tracking-wider">
                      <Calendar size={12} /> {q.date}
                    </div>
                  </div>
                  <div className="z-10 w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full border-2 border-white dark:border-zinc-900 shadow-sm"></div>
                  <div className="w-[45%]"></div>
                </>
              ) : (
                <>
                  <div className="w-[45%]"></div>
                  <div className="z-10 w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full border-2 border-white dark:border-zinc-900 shadow-sm"></div>
                  <div className="w-[45%] text-left pl-8">
                    <h4 className="font-bold text-sm dark:text-zinc-100">{q.title}</h4>
                    <p className="text-secondary dark:text-gray-400 text-xs mt-1">{q.subtitle}</p>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-400 dark:text-gray-500 mt-2 font-bold uppercase tracking-wider">
                      <Calendar size={12} /> {q.date}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
