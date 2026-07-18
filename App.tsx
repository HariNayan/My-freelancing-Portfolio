import React, { Suspense, lazy, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import ToolsCarousel from './components/ToolsCarousel';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));

function App() {
  // Lenis smooth (lerped) scrolling — the "premium site" feel.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-white/20">
      <Header />
      <main>
        <Hero />
        <ToolsCarousel />
        <Portfolio />
        <Marquee />
        <Services />
        <Process />
        <Suspense fallback={<div className="py-16 md:py-24 xl:py-32 bg-neutral-950" />}>
          <About />
        </Suspense>
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
