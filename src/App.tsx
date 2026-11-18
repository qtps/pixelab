// import ContactSection from './components/sections/ContactSection';
import HeroSection from './components/sections/HeroSection';
import SiteHeader from './components/layout/SiteHeader';
// import IntroSection from './components/sections/IntroSection';
import ServicesSection from './components/sections/ServicesSection';
import FeatureSection from './components/sections/FeatureSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TeamSection from './components/sections/TeamSection';
import NewsletterSection from './components/sections/NewsletterSection';
import SiteFooter from './components/layout/SiteFooter';

const App = () => (
  <main>
    <SiteHeader />
    <HeroSection />
    {/* <IntroSection /> */}
    <ServicesSection />
    <FeatureSection />
    <TestimonialsSection />
    <TeamSection />
    <NewsletterSection />
    {/* <ContactSection /> */}
    <SiteFooter />
  </main>
);

export default App;
