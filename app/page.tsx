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

      {/* Gallery / Our Story */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </main>
  );
}
