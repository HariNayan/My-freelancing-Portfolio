import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 xl:py-32 bg-neutral-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-display font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tailored creative solutions designed to elevate your brand's visual presence across all platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all duration-300 group hover:shadow-lg hover:shadow-white/5"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-neutral-950 text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;