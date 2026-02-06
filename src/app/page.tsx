import Header from '@/components/landingPage/header/Header';
import HeroSection from '@/components/landingPage/hero/HeroSection';
import CategoryCarousel from '@/components/landingPage/categories/CategoryCarousel';
import FeaturedSection from '@/components/landingPage/featured/FeaturedSection';
import OwnerCTA from '@/components/landingPage/cta/OwnerCTA';
import ContactDrawer from '@/components/landingPage/contact/ContactDrawer';
import Footer from '@/components/landingPage/footer/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoryCarousel />
      <FeaturedSection />
      <OwnerCTA />
      <ContactDrawer />
      <Footer />
    </>
  );
}
