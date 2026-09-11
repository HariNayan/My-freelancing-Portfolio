import React from 'react';
import { businessClients } from '../constants';
import { Reveal } from './Reveal';

const YCLogo: React.FC<{ size?: number }> = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0 rounded-[3px]" aria-hidden>
    <rect width="64" height="64" fill="#FB651E" />
    <path d="M18 13 L32 35 L46 13 M32 35 L32 52" stroke="#fff" strokeWidth="6" fill="none" />
  </svg>
);

/* The trust bar: one quiet line, then greyscale marks that come up
   to full colour on hover. */
const ProofBar: React.FC = () => {
  const clients = businessClients();

  return (
    <section className="bg-ground px-4 md:px-6 pb-14 md:pb-20">
      <Reveal className="container mx-auto max-w-6xl">
        <p className="text-center text-[13px] text-muted mb-8">
          Trusted by startups and brands building in public
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-8">
          {clients.map((client) => (
            <li key={client.slug}>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                {client.logo && (
                  <img
                    src={client.logo}
                    alt=""
                    aria-hidden
                    className="logo-mark h-7 w-7 md:h-8 md:w-8 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold text-muted group-hover:text-ink transition-colors">
                    {client.name}
                  </span>
                  {client.badge && (
                    <span className="mt-0.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">
                      {client.badge === 'YC S25' && <YCLogo />}
                      {client.badge}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default ProofBar;
