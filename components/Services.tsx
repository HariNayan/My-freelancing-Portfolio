import React from 'react';
import { SERVICES } from '../constants';
import { Reveal, Stagger, Item, Eyebrow } from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14 max-w-2xl">
          <Eyebrow index="02" label="Services" />
          <h2 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-4 text-balance">
            What I make
          </h2>
          <p className="text-muted md:text-lg">
            Six things, named after what they&rsquo;re for. Most engagements start with one and grow
            into a couple.
          </p>
        </Reveal>

        <Stagger className="panel overflow-hidden">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Item key={service.slug}>
                <div
                  className={`group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 md:p-8 transition-colors duration-200 hover:bg-ground/60 ${
                    index > 0 ? 'border-t border-hairline' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 md:w-12 md:flex-col md:items-start md:gap-4 shrink-0">
                    <span className="font-mono text-[11px] text-faint tabular-nums">
                      0{index + 1}
                    </span>
                    <Icon size={17} strokeWidth={1.75} className="text-faint md:hidden" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-ink md:w-[32%] shrink-0 tracking-[-0.015em] text-balance">
                    {service.title}
                  </h3>

                  <div className="md:flex-1">
                    <p className="text-[15px] text-muted leading-relaxed">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-[11px] text-muted bg-sunken rounded-full px-2.5 py-1"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="hidden md:block shrink-0 text-hairline-strong group-hover:text-ink transition-colors duration-200 mt-1"
                  />
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Services;
