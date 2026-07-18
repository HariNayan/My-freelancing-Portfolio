import React from 'react';

const ITEMS = ['Video Editing', 'Motion Graphics', 'Thumbnail Design', 'Brand Identity', 'Short-Form'];

// Infinite band of outlined display type between sections.
const Marquee: React.FC = () => (
  <section className="py-10 md:py-14 bg-neutral-950 border-y border-neutral-900 overflow-hidden" aria-hidden>
    <div className="flex w-max animate-scroll" style={{ animationDuration: '32s' }}>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className="text-outline whitespace-nowrap font-display font-bold uppercase tracking-tight text-5xl md:text-7xl px-5 md:px-8"
        >
          {item}
          <span className="text-neutral-800 pl-10 md:pl-16">✦</span>
        </span>
      ))}
    </div>
  </section>
);

export default Marquee;
