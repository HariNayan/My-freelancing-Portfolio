import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/45/1920/1080" 
          alt="Background Texture" 
          className="w-full h-full object-cover object-[center_30%] opacity-20 grayscale"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl xl:max-w-6xl mx-auto mt-20 md:mt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Available for new projects</span>
        </div>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Visual Storytelling for <br />
          <span className="text-gray-400">Creators & Brands</span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Professional video editing and graphic design that transforms raw ideas into premium, high-impact visuals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="group w-full sm:w-auto px-8 py-4 xl:py-5 xl:px-10 xl:text-lg bg-white text-neutral-950 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 xl:py-5 xl:px-10 xl:text-lg bg-transparent border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-300 backdrop-blur-sm text-center"
          >
            Work With Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;