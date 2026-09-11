import React from 'react';
import Hero from '../components/Hero';
import ProofBar from '../components/ProofBar';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import RetentionBridge from '../components/RetentionBridge';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      {/* Order is the argument: promise, then proof, then the work,
          then what it costs you to start. */}
      <Hero />
      <ProofBar />
      <Portfolio />
      <Services />
      <RetentionBridge />
      <Process />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
