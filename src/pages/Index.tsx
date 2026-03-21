import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Doctors } from "@/components/Doctors";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease-out" }}>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Doctors />
          <BeforeAfter />
          <Reviews />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
