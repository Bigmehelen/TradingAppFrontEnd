import Header from '../components/Header';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Challenges />
      <ProcessSteps />
      <Testimonials />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
