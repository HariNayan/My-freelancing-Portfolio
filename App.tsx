import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsCarousel from './components/ToolsCarousel';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
