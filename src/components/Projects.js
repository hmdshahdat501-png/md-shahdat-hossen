"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initTextReveal } from "../lib/animations";
import { Code, Rocket } from "lucide-react";
import Image from "next/image";
import techwave from "../assets/project_2.png"
import image2 from "../assets/project_2.png"
import image3 from "../assets/project_2.png"
import image4 from "../assets/project_2.png"
import image5 from "../assets/project_2.png"
import image6 from "../assets/project_2.png"
import image7 from "../assets/project_2.png"
import image8 from "../assets/project_2.png"

const projects = [
  {
    title: "GameHub: The Ultimate Livestreaming Platform",
    description:
      "This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and advanced search.",
    tags: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Socket.IO",
      "RTMP/WHIP",
      "PostgreSQL",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
    title: "Titan Scaler: Enterprise Infrastructure",
    description:
      "Serverless infrastructure for a global e-commerce platform, enabling automatic scaling and cost reduction by 35% using Infrastructure as Code (Terraform) and AWS Lambda functions.",
    tags: [
      "Node.js",
      "AWS Lambda",
      "Terraform",
      "CloudWatch",
      "Infrastructure",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
    title: "Nebula: Real-time Analytics Dashboard",
    description:
      "A high-performance analytics dashboard designed for monitoring complex distributed systems, featuring live charts with D3.js and lightning-fast state updates.",
    tags: ["React", "D3.js", "Tailwind", "Firebase", "TypeScript"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
    title: "Zenith: AI-Powered Task Manager",
    description:
      "Intelligent productivity app that uses LLMs to prioritize tasks and generate automated schedules based on user behavior patterns.",
    tags: ["Next.js", "Gemini API", "Tailwind", "Prisma"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
    title: "Aura: E-Commerce Experience",
    description:
      "Modern headless architecture for high-end fashion brands, focusing on cinematic visuals and seamless checkout transitions.",
    tags: ["React", "Shopify", "Motion", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
    title: "Vortex: SaaS CRM Solution",
    description:
      "Multi-tenant CRM platform with real-time communication, automated lead scoring, and intensive data visualization tools.",
    tags: ["Node.js", "Express", "MongoDB", "Redux"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
  },
  {
  title: "TechWave: Cinematic Podcast Experience",
  description: "A high-impact, dark-themed landing page featuring vibrant gradients and modern glassmorphism effects. It showcases advanced CSS techniques for soundwave visualizations and sleek feature cards, built entirely without JavaScript to ensure maximum performance.",
  tags: ["HTML5", "Tailwind CSS", "Modern UI", "Dark Theme"],
  image: "your_image_path_for_techwave", // Use your uploaded image path here
  github: "#",
  demo: "#",
},
  {
    title: "Octane: Performance Benchmarking",
    description:
      "Developer utility for stress-testing web applications and generating detailed performance reports on asset delivery.",
    tags: ["C++", "WASM", "Rust", "TypeScript"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0EgyLPVRqBqltS41Qaj3xWeuk4-0hnn8htpg_LrpP4qxcX3XHqkKBzXmL2XmEvVg3Qc0NBIFASLYgaHDYqSIN8RpKQjqNflRGjkZsjvybseZo6piq1bW28ny9n2wnl9LmdceKeILLVQ-VswszRLXE_30SMBBXiNXICUd4Dg2hx7lZ_-QQnOotCosVfb9K2R2RkSJX7V4TpBFwHMEiWTVAnFShdYEDe731xWB7uiCGsn40MS1AdQ0Wlip4fDQ2qy5W7k3q5VI3v0",
    github: "#",
    demo: "#",
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
      className="py-24 px-6 md:px-24 max-w-7xl mx-auto text-center bg-zinc-50/30 dark:bg-zinc-950/20 transition-colors duration-300"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-portfolio text-zinc-900 dark:text-white">
        Projects
      </h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold mb-16">
        Recent Projects
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
              <div className="relative p-0.5 rounded-[2.5rem] overflow-hidden h-full group-hover:-translate-y-2.5 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-zinc-950/50">
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

                <div className="relative bg-white dark:bg-zinc-900 rounded-[2.4rem] overflow-hidden h-full flex flex-col z-10 transition-colors duration-500">
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
                        suppressHydrationWarning
                        className="flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-black dark:hover:bg-zinc-700 hover:text-white transition-all duration-300"
                      >
                        <Code size={14} /> Code
                      </a>
                      <a
                        href={project.demo}
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
