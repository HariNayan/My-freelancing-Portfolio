import React from 'react';
import { SERVICES } from '../constants';
import { Reveal, Stagger, Item, Eyebrow } from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 xl:py-32 bg-neutral-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          <Eyebrow index="02" label="Services" />
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-display font-bold text-white mt-4 mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl">Tailored creative solutions designed to elevate your brand's visual presence across all platforms.</p>
        </Reveal>

        <Stagger className="border-t border-neutral-800">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Item key={service.id}>
                <div className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-7 md:py-9 px-3 md:px-5 -mx-3 md:-mx-5 border-b border-neutral-800 transition-colors duration-300 hover:bg-neutral-900/70 rounded-lg">
                  <span className="text-sm font-semibold text-neutral-600 md:w-12 shrink-0">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl xl:text-4xl font-display font-bold text-white md:w-2/5 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed md:flex-1">{service.description}</p>
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="hidden md:block shrink-0 text-neutral-600 group-hover:text-white transition-colors duration-300"
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
