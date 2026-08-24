import HeroPage from "@/components/main-contents/hero-page";
import NavigationBar from "@/components/main-contents/navigation";
import ScrolledContent from "@/components/main-contents/scrolled-content";
import AboutSection from "@/components/main-contents/about-page";
import AboutTwoSection from "@/components/main-contents/about-two";
import ServicesSection from "@/components/main-contents/services";
import ContactSection from "@/components/main-contents/contact-section";
import Footer from "@/components/main-contents/footer";
import TrustedPartners from "@/components/main-contents/trusted-partners";
import { ReactLenis } from 'lenis/react'
export default function Home() {
  return (
    <>
    <ReactLenis root options={{ lerp: 0.2, duration: 1.2,}}>
      <NavigationBar />
      <HeroPage />
      <ScrolledContent/>
      <AboutSection/>
      <TrustedPartners/>
      <AboutTwoSection/>
      <ServicesSection/>
      <ContactSection/>
      <Footer/>
    </ReactLenis>
    
    </>
  );
}
