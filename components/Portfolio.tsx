import React, { useState, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Play } from 'lucide-react';

// YouTube Facade: shows thumbnail, loads iframe only on click (massive performance win)
const VideoPreview = ({ project }: { project: Project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;

  if (isLoaded) {
    return (
      <div className="relative w-full h-full bg-neutral-900">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${project.youtubeId}&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
          title={project.title || 'Video Preview'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full bg-neutral-900 cursor-pointer group/vid"
      onClick={() => setIsLoaded(true)}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={project.subcategory || 'Video thumbnail'}
        className="w-full h-full object-cover brightness-75 group-hover/vid:brightness-90 transition-all duration-300"
        loading="lazy"
        decoding="async"
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover/vid:scale-110 group-hover/vid:bg-white/30 transition-all duration-300">
          <Play size={22} className="text-white fill-white ml-1" />
        </div>
      </div>

      {/* Category badge */}
      {project.subcategory && (
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[10px] font-semibold text-gray-300 bg-neutral-950/70 border border-neutral-700 px-2 py-0.5 rounded-full uppercase tracking-wide backdrop-blur-sm">
            {project.subcategory}
          </span>
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const videoProjects = PROJECTS.filter(p =>
    p.category === ProjectCategory.VIDEO || (!p.category && p.youtubeId)
  );
  const graphicProjects = PROJECTS.filter(p =>
    p.category === ProjectCategory.GRAPHIC
  );

  const renderProjectCard = (project: Project) => {
    const isVertical = project.format === 'vertical';
    const isVideo = !!project.youtubeId;
    const isGraphic = project.category === ProjectCategory.GRAPHIC;

    return (
      <div className="group flex flex-col h-full">
        {/* Card Media Container */}
        <div
          className={`relative w-full bg-neutral-800 rounded-xl overflow-hidden border border-neutral-800 shadow-lg ${
            isVertical ? 'aspect-[9/16] max-h-[70vh] md:max-h-none' : 'aspect-video'
          }`}
        >
          {isVideo ? (
            <VideoPreview project={project} />
          ) : (
            <>
              <img
                src={project.thumbnail}
                alt={project.title || 'Project Thumbnail'}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 cursor-pointer"
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedProject(project)}
              />

              {!isGraphic && (
                <div
                  className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {project.description && (
                      <p className="text-gray-200 font-medium mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                    )}
                    <div className="inline-flex items-center gap-2 text-white font-bold border-b border-blue-500 pb-0.5 hover:text-blue-400 transition-colors">
                      View Case Study <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Card Content Below */}
        {!isGraphic && (project.title || project.subcategory) && (
          <div className="mt-3 px-1">
            <div className="flex justify-between items-start gap-2">
              {project.title && (
                <h3
                  className="text-base xl:text-lg font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer leading-tight"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 xl:py-32 bg-neutral-900 border-y border-neutral-800 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
          <p className="text-gray-400 max-w-xl">Explore my diverse range of projects, from high-retention video editing to impactful brand identities.</p>
        </div>

        {/* Video Edits Section */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">Video Edits</h3>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-5 xl:gap-x-8 gap-y-6 sm:gap-y-10">
            {videoProjects.map(project => (
              <div key={project.id}>
                {renderProjectCard(project)}
              </div>
            ))}
          </div>
        </div>

        {/* Graphic Design Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">Graphic Designs</h3>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-8">
            {graphicProjects.map(project => (
              <div key={project.id}>
                {renderProjectCard(project)}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;