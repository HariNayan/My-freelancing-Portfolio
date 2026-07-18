import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Magnetic } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const line1 = ['Visual', 'Storytelling', 'for'];
const line2 = ['Creators', '&', 'Brands'];

// Real work shown behind the hero: design thumbnails + shorts covers
const WORK_THUMBS = [
  '/back-to-fitness.webp',
  '/fly-by-wire.webp',
  '/tmu-thumbnail.webp',
  '/vdgs-thumbnail.webp',
  ...['wi10YaoVX78', 'Om72QAs5ybA', '8_BwNlhxXDQ', 'YPWHUoTok3I', '69x4OXNw3I8', 'V5absz3mjis'].map(
    (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  ),
];

// 4 distinct-ish images per column, offset so columns differ.
const collageColumn = (offset: number) =>
  Array.from({ length: 4 }, (_, i) => WORK_THUMBS[(offset * 3 + i * 2) % WORK_THUMBS.length]);

const CollageColumn: React.FC<{ imgs: string[]; reverse?: boolean; className?: string }> = ({
  imgs,
  reverse,
  className,
}) => (
  <div className={`flex-1 overflow-hidden ${className ?? ''}`}>
    {/* base rendered exactly twice → seamless -50% loop, minimal nodes */}
    <div className={`flex flex-col gap-4 ${reverse ? 'animate-collage-rev' : 'animate-collage'}`}>
      {[...imgs, ...imgs].map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden
          className="w-full aspect-[3/4] object-cover rounded-xl grayscale"
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  </div>
);

const wordVariants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

const Word: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.span variants={wordVariants} className={`inline-block ${className ?? ''}`}>
    {children}
  </motion.span>
);

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 130]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 600], [1, reduce ? 1 : 0.92]);
  const sectionRef = useRef<HTMLElement>(null);

  // Pause the drifting collage while the hero is off-screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => document.documentElement.classList.toggle('collage-paused', !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background: drifting collage of real work + glows + grain + vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-collage absolute -inset-x-10 -inset-y-24 flex gap-4 opacity-25 -rotate-3 scale-110">
          <CollageColumn imgs={collageColumn(0)} />
          <CollageColumn imgs={collageColumn(1)} reverse />
          <CollageColumn imgs={collageColumn(2)} reverse className="hidden md:block" />
          <CollageColumn imgs={collageColumn(3)} className="hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-neutral-950/55"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="absolute inset-0 grain-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80"></div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 text-center px-6 max-w-4xl xl:max-w-6xl mx-auto mt-20 md:mt-16"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
        >
          <motion.div
            variants={wordVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Available for new projects</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
            <span className="flex flex-wrap justify-center gap-x-[0.3em]">
              {line1.map((w) => (
                <Word key={w}>{w}</Word>
              ))}
            </span>
            <span className="flex flex-wrap justify-center gap-x-[0.3em] text-gray-400">
              {line2.map((w) => (
                <Word key={w}>{w}</Word>
              ))}
            </span>
          </h1>

          <motion.p
            variants={wordVariants}
            className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            A creative studio producing short-form video, motion graphics, and brand identity for creators and YC-backed startups.
          </motion.p>

          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#portfolio"
                className="group w-full sm:w-auto px-8 py-4 xl:py-5 xl:px-10 xl:text-lg bg-white text-neutral-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/10"
              >
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#contact"
                className="block w-full sm:w-auto px-8 py-4 xl:py-5 xl:px-10 xl:text-lg bg-transparent border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-800 hover:border-neutral-500 transition-colors duration-300 backdrop-blur-sm text-center"
              >
                Start a Project
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-px h-10 bg-neutral-800 overflow-hidden">
          {!reduce && (
            <motion.div
              className="w-px h-4 bg-white/70"
              animate={{ y: [-16, 40] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeIn' }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
