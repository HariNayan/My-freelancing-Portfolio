import React from 'react';
import { FileText, Lightbulb, Scissors, Rocket } from 'lucide-react';
import { Reveal, Eyebrow } from './Reveal';

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

// Stacking cards: each step pins below the header while the next slides
// over it, creating a deck that builds as you scroll.
const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 xl:py-32 bg-neutral-900 border-y border-neutral-800 px-6">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center mb-12 md:mb-16">
          <Eyebrow index="03" label="How We Work" center />
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-display font-bold text-white mt-3 mb-4">Process</h2>
          <p className="text-gray-400 max-w-xl mx-auto">A streamlined workflow designed for speed and quality.</p>
        </Reveal>

        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="sticky mb-6 md:mb-10"
                style={{ top: `${96 + index * 28}px` }}
              >
                <div className="bg-neutral-850 border border-neutral-700/60 rounded-2xl p-8 md:p-14 shadow-2xl shadow-black/50 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 min-h-[40vh]">
                  <span className="font-display font-bold text-6xl md:text-8xl text-outline shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white shrink-0">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-display font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 md:text-lg leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
