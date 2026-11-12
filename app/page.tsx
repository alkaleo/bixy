import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Why } from "@/components/Why";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <LogoTicker />
        <Why />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
