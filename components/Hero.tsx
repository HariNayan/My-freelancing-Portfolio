import React, { useEffect, useRef } from 'react';
import { ChevronRight, CalendarDays } from 'lucide-react';
import { BOOKING_URL } from '../constants';

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

const line1 = ['Video', 'that', 'earns'];
const line2 = ['the', 'next', 'three', 'seconds'];

const word = (i: number) => ({ '--word-index': i } as CSSVars);

const Hero: React.FC = () => {
  const filmRef = useRef<HTMLVideoElement>(null);

  /* Paused rather than branched on in render: deciding markup from
     matchMedia would differ between the prerendered HTML and the client,
     which is a hydration mismatch. The poster frame stays visible. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      filmRef.current?.pause();
    }
  }, []);

  return (
    <section className="relative w-full bg-ground px-4 md:px-6 pt-28 md:pt-32 pb-14 md:pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          {/* ── Copy ── */}
          <div>
            <div
              className="hero-word inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-hairline mb-7"
              style={word(0)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-[11px] font-medium text-muted tracking-wide">
                Taking new projects
              </span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-[2.6rem] leading-[1.06] tracking-[-0.03em] md:text-[3.5rem] xl:text-[4rem] mb-6">
              {/* The trailing {' '} is load-bearing. Each word is its own flex
                  item so it can animate independently, and gap-x supplies the
                  visual spacing — but that leaves no actual whitespace in the
                  markup, so the heading's text content read out as one word:
                  "Videothatearnsthenextthreeseconds". Whitespace-only text
                  nodes aren't rendered as flex items, so this costs nothing
                  visually and fixes copy-paste, screen readers and crawlers. */}
              <span className="flex flex-wrap gap-x-[0.26em]">
                {line1.map((w, i) => (
                  <React.Fragment key={w}>
                    <span className="hero-word inline-block" style={word(i + 1)}>
                      {w}
                    </span>{' '}
                  </React.Fragment>
                ))}
              </span>
              <span className="flex flex-wrap gap-x-[0.26em] text-faint">
                {line2.map((w, i) => (
                  <React.Fragment key={w}>
                    <span className="hero-word inline-block" style={word(i + 4)}>
                      {w}
                    </span>{' '}
                  </React.Fragment>
                ))}
              </span>
            </h1>

            <p
              className="hero-word text-[15px] md:text-lg text-muted max-w-lg mb-8 leading-relaxed"
              style={word(8)}
            >
              Product demos, launch films and ad creative for startups and brands &mdash; built on
              retention craft proven on channels with audiences over 200,000.
            </p>

            <div className="hero-word flex flex-col sm:flex-row gap-3" style={word(9)}>
              <a
                href={BOOKING_URL || '#contact'}
                {...(BOOKING_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="px-6 py-3.5 btn btn-primary"
              >
                <CalendarDays size={17} />
                Book a 15-min call
              </a>
              <a
                href="#work"
                className="group px-6 py-3.5 btn btn-secondary"
              >
                See the work
                <ChevronRight size={17} className="btn-chevron" strokeWidth={2.5} />
              </a>
            </div>

            <p className="hero-word mt-5 text-xs text-faint" style={word(10)}>
              Usually replies within 24 hours
            </p>
          </div>

          {/* ── Process film ──
              The artifact beside the copy is the process itself, cycling
              Brief → Concept → Edit → Deliver. No panel, no border, no
              radius: it renders on the exact page ground (#F4F4F4), so any
              frame around it would show as a seam.

              No `hero-word` entrance class here on purpose. The film already
              opens by fading itself up from an empty frame, so wrapping it in
              the page's own fade-and-rise stacked two entrances on top of
              each other and delayed the first step. It is simply present. */}
          <div>
            <video
              ref={filmRef}
              className="w-full aspect-square max-w-[560px] mx-auto"
              src="/nayan-process.mp4"
              poster="/nayan-process-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              // Decorative: every step it animates is stated in full in the
              // Process section further down the page.
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
