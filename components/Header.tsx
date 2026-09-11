import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { Link, useRouter } from '../lib/router';

const navLinks = [
  { name: 'Work', id: 'work' },
  { name: 'Services', id: 'services' },
  { name: 'Process', id: 'process' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

/* Falls back to the contact form if no booking link is configured. */
const ctaHref = BOOKING_URL || '#contact';
const ctaExternal = BOOKING_URL ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};

/* A floating rounded bar inset from the top edge, rather than a
   full-bleed header — the reference's most recognisable move. */
const Header: React.FC = () => {
  const { route } = useRouter();
  const isHome = route.name === 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* On the home page these are in-page anchors. Anywhere else they have to
     carry the path too, so they land on the section rather than nowhere. */
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Re-runs on route change: the observed sections only exist on the home
     page, and the previous version wired itself up once on mount, so after
     navigating back from /work nothing was being watched. */
  useEffect(() => {
    setActiveSection(null);
    if (!isHome) return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-6 pt-3 md:pt-4">
      <div
        // Transparent at rest, sitting straight on the ground; it only
        // materialises into a panel once the page scrolls under it.
        // `transition-all` watched every animatable property, and
        // `backdrop-blur` forced the blurred region behind a full-width
        // fixed bar to repaint on every scrolled frame. Both are gone; the
        // bar is now opaque once scrolled.
        className={`container mx-auto max-w-6xl rounded-[12px] transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-surface shadow-[0_1px_5px_-4px_rgba(36,36,36,0.7),0_4px_8px_0_rgba(36,36,36,0.05)]'
            : 'bg-transparent shadow-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-5 py-2.5 md:py-3">
          <Link to="/" className="text-xl md:text-2xl font-display font-extrabold text-ink tracking-tight">
            NAYAN<span className="text-faint">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={sectionHref(link.id)}
                // Plain background swap. This used to be a motion layoutId
                // pill, which re-measures layout every time the observed
                // section changes — i.e. repeatedly while scrolling.
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-ink bg-sunken'
                    : 'text-muted hover:text-ink hover:bg-sunken'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={ctaHref}
              {...ctaExternal}
              className="ml-2 px-4 py-2 btn btn-primary text-sm"
            >
              Book a call
            </a>
          </nav>

          <button
            className="md:hidden text-ink p-1.5 -mr-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 pt-1 flex flex-col gap-1 border-t border-hairline mt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={sectionHref(link.id)}
                className="px-3 py-2.5 rounded-lg text-[15px] font-medium text-muted hover:text-ink hover:bg-sunken transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={ctaHref}
              {...ctaExternal}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1.5 text-center px-4 py-3 btn btn-primary"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
