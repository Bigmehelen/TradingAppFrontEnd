'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import TalkToExpert from '../components/TalkToExpert';
import ProcessSteps from '../components/ProcessSteps';
import Pricing from '../components/Pricing';
import AboutSection from '../components/AboutSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Pricing />
      <TalkToExpert />
      <ProcessSteps />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Home;
