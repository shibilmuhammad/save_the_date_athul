"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #FFF9F0 0%, #FAF8F2 100%)" }}
      aria-labelledby="gallery-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-soft-gold uppercase tracking-[0.3em] text-center text-xs mb-4"
          style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500 }}
        >
          A Glimpse of Us
        </motion.p>

        <motion.h2
          id="gallery-heading"
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
          Our Story
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-rule-sm mb-14"
        />

        {/* Gallery grid — 3 photo layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start mb-8">
          {/* Photo 1 — Standing together by Thar */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative md:mt-4 cursor-default"
            style={{ transformOrigin: "center" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-elegant-lg" style={{ aspectRatio: "3/4" }}>
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none z-10"
                style={{ border: "1px solid rgba(201,162,39,0.2)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/story1.jpg"
                alt="Athul and Sreelakshmi"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute top-3 left-3 pointer-events-none"
              style={{ opacity: 0.5 }}
              aria-hidden="true"
            >
              <CornerAccent />
            </div>
          </motion.div>

          {/* Photo 2 — Leaning on shoulder (New photo) */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative cursor-default"
            style={{ transformOrigin: "center" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-elegant-lg" style={{ aspectRatio: "3/4" }}>
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none z-10"
                style={{ border: "1px solid rgba(201,162,39,0.2)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/story3.jpg"
                alt="Athul and Sreelakshmi together"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute top-3 right-3 pointer-events-none rotate-90"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              >
                <CornerAccent />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photo 3 & Quote Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Photo 3 — Close up holding hands */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative cursor-default"
          >
            <div className="relative rounded-xl overflow-hidden shadow-elegant-lg" style={{ aspectRatio: "4/3" }}>
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none z-10"
                style={{ border: "1px solid rgba(201,162,39,0.2)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/story2.jpg"
                alt="Athul and Sreelakshmi — holding hands"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="glass-card px-6 py-8 text-center"
          >
            <p
              className="text-soft-gold uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.62rem" }}
            >
              Athul &amp; Sreelakshmi M Nair
            </p>
            <p
              className="text-text-mid"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Two souls, one destiny — bound by love and blessed by family.
            </p>
            <div className="gold-rule-sm mt-5" />
            <p
              className="text-text-light mt-4"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "0.95rem", fontStyle: "italic" }}
            >
              13 September 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CornerAccent() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M2 26 L2 2 L26 2" stroke="#C9A227" strokeWidth="1.5" />
      <circle cx="2" cy="2" r="2" fill="#C9A227" />
    </svg>
  );
}
