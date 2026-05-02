"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initTextReveal } from "../lib/animations";
import { Code, Rocket } from "lucide-react";
import Image from "next/image";
import techwave from "../assets/project_2.png";
import hotelBT from "../assets/project_7.png";
import byteBlaze from "../assets/project_1.png";
import digiTools from "../assets/project_4.png";
import phApps from "../assets/project_8.png";
import keenKeeper from "../assets/project_5.png";
import dragonNews from "../assets/project_3.png";
import skillSphere from "../assets/project_6.png";

const projects = [
  {
  title: "SkillSphere: Master Skills Online",
  description: "A modern e-learning platform providing a wide range of expert-led courses and structured learning paths. Features fluid animations with Framer Motion, secure user authentication via Better Auth, and an intuitive dashboard for tracking educational progress and skill mastery.",
  tags: ["Next.js", "React", "Better Auth", "Framer Motion", "Tailwind CSS", "DaisyUI"],
  image: skillSphere,
  github: "https://github.com/shakil218/skillsphere-online-learning-platform",
  demo: "https://skillsphere-online-learning-web.vercel.app"
},
  {
  title: "The Dragon News: Journalism Without Fear or Favour",
  description: "A comprehensive digital news platform featuring breaking news tickers, category-based navigation, and secure user authentication via Better Auth. Built with Next.js 16 and React 19, it integrates MongoDB for persistent data storage and features a modern, high-impact editorial design with fast-scrolling headlines and interactive community features.",
  tags: ["Next.js", "Better Auth", "MongoDB", "Tailwind CSS", "DaisyUI",],
  image: dragonNews,
  github: "https://github.com/shakil218/dragon-news-with-next.js",
  demo: "https://dragon-news-with-next-js.vercel.app"
},
  {
  title: "KeenKeeper: Smart Relationship Manager",
  description: "A thoughtful personal CRM designed to nurture meaningful connections. It features automated tracking of friend interactions, status-based reminders (Overdue, Almost Due, On-Track), and data-driven insights through visual analytics.",
  tags: ["Next.js", "Tailwind CSS", "Recharts", "Context API", "Local Storage"],
  image: keenKeeper,
  github: "https://github.com/shakil218/keen-keeper-friends-platform",
  demo: "https://keen-keeper-friends-platform.vercel.app",
},
  {
  title: "HERO.IO: Next-Gen App Marketplace",
  description: "A high-performance productivity app store built with Next.js 16 and React 19. It features a curated marketplace of enterprise-grade applications, utilizing Framer Motion for fluid interactions and Lottie for high-fidelity animations. Designed with a clean, professional aesthetic using Tailwind CSS 4 and DaisyUI.",
  tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "DaisyUI", "Lottie"],
  image: phApps,
  github: "http://github.com/shakil218/ph-apps-store-with-next.js",
  demo: "https://ph-apps-store.vercel.app",
},
  {
  title: "DigiTools: AI-Powered Digital Marketplace",
  description: "A comprehensive digital products platform featuring AI writing tools, design assets, and premium templates. Built with a robust frontend architecture including DaisyUI for sleek components and React Toastify for intuitive user feedback.",
  tags: ["React.js", "Tailwind CSS", "DaisyUI", "Lucide React", "JSON API"],
  image: digiTools,
  github: "https://github.com/shakil218/digital-devtools-platform",
  demo: "https://digital-devtools-platform.vercel.app/",
},
  {
  "title": "ByteBlaze: Tech Insights Platform",
  "description": "A modern, feature-rich content platform for tech enthusiasts. It features a curated feed of development articles, bookmarking capabilities, and a responsive reading experience with dedicated category tags and read-time estimates.",
  "tags": ["React.js", "Tailwind CSS", "Vite", "React Router"],
  "image": byteBlaze,
  "github": "https://github.com/shakil218/byteblaze",
  "demo": "https://byteblaze-three.vercel.app"
},
  {
    title: "TechWave: Cinematic Podcast Experience",
    description:
      "A high-impact, dark-themed landing page featuring vibrant gradients and modern glassmorphism effects. It showcases advanced CSS techniques for soundwave visualizations and sleek feature cards, built entirely without JavaScript to ensure maximum performance.",
    tags: ["HTML5", "Tailwind CSS", "Modern UI", "Dark Theme"],
    image: techwave,
    github: "https://github.com/shakil218/TechWave",
    demo: "https://tech-wave-one.vercel.app",
  },
  {
  title: "Hotel BT: Luxury Hospitality Experience",
  description: "A premium, minimalist landing page designed for a high-end boutique hotel. It features elegant typography, high-fidelity visual sections for guest testimonials and about-us storytelling, and a fully responsive layout. Built with a focus on clean, semantic architecture to ensure a fast and sophisticated user experience.",
  tags: ["HTML5", "Tailwind CSS", "Responsive Design", "UI/UX"],
  image: hotelBT, 
  github: "https://github.com/shakil218/hotel-website",
  demo: "https://hotel-website-ten-drab.vercel.app",
},
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const projectsPerPage = 6;

  useEffect(() => {
    setMounted(true);
    initTextReveal(".reveal-portfolio");
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  return (
    <section
      id="projects"
      className="px-6 md:px-24 max-w-7xl mx-auto text-center bg-zinc-50/30 dark:bg-zinc-950/20 transition-colors duration-300"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-portfolio text-zinc-900 dark:text-white">
        Projects
      </h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold mb-16">
        Recent Projects
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative p-0.5 rounded-3xl overflow-hidden h-full group-hover:-translate-y-2.5 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-zinc-950/50">
                <motion.div
                  className="absolute inset-[-150%] group-hover:opacity-100 transition-opacity opacity-0 duration-500 z-0 pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #a855f7 180deg, transparent 210deg, transparent 360deg)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden h-full flex flex-col z-10 transition-colors duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="p-8 flex flex-col grow text-left">
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-gray-400 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[9px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 px-3 py-1 rounded-lg font-bold tracking-wide border border-zinc-200 dark:border-zinc-700 group-hover:bg-[#1e293b] dark:group-hover:bg-zinc-100 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        suppressHydrationWarning
                        className="flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-black dark:hover:bg-zinc-700 hover:text-white transition-all duration-300"
                      >
                        <Code size={14} /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        suppressHydrationWarning
                        className="flex items-center justify-center gap-2 py-3 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                      >
                        <Rocket size={14} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center items-center gap-3"
        >
          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i + 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(i + 1)}
              suppressHydrationWarning
              className={`w-12 h-12 flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-700 font-bold text-sm transition-all ${currentPage === i + 1 ? "bg-[#1e293b] dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xl shadow-zinc-900/20" : "bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 dark:text-gray-400"}`}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>
      )}
    </section>
  );
}
