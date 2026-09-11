import React, { useState } from 'react';
import { Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { creatorClients, combinedCreatorReach } from '../constants';
import { Reveal, Stagger, Item, Eyebrow } from './Reveal';

const compact = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : String(n);

const full = (n: number): string => n.toLocaleString('en-US');

const initials = (name: string): string =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

/* Falls back to initials when there's no avatar path *or* the file 404s, so
   a client can be listed before their image has been added without leaving
   a broken image on the page. */
const Avatar: React.FC<{ src?: string; name: string }> = ({ src, name }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span
        aria-hidden
        className="w-11 h-11 rounded-full bg-hairline flex items-center justify-center text-[13px] font-semibold text-muted"
      >
        {initials(name)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      onError={() => setFailed(true)}
      className="w-11 h-11 rounded-full object-cover"
      loading="lazy"
      decoding="async"
    />
  );
};

/* The creator work is not a second audience pitch — it is the evidence
   that the retention craft behind the startup offer is real. */
const RetentionBridge: React.FC = () => {
  const creators = creatorClients();
  const reach = combinedCreatorReach();

  /* The headline figure only sums the channels that have a published count,
     so the caption has to say so when one doesn't — otherwise the number
     silently under-reports what the sentence claims. */
  const counted = creators.filter((c) => c.audience).length;
  const reachCaption =
    counted === creators.length
      ? 'Combined following across the client channels listed here'
      : `Combined following across ${counted} of the ${creators.length} channels listed here`;

  return (
    <section id="retention" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Eyebrow index="03" label="Retention" />
              <h2 className="text-3xl md:text-[2.5rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-6 text-balance">
                Why the creator work matters
              </h2>
              <div className="space-y-4 text-[15px] md:text-lg text-muted leading-relaxed">
                <p>
                  The problem with most product demos and most paid-social ads is not that they look
                  cheap. It&rsquo;s that nobody watches past three seconds.
                </p>
                <p>
                  That is the same problem a creator has &mdash; except a creator finds out
                  immediately, because the audience leaves the moment the edit slips. I&rsquo;ve
                  spent four years editing for channels where that feedback arrives within the hour.
                </p>
                <p className="text-ink">
                  Startups get the craft that came out of it, pointed at a different job.
                </p>
              </div>

              <div className="mt-9 pt-7 border-t border-hairline">
                <p className="text-4xl md:text-5xl font-display font-extrabold text-ink tabular-nums tracking-[-0.03em]">
                  {full(reach)}
                </p>
                <p className="text-sm text-muted mt-2">{reachCaption}</p>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {creators.map((client) => (
                <Item key={client.slug} className="h-full">
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-sunken/70 hover:bg-sunken p-4 rounded-[12px] border border-transparent hover:border-hairline transition-colors h-full"
                  >
                    <div className="relative shrink-0">
                      <Avatar src={client.avatar} name={client.name} />
                      <span className="absolute -bottom-0.5 -right-0.5 bg-surface rounded-full p-1 border border-hairline">
                        {client.platform === 'YouTube' ? (
                          <Youtube size={10} className="text-red-500 fill-current" />
                        ) : (
                          <Instagram size={10} className="text-pink-500" />
                        )}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">{client.name}</p>
                      <p className="text-xs text-faint truncate">{client.handle}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold text-ink tabular-nums">
                        {client.audience ? compact(client.audience) : '—'}
                      </p>
                      <ArrowUpRight
                        size={13}
                        className="inline-block mt-0.5 text-hairline-strong group-hover:text-muted transition-colors"
                      />
                    </div>
                  </a>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetentionBridge;
