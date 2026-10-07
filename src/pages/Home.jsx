import React from 'react';
import Hero from '../components/Hero';
import TrustedTools from '../components/TrustedTools';
import ChallengeSolution from '../components/ChallengeSolution';
import Industries from '../components/Industries';
import Services from '../components/Services';
import UnitEconomics from '../components/UnitEconomics';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustedTools />
      <ChallengeSolution />
      <Industries />
      <Services />
      <UnitEconomics />
      <Process />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;