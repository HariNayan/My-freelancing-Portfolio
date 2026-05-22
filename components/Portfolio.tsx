import React, { useState, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectModal from './ProjectModal';
import { Play, Volume2, VolumeX } from 'lucide-react';

// YouTube Facade: shows thumbnail, loads iframe only on click (massive performance win)
const VideoPreview = ({ project }: { project: Project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const thumbnailUrl = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!iframeRef.current?.contentWindow) return;
    const command = isMuted ? 'unMute' : 'mute';
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      '*'
    );
    setIsMuted(prev => !prev);
  };

  if (isLoaded) {
    return (
      <div className="relative w-full h-full bg-neutral-900">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1`}
          title={project.title || 'Video Preview'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-neutral-950/70 hover:bg-neutral-950/90 border border-neutral-600 hover:border-neutral-400 text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
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
    (p.category === ProjectCategory.VIDEO || (!p.category && p.youtubeId)) && !p.id.startsWith('s')
  );
  const startupProjects = PROJECTS.filter(p => p.id.startsWith('s'));
  const graphicProjects = PROJECTS.filter(p =>
    p.category === ProjectCategory.GRAPHIC
  );

  const renderProjectCard = (project: Project) => {
    const isVertical = project.format === 'vertical';
    const isVideo = !!project.youtubeId;
    const isGraphic = project.category === ProjectCategory.GRAPHIC;

    return (
      <div className={`group flex flex-col h-full ${isVideo && !project.id.startsWith('s') ? 'max-w-xs mx-auto' : ''}`}>
        {/* Card Media Container */}
        <div
          className={`relative w-full bg-neutral-800 rounded-xl overflow-hidden border border-neutral-800 shadow-lg ${
            isVertical ? 'aspect-[9/16] max-h-[70vh] md:max-h-none' : 'aspect-video'
          }`}
        >
          {isVideo ? (
            <VideoPreview project={project} />
          ) : project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title || 'Project Thumbnail'}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy"
              decoding="async"
              onClick={isGraphic ? undefined : () => setSelectedProject(project)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">Add video link</div>
          )}
        </div>

        {/* Card Content Below */}
        {!isGraphic && (project.title || project.subcategory) && (
          <div className="mt-3 px-1">
            <div className="flex justify-between items-start gap-2">
              {project.title && (
                <h3
                  className={`text-base xl:text-lg font-bold text-white leading-tight ${
                    (project.youtubeId || project.thumbnail) && !project.id.startsWith('s')
                      ? 'group-hover:text-blue-400 transition-colors cursor-pointer'
                      : ''
                  }`}
                  onClick={() => (project.youtubeId || project.thumbnail) && !project.id.startsWith('s') ? setSelectedProject(project) : undefined}
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
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">Short Videos</h3>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-5 xl:gap-x-8 gap-y-6 sm:gap-y-10">
            {videoProjects.map(project => (
              <div key={project.id}>
                {renderProjectCard(project)}
              </div>
            ))}
          </div>
        </div>

        {/* Startup Work Section */}
        {startupProjects.length > 0 && (
          <div className="mb-20 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">Startup Work</h3>
              <div className="h-px flex-1 bg-neutral-800"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startupProjects.map(project => (
                <div key={project.id}>
                  {renderProjectCard(project)}
                </div>
              ))}
            </div>
          </div>
        )}

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