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

        {/* Gallery grid — staggered asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Photo 1 — taller card with quote */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative md:mt-8 cursor-default"
            style={{ transformOrigin: "center" }}
          >
            {/* Outer border */}
            <div
              className="absolute -inset-3 rounded-2xl pointer-events-none"
              style={{ border: "1px solid rgba(201,162,39,0.2)" }}
              aria-hidden="true"
            />
            <div className="relative rounded-xl overflow-hidden shadow-elegant-lg" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/cover.jpg"
                alt="Athul and Sreelakshmi — photo 1"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold gradient overlay at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,24,16,0.65) 0%, rgba(44,24,16,0.1) 40%, transparent 70%)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-6 z-10">
                <p
                  className="text-warm-white text-center"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                    fontStyle: "italic",
                    opacity: 0.92,
                  }}
                >
                  &ldquo;Every love story is beautiful,<br />but ours is my favourite.&rdquo;
                </p>
              </div>
            </div>

            {/* Gold corner accent */}
            <div
              className="absolute top-3 left-3 pointer-events-none"
              style={{ opacity: 0.5 }}
              aria-hidden="true"
            >
              <CornerAccent />
            </div>
          </motion.div>

          {/* Photo 2 — slightly lower with decorative text panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative flex flex-col gap-6 cursor-default"
            style={{ transformOrigin: "center" }}
          >
            {/* Main photo */}
            <div className="relative rounded-xl overflow-hidden shadow-elegant-lg" style={{ aspectRatio: "3/4" }}>
              {/* Outer border */}
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none z-10"
                style={{ border: "1px solid rgba(201,162,39,0.2)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/story2.jpg"
                alt="Athul and Sreelakshmi — photo 2"
                fill
                className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,24,16,0.65) 0%, rgba(44,24,16,0.05) 35%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-6 z-10">
                <p
                  className="text-warm-white text-center"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                    fontStyle: "italic",
                    opacity: 0.92,
                  }}
                >
                  &ldquo;In all the world, there is no heart<br />for me like yours.&rdquo;
                </p>
              </div>

              {/* Gold corner accent top-right */}
              <div
                className="absolute top-3 right-3 pointer-events-none rotate-90"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              >
                <CornerAccent />
              </div>
            </div>

            {/* Floating quote card below photo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass-card px-6 py-5 text-center"
            >
              <p
                className="text-soft-gold uppercase tracking-widest mb-2"
                style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.58rem" }}
              >
                Athul &amp; Sreelakshmi
              </p>
              <p
                className="text-text-mid"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                Two souls, one destiny — bound by love and blessed by family.
              </p>
              <div className="gold-rule-sm mt-4" />
              <p
                className="text-text-light mt-3"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "0.9rem", fontStyle: "italic" }}
              >
                13 September 2026
              </p>
            </motion.div>
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
