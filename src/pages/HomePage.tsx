import { AboutSection } from "../components/AboutSection";
import { BentoGallery } from "../components/BentoGallery";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BentoGallery />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
