"use client";

import { useRef } from "react";
import InvitationCover from "./components/InvitationCover";
import HeroSection from "./components/HeroSection";
import WeddingDetails from "./components/WeddingDetails";
import ReceptionDetails from "./components/ReceptionDetails";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleOpenInvitation = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* Landing — Invitation Cover */}
      <InvitationCover onOpen={handleOpenInvitation} />

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection />
      </div>

      {/* Wedding Ceremony */}
      <WeddingDetails />

      {/* Reception */}
      <ReceptionDetails />

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      <Footer />

      {/* Floating Watermark */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-auto select-none sm:bottom-6 sm:right-6">
        <div
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-soft-gold/30 bg-ivory/90 backdrop-blur-md shadow-elegant hover:border-soft-gold/60 transition-all duration-300"
          style={{ boxShadow: "0 4px 20px rgba(44, 24, 16, 0.08)" }}
        >
          <span
            className="text-[8px] uppercase tracking-widest text-text-light font-medium"
            style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.15em" }}
          >
            Design by
          </span>
          <span
            className="text-[10px] font-semibold tracking-wider text-soft-gold"
            style={{ fontFamily: "var(--font-cinzel), serif", letterSpacing: "0.08em" }}
          >
            SM DESIGNS
          </span>
        </div>
      </div>
    </main>
  );
}
