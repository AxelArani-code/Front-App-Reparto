import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import APKInstallGuide from "@/components/APKInstallGuide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <APKInstallGuide />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
