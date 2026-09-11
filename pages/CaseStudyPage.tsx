import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, Play } from 'lucide-react';
import {
  BOOKING_URL,
  getCaseStudy,
  getClient,
  getProject,
  getService,
} from '../constants';
import { Link } from '../lib/router';
import { Reveal, Eyebrow } from '../components/Reveal';

const YCLogo: React.FC<{ size?: number }> = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0 rounded-[3px]" aria-hidden>
    <rect width="64" height="64" fill="#FB651E" />
    <path d="M18 13 L32 35 L46 13 M32 35 L32 52" stroke="#fff" strokeWidth="6" fill="none" />
  </svg>
);

const VideoBlock: React.FC<{ youtubeId: string; title: string }> = ({ youtubeId, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="media relative aspect-video">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            aria-hidden
            onError={(e) => {
              if (!e.currentTarget.src.includes('hqdefault')) {
                e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-300">
              <Play size={20} className="text-ink fill-current ml-1" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

const CaseStudyPage: React.FC<{ slug: string }> = ({ slug }) => {
  const study = getCaseStudy(slug);
  const client = study ? getClient(study.clientSlug) : undefined;

  /* Unknown slugs never reach here — App routes them to NotFound — but the
     guard keeps the types honest. The head is set centrally in App. */
  if (!study || !client) return null;

  const projects = study.projectIds.map(getProject).filter(Boolean);
  const services = study.serviceSlugs.map(getService).filter(Boolean);

  return (
    <main className="bg-ground px-4 md:px-6 pt-28 md:pt-32 pb-12 md:pb-[72px]">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-12">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-8"
          >
            <ArrowRight size={15} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            All work
          </Link>

          <Eyebrow index={String(study.year)} label="Case study" />

          <h1 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-4 text-balance">
            {client.name}
          </h1>

          <p className="text-muted md:text-lg max-w-2xl">{study.summary}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {client.badge && (
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted bg-sunken rounded-full px-3 py-1.5">
                {client.badge === 'YC S25' && <YCLogo />}
                {client.badge}
              </span>
            )}
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-ink hover:text-muted transition-colors"
            >
              {client.handle}
              <ArrowUpRight size={14} className="text-hairline-strong group-hover:text-muted transition-colors" />
            </a>
          </div>
        </Reveal>

        {/* ── The work itself ── */}
        <Reveal delay={0.05} className="space-y-6 md:space-y-8">
          {projects.map((project) => (
            <figure key={project!.id} className="panel p-3">
              {project!.youtubeId && (
                <VideoBlock youtubeId={project!.youtubeId} title={project!.title || client.name} />
              )}
              <figcaption className="px-2.5 pt-4 pb-1.5">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-base xl:text-lg font-bold text-ink">{project!.title}</h2>
                  {project!.subcategory && (
                    <span className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted bg-sunken rounded-full px-2.5 py-1">
                      {project!.subcategory}
                    </span>
                  )}
                </div>
                {project!.description && (
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
                    {project!.description}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {/* ── Narrative, only where it exists ── */}
        {(study.problem || study.approach?.length) && (
          <Reveal className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {study.problem && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                  The problem
                </p>
                <p className="text-[15px] md:text-lg text-muted leading-relaxed">{study.problem}</p>
              </div>
            )}
            {study.approach?.length ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                  Approach
                </p>
                <ul className="space-y-3">
                  {study.approach.map((step) => (
                    <li key={step} className="flex gap-3 text-[15px] text-muted leading-relaxed">
                      <span aria-hidden className="text-hairline-strong mt-1 shrink-0">
                        &rarr;
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
        )}

        {study.results?.length ? (
          <Reveal className="mt-12 md:mt-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-5">
              Results
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.results.map((r) => (
                <div key={r.metric} className="panel p-6">
                  <p className="text-3xl font-display font-extrabold text-ink tabular-nums tracking-[-0.02em]">
                    {r.value}
                  </p>
                  <p className="text-sm text-muted mt-1.5">{r.metric}</p>
                  {r.source && <p className="text-[11px] text-faint mt-2">{r.source}</p>}
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}

        {study.testimonial && (
          <Reveal className="mt-12 md:mt-16 panel p-7 md:p-10 max-w-3xl">
            <blockquote className="text-lg md:text-xl text-ink leading-relaxed">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted">
              {study.testimonial.author} &middot; {study.testimonial.role}
            </figcaption>
          </Reveal>
        )}

        {/* ── Scope ── */}
        {(study.deliverables?.length || services.length > 0) && (
          <Reveal className="mt-12 md:mt-16 pt-10 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-10">
            {study.deliverables?.length ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                  Delivered
                </p>
                <ul className="space-y-2">
                  {study.deliverables.map((d) => (
                    <li key={d} className="text-sm text-muted">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {services.length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                  Services
                </p>
                <ul className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li
                      key={s!.slug}
                      className="text-[11px] text-muted bg-sunken rounded-full px-2.5 py-1"
                    >
                      {s!.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        )}

        {/* ── Close ── */}
        <Reveal className="mt-14 md:mt-20 pt-10 border-t border-hairline flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
          <p className="text-lg md:text-xl font-display font-bold text-ink tracking-[-0.015em] max-w-sm text-balance">
            Want something like this for your product?
          </p>
          <a
            href={BOOKING_URL || '/#contact'}
            {...(BOOKING_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="shrink-0 px-6 py-3.5 btn btn-primary"
          >
            <CalendarDays size={17} />
            Book a 15-min call
          </a>
        </Reveal>
      </div>
    </main>
  );
};

export default CaseStudyPage;
