"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Send, X, Monitor, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const XIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

export default function Contact() {
   const [mounted, setMounted] = useState(false);
  const [showMailtoModal, setShowMailtoModal] = useState(false);
 const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set mounted to true after the first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Guard to prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="contact" className="py-24 opacity-0">
        <div className="h-96" />
      </section>
    );
  }

  const emailAddress = "mdshakilislamsagor218@gmail.com";

  const handleMailAction = (type) => {
    if (type === 'gmail') {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, '_blank');
    } else {
      window.location.href = `mailto:${emailAddress}`;
    }
    setShowMailtoModal(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const target = e.target;
    const name = target.elements.namedItem('name').value;
    const email = target.elements.namedItem('email').value;
    const project = target.elements.namedItem('project').value;
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({ 
          _subject: `New Inquiry: ${name}`,
          _template: 'basic',
          _captcha: 'false',
          "Sender Name": name, 
          "Sender Email": email, 
          "Message Content": project,
          "_replyto": email
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        target.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${project}`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 max-w-7xl mx-auto text-center bg-zinc-50/10 dark:bg-zinc-950/20 relative transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal-contact text-zinc-900 dark:text-white">Get in Touch</h2>
      <p className="text-zinc-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold mb-16">Contact Me</p>
      
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start text-left">
        {/* Left Column */}
        <div className="space-y-8 w-full">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-gray-200">Talk to me</h3>
          
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onClick={() => setShowMailtoModal(true)}
            >
              <div className="relative p-[1.5px] rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
                <motion.div 
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #a855f7 180deg, transparent 210deg, transparent 360deg)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative bg-white dark:bg-zinc-900 p-6 rounded-[1.45rem] border border-zinc-100 dark:border-zinc-800 transition-all duration-500 flex flex-col items-center text-center gap-2 z-10">
                  <div className="text-zinc-900 dark:text-blue-400 mb-1">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div className="font-bold text-zinc-800 dark:text-gray-200 text-sm">Email</div>
                  <div className="text-xs text-zinc-500 dark:text-gray-400 mb-1 truncate max-w-full">{emailAddress}</div>
                  <button className="text-[11px] font-bold text-zinc-400 group-hover:text-[#a855f7] dark:group-hover:text-blue-400 flex items-center gap-1 transition-colors uppercase tracking-widest">
                    Write me <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/md-shakil-islam-sagor/', '_blank')}
            >
              <div className="relative p-[1.5px] rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
                <motion.div 
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #a855f7 180deg, transparent 210deg, transparent 360deg)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative bg-white dark:bg-zinc-900 p-6 rounded-[1.45rem] border border-zinc-100 dark:border-zinc-800 transition-all duration-500 flex flex-col items-center text-center gap-2 z-10">
                  <div className="text-zinc-900 dark:text-blue-400 mb-1">
                    <Linkedin size={24} strokeWidth={1.5} />
                  </div>
                  <div className="font-bold text-zinc-800 dark:text-gray-200 text-sm">LinkedIn</div>
                  <div className="text-xs text-zinc-500 dark:text-gray-400 mb-1">md-shakil-islam-sagor</div>
                  <button className="text-[11px] font-bold text-zinc-400 group-hover:text-[#a855f7] dark:group-hover:text-blue-400 flex items-center gap-1 transition-colors uppercase tracking-widest" suppressHydrationWarning>
                    Visit profile <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => window.open('https://x.com/md_islam94991', '_blank')}
            >
              <div className="relative p-[1.5px] rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
                <motion.div 
                  className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 150deg, #a855f7 180deg, transparent 210deg, transparent 360deg)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative bg-white dark:bg-zinc-900 p-6 rounded-[1.45rem] border border-zinc-100 dark:border-zinc-800 transition-all duration-500 flex flex-col items-center text-center gap-2 z-10">
                  <div className="text-zinc-900 dark:text-blue-400 mb-1">
                    <XIcon size={24} />
                  </div>
                  <div className="font-bold text-zinc-800 dark:text-gray-200 text-sm">Twitter</div>
                  <div className="text-xs text-zinc-500 dark:text-gray-400 mb-1">@md_islam94991</div>
                  <button className="text-[11px] font-bold text-zinc-400 group-hover:text-[#a855f7] dark:group-hover:text-blue-400 flex items-center gap-1 transition-colors uppercase tracking-widest" suppressHydrationWarning>
                    Visit profile <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-gray-200">Write me your project</h3>
          <form 
            className="space-y-6" 
            onSubmit={handleSubmit}
          >
            <div className="space-y-8">
              <div className="relative">
                <label className="absolute -top-3 left-6 bg-white dark:bg-zinc-900 px-2 text-[10px] font-bold text-zinc-400 dark:text-gray-500 uppercase tracking-widest z-10 transition-colors">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Insert your name" 
                  suppressHydrationWarning
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#a855f7]/20 focus:border-[#a855f7] dark:focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 shadow-sm"
                />
              </div>
              
              <div className="relative">
                <label className="absolute -top-3 left-6 bg-white dark:bg-zinc-900 px-2 text-[10px] font-bold text-zinc-400 dark:text-gray-500 uppercase tracking-widest z-10 transition-colors">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Insert your email" 
                  suppressHydrationWarning
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#a855f7]/20 focus:border-[#a855f7] dark:focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 shadow-sm"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-6 bg-white dark:bg-zinc-900 px-2 text-[10px] font-bold text-zinc-400 dark:text-gray-500 uppercase tracking-widest z-10 transition-colors">Project</label>
                <textarea 
                  name="project"
                  required
                  placeholder="Write your project details" 
                  rows={4} 
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl px-6 py-5 focus:ring-2 focus:ring-[#a855f7]/20 focus:border-[#a855f7] dark:focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 resize-none shadow-sm"
                ></textarea>
              </div>
            </div>

            <motion.button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
              className={`relative overflow-hidden w-full lg:w-fit px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl group ${
                isSuccess ? 'bg-emerald-500 text-white' : 'bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] dark:bg-[linear-gradient(135deg,#1e293b,#0f172a,#020617)] text-white shadow-[#1e293b]/20 hover:shadow-[#1e293b]/40'
              }`}
              suppressHydrationWarning
            >
              {!isSuccess && !isSubmitting && (
                <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>
              )}

              <span className="relative z-10 text-xs uppercase tracking-widest">
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSuccess ? (
                  <div className="flex items-center gap-2">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Message Sent!</motion.span>
                    <CheckCircle2 size={18} />
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </span>

              {!isSubmitting && !isSuccess && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative z-10"
                >
                  <Send size={18} className="group-hover:rotate-12 transition-transform" />
                </motion.div>
              )}
            </motion.button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showMailtoModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMailtoModal(false)}
              className="absolute inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm px-1"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-90 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden p-8 text-center"
            >
              <button 
                onClick={() => setShowMailtoModal(false)} 
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="bg-[#a855f7]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#a855f7] dark:text-purple-400">
                <Mail size={32} />
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">How would you like to contact?</h3>
              <p className="text-zinc-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">Choose your preferred method to start a conversation.</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleMailAction('gmail')}
                  className="w-full py-4 bg-[#1e293b] dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black dark:hover:bg-zinc-100 transition-all shadow-md"
                >
                  <Globe size={20} />
                  Open in Gmail Web
                </button>
                <button 
                  onClick={() => handleMailAction('default')}
                  className="w-full py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
                >
                  <Mail size={20} />
                  Open in Default App
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
