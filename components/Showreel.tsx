import React from 'react';
import { PROJECTS } from '../constants';

const Showreel: React.FC = () => {
  const featuredProject = PROJECTS[0];
  const videoUrl = featuredProject?.videoUrl;
  const posterUrl = featuredProject?.thumbnail;

  return (
    <section className="py-24 bg-neutral-950 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Highlight Reel</h2>
          <p className="text-gray-400">A curated showcase of my best editing and design work.</p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <video 
              className="w-full h-full object-cover"
              controls
              poster={posterUrl}
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </section>
  );
};

export default Showreel;