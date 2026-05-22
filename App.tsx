import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
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
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-white/20">
      <Header />
      <main>
        <Hero />
        <ToolsCarousel />
        <Portfolio />
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
