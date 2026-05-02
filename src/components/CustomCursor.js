'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const handleClickBase = (e) => {
      const id = Date.now();
      const numLines = 8;
      const lines = Array.from({ length: numLines }).map((_, i) => ({
        id: `line-${id}-${i}`,
        type: 'line',
        x: e.clientX,
        y: e.clientY,
        angle: (i / numLines) * 360,
        distance: 40 + Math.random() * 20
      }));

      const coord = {
        id: `coord-${id}`,
        type: 'coord',
        x: e.clientX + 20,
        y: e.clientY - 20,
        label: `T-${Math.floor(e.clientX)}:${Math.floor(e.clientY)}`
      };

      const ring = {
        id: `ring-${id}`,
        type: 'ring',
        x: e.clientX,
        y: e.clientY
      };
      
      const newItems = [...lines, coord, ring];
      setClicks((prev) => [...prev, ...newItems]);
      
      setTimeout(() => {
        const itemIds = newItems.map(item => item.id);
        setClicks((prev) => prev.filter((p) => !itemIds.includes(p.id)));
      }, 1000);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleClickBase);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleClickBase);
    };
  }, [mounted, cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {[0, 1, 2].map((i) => (
        <CustomTrailDot key={i} x={cursorX} y={cursorY} index={i} />
      ))}

      {clicks.map((item) => (
        <motion.div
          key={item.id}
          initial={
            item.type === 'line' ? { opacity: 1, width: 0, height: 1, rotate: item.angle, left: item.x, top: item.y, x: 0, y: '-50%', transformOrigin: 'left center' } :
            item.type === 'coord' ? { opacity: 0, x: 10, left: item.x, top: item.y } :
            { opacity: 1, scale: 0, left: item.x, top: item.y, x: '-50%', y: '-50%' }
          }
          animate={
            item.type === 'line' ? { opacity: 0, width: item.distance, x: item.distance } :
            item.type === 'coord' ? { opacity: [0, 1, 0], x: 0 } :
            { opacity: 0, scale: 2 }
          }
          transition={{ duration: item.type === 'coord' ? 1 : 0.6, ease: "easeOut" }}
          className={`fixed pointer-events-none z-[9998] hidden md:block ${
            item.type === 'line' ? 'bg-blue-500 dark:bg-white shadow-[0_0_5px_rgba(59,130,246,0.5)]' :
            item.type === 'coord' ? 'text-[8px] font-mono font-bold text-blue-500 dark:text-gray-300' :
            'w-8 h-8 border border-blue-500/40 dark:border-white/40 rounded-full backdrop-blur-[1px]'
          }`}
        >
          {item.type === 'coord' && item.label}
        </motion.div>
      ))}

      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-primary/20 dark:border-white/20 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-blur-[0.5px]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-primary/60 dark:bg-white/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-primary/60 dark:bg-white/60" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-primary/60 dark:bg-white/60" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0.5 bg-primary/60 dark:bg-white/60" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary dark:bg-white pointer-events-none z-[9999] hidden md:block rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{ scale: isHovering ? 0.7 : 1 }}
      />

      {[0, 90, 180, 270].map((rotation) => (
        <motion.div
          key={rotation}
          className="fixed top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary dark:border-white pointer-events-none z-[9999] hidden md:block"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            x: '-50%',
            y: '-50%',
            rotate: rotation,
          }}
          animate={{
            top: isHovering ? (rotation < 180 ? -6 : 6) : 0,
            left: isHovering ? (rotation === 0 || rotation === 180 ? -6 : 6) : 0,
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5,
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
        />
      ))}
    </>
  );
}

function CustomTrailDot({ x, y, index }) {
  const config = {
    damping: 20 + index * 5,
    stiffness: 150 - index * 30,
  };
  const trailX = useSpring(x, config);
  const trailY = useSpring(y, config);

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 bg-primary/30 dark:bg-white/20 rounded-full pointer-events-none z-[9998] hidden md:block"
      style={{
        translateX: trailX,
        translateY: trailY,
        x: '-50%',
        y: '-50%',
      }}
    />
  );
}