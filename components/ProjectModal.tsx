import React, { useEffect } from 'react';
import { X, ArrowRight, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  // Lock body scroll and close on Escape
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  // Construct header image source; maxresdefault 404s for some videos,
  // so fall back to hqdefault on error.
  const headerImage = project.thumbnail || (project.youtubeId ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg` : '');
  const handleHeaderImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (project.youtubeId && !e.currentTarget.src.includes('hqdefault')) {
      e.currentTarget.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
    }
  };

  const isMinimal = !project.overview && !project.role;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4 md:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div data-lenis-prevent className="relative bg-neutral-900 w-full max-w-5xl xl:max-w-7xl max-h-[90vh] overflow-y-auto touch-pan-y rounded-2xl shadow-2xl border border-neutral-800 flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-neutral-800/50 hover:bg-neutral-700 rounded-full text-white transition-colors backdrop-blur-md"
        >
          <X size={22} />
        </button>

        {/* Media Header */}
        <div className={`w-full bg-neutral-800 relative shrink-0 ${isMinimal && project.format === 'vertical' ? 'h-auto aspect-video flex items-center justify-center py-10' : 'h-56 sm:h-72 xl:h-[28rem]'}`}>
           {!isMinimal && headerImage && (
             <img
              src={headerImage}
              alt={project.title || 'Project'}
              onError={handleHeaderImageError}
              className="w-full h-full object-cover opacity-50"
             />
           )}
           {!isMinimal && <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>}
           
           {!isMinimal && (
             <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                {project.subcategory && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-neutral-300 uppercase bg-neutral-500/10 border border-neutral-400/20 rounded-full">
                    {project.subcategory}
                  </span>
                )}
                {project.title && (
                  <h2 className="text-2xl md:text-4xl xl:text-5xl font-display font-bold text-white leading-tight">{project.title}</h2>
                )}
             </div>
           )}

           {/* Minimal video view */}
           {isMinimal && project.youtubeId && (
              <div className={`w-full ${project.format === 'vertical' ? 'aspect-[9/16] max-w-xs sm:max-w-sm' : 'aspect-video max-w-4xl'}`}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&controls=1&playsinline=1`}
                    title={project.title || 'Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-2xl"
                  ></iframe>
              </div>
           )}
        </div>

        {/* Content Body */}
        {!isMinimal && (
          <div className="p-5 md:p-8 xl:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
              
              {/* Left Column: Main Info */}
              <div className="md:col-span-2 space-y-8">
                {project.overview && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                    <p className="text-base xl:text-lg text-gray-300 font-light leading-relaxed">{project.overview}</p>
                  </div>
                )}

                {project.objective && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <CheckCircle size={20} className="text-gray-500" />
                      Objective
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{project.objective}</p>
                  </div>
                )}

                {project.approach && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Layers size={20} className="text-gray-500" />
                      Creative Approach
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{project.approach}</p>
                  </div>
                )}

                {/* Media Embed */}
                {project.youtubeId && (
                  <div className="mt-8 bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden">
                     <div className={`w-full ${project.format === 'vertical' ? 'aspect-[9/16] max-w-xs sm:max-w-sm mx-auto' : 'aspect-video'}`}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&controls=1&playsinline=1`}
                          title={project.title || 'Video'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                     </div>
                  </div>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-1 space-y-8">
                 <div className="bg-neutral-800/30 p-5 md:p-6 rounded-xl border border-neutral-800">
                   <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Project Details</h4>
                   
                   <div className="space-y-6">
                      {project.client && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Client</p>
                          <p className="text-white font-medium">{project.client}</p>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Role</p>
                          <p className="text-white font-medium">{project.role}</p>
                        </div>
                      )}
                      {project.tools && project.tools.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Tools Used</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tools.map(tool => (
                              <span key={tool} className="text-xs px-2 py-1 bg-neutral-700 text-gray-200 rounded-md border border-neutral-600">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                   </div>
                 </div>

                 <a
                   href="#contact"
                   onClick={onClose}
                   className="w-full py-4 bg-white text-neutral-950 font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                 >
                   Start a Similar Project
                   <ArrowRight size={18} />
                 </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;