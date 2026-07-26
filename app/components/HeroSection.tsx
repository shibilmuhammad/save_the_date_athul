"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./ui/CountdownTimer";
import FloatingPetals from "./ui/FloatingPetals";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FAF8F2 0%, #FFF9F0 55%, #F5EDD4 100%)" }}
    >
      {/* Floating petals */}
      <FloatingPetals />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(201,162,39,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 w-full max-w-5xl mx-auto">

        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="gold-rule-sm mb-10"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-8"
          style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 500 }}
        >
          Together with our families
        </motion.p>

        {/* Hero image — full-width editorial portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-lg sm:max-w-xl mx-auto mb-10"
          style={{ aspectRatio: "4/5" }}
        >
          {/* Gold border frame */}
          <div
            className="absolute -inset-2 sm:-inset-3 rounded-2xl pointer-events-none z-10"
            style={{ border: "1px solid rgba(201,162,39,0.35)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -inset-4 sm:-inset-5 rounded-3xl pointer-events-none z-10"
            style={{ border: "1px solid rgba(201,162,39,0.15)" }}
            aria-hidden="true"
          />

          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-elegant-lg">
            <Image
              src="/images/cover.jpg"
              alt="Athul and Sreelakshmi"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
            {/* Gradient overlay at bottom */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(250,248,242,0.85) 0%, transparent 40%)",
              }}
            />
          </div>

          {/* Names overlay on the image */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-6 sm:pb-8">
            <h1
              className="text-text-dark"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(1.3rem, 4.5vw, 2.8rem)",
                letterSpacing: "0.12em",
                fontWeight: 400,
                lineHeight: 1.3,
                textShadow: "0 2px 12px rgba(250,248,242,0.8)",
              }}
            >
              R Athul Krishna
            </h1>
            <p
              className="text-soft-gold my-1"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                fontStyle: "italic",
              }}
              aria-label="and"
            >
              ❤
            </p>
            <h1
              className="text-text-dark"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(1.3rem, 4.5vw, 2.8rem)",
                letterSpacing: "0.12em",
                fontWeight: 400,
                lineHeight: 1.3,
                textShadow: "0 2px 12px rgba(250,248,242,0.8)",
              }}
            >
              Sreelakshmi Nair
            </h1>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-text-mid text-center max-w-xl mb-10"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.05rem, 2.8vw, 1.35rem)",
            fontStyle: "italic",
            lineHeight: 1.75,
            letterSpacing: "0.02em",
          }}
        >
          Together with our families, we warmly invite you to celebrate our wedding.
        </motion.p>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-rule-sm mb-8"
        />

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-text-light uppercase tracking-widest text-xs mb-6"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Wedding on
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-text-dark mb-8"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.4rem, 4.5vw, 2.2rem)",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            fontWeight: 300,
          }}
        >
          13 September 2026
        </motion.p>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="gold-rule-sm mt-12"
        />
      </div>
    </section>
  );
}
