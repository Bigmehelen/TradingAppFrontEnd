'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TalkToExpert from '../components/TalkToExpert';
import ProcessSteps from '../components/ProcessSteps';
import Pricing from '../components/Pricing';
import AboutSection from '../components/AboutSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Contact from '@/components/Contact';

function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header onContactClick={() => setContactModalOpen(true)} />
      <Hero />
      <AboutSection />
      <Pricing />
      <TalkToExpert />
      <ProcessSteps />
      <FinalCTA />
      <Contact isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <Footer />
    </div>
  );
}

export default Home;

