import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { worksByKind } from '../constants';
import { Reveal, Eyebrow } from './Reveal';
import { Link } from '../lib/router';
import { verticalThumb, onThumbError } from '../lib/youtube';

/* The home section is a pointer; /work is the archive.

   It used to render all twelve pieces — the same set /work shows — which
   made it the tallest section on the page. It now carries the argument in
   words, two short-form tiles as evidence, and a link to the rest. Counts
   are derived, so adding work updates the line without anyone remembering
   to. */
const Portfolio: React.FC = () => {
  const clientVideos = worksByKind('client-video');
  const shorts = worksByKind('short');
  const designs = worksByKind('design');

  const groups = [
    { label: 'Product & demo', count: clientVideos.length },
    { label: 'Short-form', count: shorts.length },
    { label: 'Design', count: designs.length },
  ].filter((g) => g.count > 0);

  const total = groups.reduce((sum, g) => sum + g.count, 0);
  const featured = shorts.slice(0, 2);

  return (
    <section id="work" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-14 xl:gap-16 items-center">
          <Reveal className="max-w-xl">
            <Eyebrow index="01" label="Work" />
            <h2 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-5 text-balance">
              Selected work
            </h2>

            <div className="space-y-4 text-muted md:text-lg leading-relaxed">
              <p>
                Two product demos for a YC-backed startup, plus the short-form and design work the
                craft came out of &mdash; {total} pieces here.
              </p>
              <p>
                Most of it is vertical: edits for channels where someone decides in about three
                seconds whether to keep watching, and the numbers tell you immediately if you got
                it wrong. That is a blunt way to learn pacing, and it is the same instinct a
                product demo needs &mdash; reach the point before anyone leaves.
              </p>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
              {groups.map((group) => (
                <div key={group.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-1.5">
                    {group.label}
                  </dt>
                  <dd className="text-2xl font-display font-extrabold text-ink tabular-nums tracking-[-0.02em]">
                    {group.count}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              to="/work"
              className="group mt-9 px-6 py-3.5 btn btn-primary"
            >
              See all work
              <ChevronRight size={17} className="btn-chevron" strokeWidth={2.5} />
            </Link>
          </Reveal>

          {/* Two shorts as evidence for the paragraph beside them. They open
              on YouTube rather than embedding — no iframe cost on the home
              page, and the archive on /work behaves the same way.

              Staggered: two 9:16 stills sitting on one baseline leave a band
              of dead space under a tall text column. Dropping the second by
              a tenth of its height lets the pair span the column without
              stretching either one off its native aspect. */}
          <Reveal delay={0.08} className="w-full">
            <ul className="grid grid-cols-2 gap-4 md:gap-5 w-full">
              {featured.map((project, index) => (
                <li key={project.id} className={index === 1 ? 'lg:mt-14' : ''}>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group media relative aspect-[9/16] block"
                    aria-label={`Watch ${project.subcategory ?? 'short-form'} edit on YouTube`}
                  >
                    <img
                      src={verticalThumb(project.youtubeId!)}
                      onError={onThumbError(project.youtubeId!)}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                        <Play size={14} className="text-ink fill-current ml-0.5" />
                      </span>
                    </span>
                    {project.subcategory && (
                      <span className="absolute bottom-2 left-2 text-[9px] font-semibold text-ink bg-white/85 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        {project.subcategory}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
