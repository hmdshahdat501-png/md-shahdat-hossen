"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Robert Martinez",
    role: "Product Manager",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEMCMXDLSv5u22AgC5zPeJFsEmwKZ3uDVLuPxWL_Z3wdRJ1Ou0sCI5Wy47KMoPkLbbG3CRreq2C4nXOhDzgQEpITes4viOoQbMAmBtey98jPEpuLF2Ix0T3Fq3Cj7VDYKrOtkT0-P-6zRMpzhz_pHdzAaobySIx2NcmEnJS2EYQdlB3KNTOB61ProwkqmHXqqR5U3p6VChrO87Xr6b-0I7NqF2rdNphUzMgiVmNIBNE6KnzHoG64u5ZpIxdhLuBoJVS5lGkbYf8T0",
    text: "Shakil's attention to detail was impressive. He met all deadlines and delivered a polished product that exceeded my expectations."
  },
  {
    name: "Maria Hernandez",
    role: "UX Designer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMj4PXRtN2FPeGIDdmmjxmTW3YQYs1M5x0DM1JQP7-xKhOtViT4I95rrvoTETEqUcZILcn7fGFISc9m-fzqVRywkE9i2Zbt0KUsD_Kg_AUcXY_DcLNNfAEUBFDq4ypvyMD2GC3oHGz5S8ragX8DRz9j4vryXFSV_SDU7auG9pDVI807AwOn6Ny_d0Ah5KY5XJanv_v3OzPzWR0Zo5ld7E6h5UGeIo0cpXD2Y1THnSoMNhBdyK2xDeEbWCXdg-cmNSh4x0LnstzL40",
    text: "Shakil's collaborative approach made the process easy and efficient. The final design was thoughtful and user-friendly."
  },
  {
    name: "James Wilson",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    text: "Exceptional technical skills combined with a great eye for design. The performance optimizations Shakil implemented were game-changing."
  },
  {
    name: " Sarah Chen",
    role: "Freelance Creative",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    text: "Working with Shakil was a breeze. He translated our complex requirements into a beautiful, functional interface seamlessly."
  },
  {
    name: "Alex Thompson",
    role: "Founder, GreenLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    text: "Proactive communication and stellar execution. Shakil doesn't just write code; he builds solutions that scale with your business."
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    text: "The web development course from Programming Hero clearly shows in Shakil's mastery. A top-tier developer for any serious project."
  }
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4 text-zinc-900 dark:text-white"
        >
          What My Clients Say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold"
        >
          Testimonials
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 flex-nowrap"
            animate={{ 
              x: isPaused ? undefined : ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className="shrink-0 w-100 relative group p-0.5 rounded-[2.5rem] overflow-hidden transition-all duration-500"
              >
                <motion.div 
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #a855f7 180deg, transparent 210deg, transparent 360deg)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative bg-white dark:bg-zinc-900 p-10 rounded-[2.45rem] overflow-hidden h-full flex flex-col z-10 transition-all duration-500 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-zinc-50 dark:ring-zinc-800 group-hover:ring-zinc-100 dark:group-hover:ring-zinc-700 transition-all relative">
                      <Image 
                        src={t.image} 
                        alt={t.name} 
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-lg">{t.name}</h4>
                      <p className="text-secondary dark:text-gray-400 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote size={60} className="absolute -top-8 -left-4 text-zinc-100 dark:text-zinc-800 -z-10 group-hover:text-blue-50 dark:group-hover:text-blue-900/20 transition-colors opacity-50" />
                    <p className="text-zinc-600 dark:text-gray-200 text-base leading-relaxed font-medium relative italic">
                      &quot;{t.text}&quot;
                    </p>
                  </div>

                  <div className="mt-8 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
