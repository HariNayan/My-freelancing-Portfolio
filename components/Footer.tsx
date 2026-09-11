import React from 'react';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { Link } from '../lib/router';

const EMAIL = 'harinayan.work@gmail.com';

/* Only real destinations. The reference's footer is a five-column link
   directory because it has dozens of pages behind it; this site has one
   page and a handful of anchors, so the shape carries over but the
   density does not — inventing columns would mean inventing pages. */
/* Path-qualified so they resolve from /work and /work/:slug too, not just
   from the home page. */
const SECTIONS = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const ELSEWHERE = [
  { name: 'Instagram', href: 'https://www.instagram.com/creo.mov/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/harinayanrajpattun/' },
  ...(BOOKING_URL ? [{ name: 'Book a call', href: BOOKING_URL }] : []),
];

/* Sits on the ground like every other section, separated by a hairline
   rather than boxed in a panel. */
const Footer: React.FC = () => {
  return (
    <footer className="bg-ground px-4 md:px-6 pt-12 md:pt-[72px] pb-10 md:pb-14">
      <div className="container mx-auto max-w-6xl">
        <div className="border-t border-hairline pt-10 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
            {/* Brand */}
            <div className="max-w-xs">
              <p className="text-xl font-display font-extrabold text-ink tracking-tight">
                NAYAN<span className="text-faint">.</span>
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Product demos, launch films and ad creative for startups and brands &mdash; built on
                retention craft.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 inline-block text-sm text-ink hover:text-muted transition-colors break-all"
              >
                {EMAIL}
              </a>
            </div>

            {/* Sections */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                Sections
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/work" className="text-sm text-muted hover:text-ink transition-colors">
                    Work
                  </Link>
                </li>
                {SECTIONS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-muted hover:text-ink transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elsewhere */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                Elsewhere
              </p>
              <ul className="space-y-2.5">
                {ELSEWHERE.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={12}
                        className="text-hairline-strong group-hover:text-muted transition-colors"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 md:mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-faint">
              &copy; {new Date().getFullYear()} NAYAN Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/creo.mov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center text-faint hover:text-ink hover:bg-sunken transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/harinayanrajpattun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center text-faint hover:text-ink hover:bg-sunken transition-colors"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
