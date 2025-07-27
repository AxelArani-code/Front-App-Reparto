import APKInstallGuide from "@/components/APKInstallGuide";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";



export default function Landing() {

  return (
  <div className="min-h-screen">
   <Header />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <APKInstallGuide />
      
      <Footer />
    </div>
  )
}
