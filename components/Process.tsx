import React from 'react';
import { FileText, Lightbulb, Scissors, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Brief',
      description: 'Discussing project goals, target audience, and key messaging to align on the vision.',
      icon: FileText
    },
    {
      id: 2,
      number: '02',
      title: 'Concept',
      description: 'Creating creative direction and storyboard before production starts.',
      icon: Lightbulb
    },
    {
      id: 3,
      number: '03',
      title: 'Edit',
      description: 'Production process with updates and unlimited revision rounds.',
      icon: Scissors
    },
    {
      id: 4,
      number: '04',
      title: 'Deliver',
      description: 'Final optimized files delivered in all required formats.',
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 xl:py-32 bg-neutral-900 border-y border-neutral-800 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">How I Work</span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white mt-3 mb-4">Process</h2>
          <p className="text-gray-400 max-w-xl mx-auto">A streamlined workflow designed for speed and quality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {index > 0 && (
                  <div className="hidden lg:block absolute -left-4 top-12 w-8 h-px bg-neutral-700"></div>
                )}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white mb-5">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-bold text-gray-500 mb-1">{step.number}</span>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
