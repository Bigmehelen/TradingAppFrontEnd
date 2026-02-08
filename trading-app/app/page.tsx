import Header from '../components/Header';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Challenges />
      <ProcessSteps />
      <Testimonials />
      <Footer />
    </div>
  );
}
