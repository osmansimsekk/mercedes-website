import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Test from "./components/Gallery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Accordion from "./components/Accordion";
import NavbarProvider from "./contexts/NavbarProvider";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);
  const [mobileNavbar, setMobileNavbar] = useState();

  const lenis = useRef(null);

  useEffect(() => {
    // Lenis kurulum
    lenis.current = new Lenis({
      duration: 1.2, // Kaydırma süresi
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Özel easing fonksiyonu
      smooth: true, // Smooth scroll etkinleştirme
    });

    // Animasyonu tetikleyen döngü
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenis.current.destroy(); // Kaynakları temizle
    };
  }, []);

  useGSAP(() => {
    sectionsRef.current.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // Ekran boyutuna göre başlangıç
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <main className="font-tinos w-screen h-dvh">
      <Navbar isOpen={mobileNavbar} setIsOpen={setMobileNavbar} />

      <Hero scrollRef={sectionsRef} />
      <Gallery scrollRef={sectionsRef} />
      <Highlights scrollRef={sectionsRef} />
      <Accordion scrollRef={sectionsRef} />
      <VideoSection />
      <Footer />
    </main>
  );
}

export default App;
