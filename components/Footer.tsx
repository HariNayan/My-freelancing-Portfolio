import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 pt-10 pb-8 xl:pb-12 border-t border-neutral-900 overflow-hidden">
      {/* Giant ghost wordmark */}
      <div className="container mx-auto px-6" aria-hidden>
        <div className="font-display font-bold leading-[0.85] tracking-tight select-none text-neutral-800 text-[19vw] whitespace-nowrap">
          NAYAN<span className="text-neutral-700">.</span>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 text-sm">
          &copy; {new Date().getFullYear()} NAYAN Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/creo.mov/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/harinayanrajpattun/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;