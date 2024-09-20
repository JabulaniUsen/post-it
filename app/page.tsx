import Why from '@/components/landingPage/Why';
import Navbar from '../components/landingPage/Navbar'
import Hero from '@/components/landingPage/Hero';
import Pricing from '@/components/landingPage/Pricing';
import Footer from '@/components/landingPage/Footer';
import Services from '@/components/landingPage/Services';

export default function Home() {

  return (
    <div className="bg-[#f1edf9]">
      <Navbar />
      <Hero />
      <Why />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
