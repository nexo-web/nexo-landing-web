import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Crypto from "@/components/Crypto";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Crypto />
        <Process />
        <Benefits />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealInit />
    </>
  );
}
