import React from 'react';
import { CLIENTS } from '../constants';
import { Youtube, Instagram, ExternalLink, Users } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <section className="py-16 md:py-24 xl:py-32 bg-neutral-900 border-t border-neutral-800 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Trusted By Creators</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Collaborating with top talent across YouTube and Social Media to deliver high-impact visuals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CLIENTS.map((client) => (
            <a 
              key={client.id} 
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center gap-4 md:gap-5 mb-6">
                <div className="relative shrink-0">
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="w-14 h-14 xl:w-20 xl:h-20 rounded-full object-cover border-2 border-neutral-800 group-hover:border-white transition-colors"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-neutral-900 rounded-full p-1.5 border border-neutral-800">
                    {client.platform === 'YouTube' ? (
                      <Youtube size={14} className="text-red-500 fill-current" />
                    ) : (
                      <Instagram size={14} className="text-pink-500" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold truncate pr-2 text-base xl:text-xl">{client.name}</h3>
                  <p className="text-sm text-gray-500 truncate font-medium">{client.handle}</p>
                </div>

                <ExternalLink size={20} className="text-neutral-700 group-hover:text-white transition-colors" />
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-sm xl:text-base text-gray-400">
                  <Users size={14} />
                  <span className="font-semibold text-gray-300">{client.stats}</span>
                </div>
                <span className="text-xs font-medium text-neutral-600 uppercase tracking-wider group-hover:text-neutral-400 transition-colors">
                  Visit Channel
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;