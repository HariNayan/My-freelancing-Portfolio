import React from 'react';
import { ArrowUpRight, ArrowRight, Play } from 'lucide-react';
import { caseStudyForClient, getClient, worksByKind } from '../constants';
import { Link } from '../lib/router';
import { Reveal, Stagger, Item, Eyebrow } from '../components/Reveal';
import { verticalThumb, fallbackThumb, onThumbError } from '../lib/youtube';

const Work: React.FC = () => {
  /* Every client video, not one card per case study.

     This page used to render CASE_STUDIES and take `projectIds[0]` as the
     thumbnail, which meant the second Slashy demo existed only inside the
     case study page and never appeared in the archive at all — on a page
     headed "Everything, in one place". Listing the work itself and hanging
     the case-study link off it keeps the archive complete. */
  const clientVideos = worksByKind('client-video');
  const shorts = worksByKind('short');
  const designs = worksByKind('design');

  return (
    <main className="bg-ground px-4 md:px-6 pt-28 md:pt-32 pb-12 md:pb-[72px]">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14 max-w-2xl">
          <Eyebrow index="01" label="Work" />
          <h1 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-4 text-balance">
            Everything, in one place
          </h1>
          <p className="text-muted md:text-lg">
            Client engagements first, then the short-form and design the craft came out of.
          </p>
        </Reveal>

        {/* ── Product & demo work ── */}
        <Reveal className="flex items-baseline gap-3 mb-6">
          <h2 className="text-base md:text-lg font-display font-bold text-ink shrink-0 tracking-[-0.01em]">
            Product &amp; demo work
          </h2>
          <span className="font-mono text-[11px] text-faint tabular-nums shrink-0">
            {clientVideos.length}
          </span>
          <span className="h-px flex-1 bg-hairline"></span>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-18">
          {clientVideos.map((project) => {
            const client = project.clientSlug ? getClient(project.clientSlug) : undefined;
            const study = project.clientSlug ? caseStudyForClient(project.clientSlug) : undefined;

            const card = (
              <>
                <div className="media aspect-video relative">
                  {project.youtubeId && (
                    /* Landscape card: the 4:3 still is the right shape here. */
                    <img
                      src={fallbackThumb(project.youtubeId)}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white/90 shadow-md flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                      <Play size={18} className="text-ink fill-current ml-0.5" />
                    </span>
                  </span>
                </div>

                <div className="px-2.5 pt-4 pb-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base xl:text-lg font-bold text-ink leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-faint mt-1">
                        {client?.name}
                        {client?.badge ? ` · ${client.badge}` : ''}
                      </p>
                    </div>
                    {study && (
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-hairline-strong group-hover:text-ink transition-colors mt-1"
                      />
                    )}
                  </div>
                  {project.description && (
                    <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>
                  )}
                  {study && (
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      Read the case study
                    </p>
                  )}
                </div>
              </>
            );

            const shell =
              'group panel h-full p-3 flex flex-col transition-shadow hover:shadow-[0_2px_10px_-4px_rgba(36,36,36,0.4),0_8px_20px_0_rgba(36,36,36,0.06)]';

            return (
              <Item key={project.id} className="h-full">
                {study ? (
                  <Link to={`/work/${study.slug}`} className={shell}>
                    {card}
                  </Link>
                ) : (
                  <article className={shell}>{card}</article>
                )}
              </Item>
            );
          })}
        </Stagger>

        {/* ── Short-form ── */}
        <Reveal className="flex items-baseline gap-3 mb-6">
          <h2 className="text-base md:text-lg font-display font-bold text-ink shrink-0 tracking-[-0.01em]">
            Short-form
          </h2>
          <span className="font-mono text-[11px] text-faint tabular-nums shrink-0">
            {shorts.length}
          </span>
          <span className="h-px flex-1 bg-hairline"></span>
        </Reveal>
        <Stagger className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-14 md:mb-18">
          {shorts.map((project) => (
            <Item key={project.id}>
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group media relative aspect-[9/16] block"
              >
                <img
                  src={verticalThumb(project.youtubeId!)}
                  onError={onThumbError(project.youtubeId!)}
                  alt={project.subcategory || 'Short-form video'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-2 left-2 text-[9px] font-semibold text-ink bg-white/85 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  {project.subcategory}
                </span>
              </a>
            </Item>
          ))}
        </Stagger>

        {/* ── Design ── */}
        <Reveal className="flex items-baseline gap-3 mb-6">
          <h2 className="text-base md:text-lg font-display font-bold text-ink shrink-0 tracking-[-0.01em]">
            Design
          </h2>
          <span className="font-mono text-[11px] text-faint tabular-nums shrink-0">
            {designs.length}
          </span>
          <span className="h-px flex-1 bg-hairline"></span>
        </Reveal>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {designs.map((project) => (
            <Item key={project.id}>
              <figure>
                <div className="media aspect-[9/16] relative">
                  <img
                    src={project.thumbnail}
                    alt={project.description || project.title || 'Design work'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 px-0.5">
                  <p className="text-sm font-semibold text-ink truncate">{project.title}</p>
                  <p className="text-[11px] text-faint mt-0.5">{project.subcategory}</p>
                </figcaption>
              </figure>
            </Item>
          ))}
        </Stagger>

        <Reveal className="mt-14 md:mt-18 pt-10 border-t border-hairline">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-muted transition-colors"
          >
            <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>
        </Reveal>
      </div>
    </main>
  );
};

export default Work;
