import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initTextReveal = (selector) => {
  if (typeof window === 'undefined') return;
  
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    const text = new SplitType(el, { types: 'chars,words' });
    
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 50%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      stagger: 0.02,
      duration: 0.8,
      ease: 'power4.out',
    });
  });
};

export const initParallax = (selector, speed = 0.5) => {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * speed * 0.1,
      ease: 'none',
    });
  });
};
