"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initTextReveal } from "../lib/animations";
import {
  Linkedin,
  Github,
  Send,
  Mouse,
  BadgeCheck,
  Briefcase,
  CircleCheck,
} from "lucide-react";
import Image from "next/image";
import image_1 from "../assets/professional-image.png";
import image_2 from "../assets/professional-image-2.png";

const roles = [
  "Web Developer",
  "Problem Solver",
  "Web Designer",
  "Full Stack Developer",
];

const XIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const profileImages = [image_1, image_2];

  useEffect(() => {
    setMounted(true);
    initTextReveal(".reveal-about");

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const imgInterval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % profileImages.length);
    }, 5000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(imgInterval);
    };
  }, [profileImages.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    return (
      <section
        id="home"
        className="pt-32 pb-20 px-6 md:px-24 max-w-7xl mx-auto opacity-0"
      ></section>
    );
  }

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        {/* Left Social Icons */}
        <div className="hidden md:flex flex-col gap-6 absolute left-12 top-1/2 -translate-y-1/2">
          {[
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/md-shakil-islam-sagor/",
            },
            { Icon: XIcon, href: "https://x.com/md_islam94991" },
            { Icon: Github, href: "https://github.com/shakil218" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.2, x: 5 }}
              className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>

        <div className="flex-1 space-y-6 md:pl-16">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-secondary dark:text-gray-400 uppercase tracking-[0.2em]"
            >
              Hey, I&apos;m
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-white leading-tight reveal-text">
              Shakil Islam<span className="inline-block animate-wave">👋</span>
            </h1>

            <div className="text-2xl font-bold text-secondary dark:text-gray-300 flex items-center gap-2">
              <span className="reveal-text whitespace-nowrap min-w-fit">
                I am a
              </span>
              <div className="relative h-[1.5em] w-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-primary dark:text-white whitespace-nowrap flex items-center"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-1 reveal-about text-secondary dark:text-gray-400 text-base leading-relaxed max-w-sm font-medium"
            >
              <p>🚀 Turning ideas into Stunning Websites💻</p>
              <p>| Available for projects and collaborations☀️</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="relative bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] dark:bg-[linear-gradient(135deg,#1e293b,#0f172a,#020617)] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>
            <span className="relative z-10">Say Hello</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative z-10"
            >
              <Send
                size={20}
                fill="currentColor"
                fillOpacity={0.2}
                strokeWidth={2.5}
              />
            </motion.div>
          </motion.button>

          <button
            onClick={scrollToAbout}
            className="pt-20 flex items-center gap-4 text-secondary dark:text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-primary dark:hover:text-white transition-colors group"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Mouse size={16} />
            </motion.div>
            Scroll Down
            <span className="w-12 h-px bg-zinc-200 dark:bg-zinc-700 group-hover:w-20 group-hover:bg-primary dark:group-hover:bg-white transition-all"></span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-80 h-80 md:w-90 md:h-90 lg:w-112.5 lg:h-112.5 group">
            {/* FIXED: removed negative margin */}
            <motion.div
              animate={{
                rotate: 360,
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-primary/10 dark:bg-white/5 scale-110 backdrop-blur-xl"
            />

            <motion.div
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "58% 42% 75% 25% / 76% 46% 54% 24%",
                  "50% 50% 33% 67% / 55% 27% 73% 45%",
                  "33% 67% 58% 42% / 63% 68% 32% 37%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full overflow-hidden shadow-2xl border-2 md:border-4 border-white/60 dark:border-zinc-800 backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={profileImages[imgIndex]}
                    alt="Shakil Islam"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* FIXED: adjusted positions slightly */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-0 md:-right-4 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 backdrop-blur-sm z-20"
            >
              <BadgeCheck size={20} className="text-blue-500" />
              <div>
                <div className="text-lg md:text-xl font-black">120</div>
                <div className="text-[9px] uppercase font-bold tracking-wider">
                  Problem
                  <br />
                  Solving
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/4 -left-4 md:-left-6 lg:-left-10 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 backdrop-blur-sm z-20"
            >
              <Briefcase size={20} className="text-orange-500" />
              <div>
                <div className="text-lg md:text-xl font-black">3</div>
                <div className="text-[9px] uppercase font-bold tracking-wider">
                  Years
                  <br />
                  Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-8 right-0 md:-right-2 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 backdrop-blur-sm z-20"
            >
              <CircleCheck size={20} className="text-green-500" />
              <div>
                <div className="text-lg md:text-xl font-black">150</div>
                <div className="text-[9px] uppercase font-bold tracking-wider">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
