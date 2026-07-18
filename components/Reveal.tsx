import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion, useSpring, useScroll, useTransform } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

// Fade-up + blur-in when the element enters the viewport. Runs once.
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 28, className }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

// Container that staggers its <Item> children as they enter the viewport.
export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}> = ({ children, className, stagger = 0.08, delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
  >
    {children}
  </motion.div>
);

export const Item: React.FC<{ children: React.ReactNode; className?: string; y?: number }> = ({
  children,
  className,
  y = 28,
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.65, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Numbered editorial label above section titles, e.g. "01 / Work".
export const Eyebrow: React.FC<{ index: string; label: string; center?: boolean }> = ({
  index,
  label,
  center,
}) => (
  <span
    className={`inline-flex items-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] ${
      center ? 'justify-center' : ''
    }`}
  >
    <span className="text-neutral-600">{index}</span>
    <span className="w-8 h-px bg-neutral-700"></span>
    {label}
  </span>
);

// Number that counts up from 0 when it scrolls into view.
export const CountUp: React.FC<{ to: number; suffix?: string; className?: string }> = ({
  to,
  suffix = '',
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

// Scroll-scrubbed settle: scales from `from` down to 1 as the element
// travels from the bottom of the viewport to its center (Apple-style).
export const ScrubScale: React.FC<{ children: React.ReactNode; className?: string; from?: number }> = ({
  children,
  className,
  from = 1.06,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const scale = useTransform(scrollYProgress, [0, 1], [from, 1]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { scale }} className={className}>
      {children}
    </motion.div>
  );
};

// Element gently follows the cursor while hovered (magnetic buttons).
export const Magnetic: React.FC<{ children: React.ReactNode; className?: string; strength?: number }> = ({
  children,
  className,
  strength = 0.25,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16 });
  const y = useSpring(0, { stiffness: 220, damping: 16 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </motion.div>
  );
};
