import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-8 xl:py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 text-sm">
          &copy; {new Date().getFullYear()} Harinayan. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/creo.mov/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/harinayanrajpattun/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <div className="w-px h-4 bg-neutral-800"></div>
          <a href="#" className="text-neutral-600 hover:text-white text-xs uppercase tracking-wider transition-colors">Privacy</a>
          <a href="#" className="text-neutral-600 hover:text-white text-xs uppercase tracking-wider transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;