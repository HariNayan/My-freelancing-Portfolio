import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-display font-bold text-white text-center mb-16">Client Feedback</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-neutral-950 p-8 rounded-xl relative">
              <Quote className="text-neutral-800 absolute top-6 right-6" size={48} />
              <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role} {t.company && <span className="text-neutral-600">• {t.company}</span>}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;