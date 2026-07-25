"use client";

import { motion } from "framer-motion";
import MandalaBackground from "./ui/MandalaBackground";

interface DetailRowProps {
  icon: string;
  label: string;
  value: string;
}

function DetailRow({ icon, label, value }: DetailRowProps) {
  return (
    <div className="flex flex-col items-center gap-1 py-5 border-b border-champagne/60 last:border-none">
      <span className="text-soft-gold text-lg mb-1" aria-hidden="true">{icon}</span>
      <p
        className="uppercase tracking-widest text-text-light"
        style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.62rem", letterSpacing: "0.22em" }}
      >
        {label}
      </p>
      <p
        className="text-text-dark text-center"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(1.05rem, 2.8vw, 1.25rem)",
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: "0.02em",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default function WeddingDetails() {
  return (
    <section
      id="wedding"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #FAF8F2 0%, #FFF9F0 100%)" }}
      aria-labelledby="wedding-heading"
    >
      {/* Subtle mandala */}
      <div className="opacity-30">
        <MandalaBackground />
      </div>

      {/* Ambient corner glow */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-soft-gold uppercase tracking-[0.3em] text-center text-xs mb-4"
          style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500 }}
        >
          You are invited
        </motion.p>

        {/* Section title */}
        <motion.h2
          id="wedding-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center text-text-dark mb-6"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
            letterSpacing: "0.12em",
            fontWeight: 400,
          }}
        >
          Wedding Ceremony
        </motion.h2>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-rule-sm mb-8"
        />

        {/* Lotus ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <LotusOrnament />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="glass-card px-8 py-2"
          style={{
            boxShadow: "0 4px 40px rgba(201,162,39,0.12), 0 1px 0 rgba(201,162,39,0.2) inset",
          }}
        >
          <DetailRow icon="📅" label="Date" value="Sunday, 13 September 2026" />
          <DetailRow icon="🕙" label="Time" value="10:00 AM – 10:40 AM" />
          <DetailRow icon="🏛️" label="Venue" value="Rubco Auditorium" />
          <DetailRow icon="📍" label="Address" value="Rubco House, 670002" />
        </motion.div>

        {/* Maps button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-8"
        >
          <a
            id="wedding-maps-btn"
            href="https://maps.app.goo.gl/wZykYDBJv78n7Qn97"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #C9A227 0%, #E8D5A3 50%, #C9A227 100%)",
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
              transition: "all 0.3s ease",
            }}
            aria-label="Get directions to Rubco Auditorium on Google Maps"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 6px 30px rgba(201,162,39,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 20px rgba(201,162,39,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <span aria-hidden="true">📍</span>
            <span
              className="text-white uppercase tracking-widest"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.65rem", fontWeight: 600 }}
            >
              Get Directions
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function LotusOrnament() {
  return (
    <svg width="60" height="36" viewBox="0 0 60 36" fill="none" aria-hidden="true">
      <ellipse cx="30" cy="26" rx="6" ry="10" fill="#C9A227" opacity="0.5" />
      <ellipse cx="19" cy="28" rx="5" ry="9" fill="#C9A227" opacity="0.35" transform="rotate(-15 19 28)" />
      <ellipse cx="41" cy="28" rx="5" ry="9" fill="#C9A227" opacity="0.35" transform="rotate(15 41 28)" />
      <ellipse cx="10" cy="30" rx="4" ry="7" fill="#C9A227" opacity="0.2" transform="rotate(-28 10 30)" />
      <ellipse cx="50" cy="30" rx="4" ry="7" fill="#C9A227" opacity="0.2" transform="rotate(28 50 30)" />
      <path d="M4 30 Q30 6 56 30" stroke="#C9A227" strokeWidth="0.8" fill="none" opacity="0.4" />
      <circle cx="30" cy="26" r="2.5" fill="#C9A227" opacity="0.6" />
    </svg>
  );
}
