import React from 'react';
import { Search, PenTool, Send } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Discover & Analysis',
      description: 'We discuss your vision, goals, and target audience to build a solid creative foundation.',
      icon: Search
    },
    {
      id: 2,
      title: 'Design & Implement',
      description: 'I bring the concepts to life through iterative editing, design, and refinement cycles.',
      icon: PenTool
    },
    {
      id: 3,
      title: 'Deliver & Monitor',
      description: 'Final files are delivered in high quality, ready for upload and audience engagement.',
      icon: Send
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 xl:py-32 bg-neutral-900 border-y border-neutral-800 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
          
          {/* Header Left — sticky only on md+ to avoid mobile overlap */}
          <div className="w-full md:w-1/3 xl:w-2/5 md:sticky md:top-24">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white mb-6">My Creative <br />Process</h2>
            <p className="text-gray-400 xl:text-lg mb-8">Structured creativity ensures consistent, high-quality results delivered on time, every time.</p>
            <a href="#contact" className="text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">Start a project</a>
          </div>

          {/* Steps Right */}
          <div className="w-full md:w-2/3 xl:w-3/5 grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex gap-5 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white shrink-0 z-10">
                      <Icon size={20} />
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-px h-full bg-neutral-800 my-2"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                     <p className="text-gray-400 xl:text-lg leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;