/**
 * Home — Gabi Car Detailing main page
 * "Obsidian Studio" design: dark luxury minimalism
 * Sections: Navbar → Hero → Services → Calculator → Gallery → Testimonials → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingCalculator from "@/components/PricingCalculator";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PricingCalculator />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
