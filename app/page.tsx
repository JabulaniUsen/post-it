import Why from '@/components/landingPage/Why';
import Navbar from '../components/landingPage/Navbar'
import Pricing from '@/components/landingPage/Pricing';
import Footer from '@/components/landingPage/Footer';
import Services from '@/components/landingPage/Services';
import HeroSection from '@/components/landingPage/HeroSection';

export default function Home() {

  return (
    <div className="bg-[#f1edf9] poppins">
      <Navbar />
      <HeroSection />
      <Why />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
