"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ background: "linear-gradient(180deg, #FAF8F2 0%, #F5EDD4 100%)" }}
      role="contentinfo"
    >
      {/* Top gold rule */}
      <div className="gold-rule mb-0" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,162,39,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Lotus divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <LotusFooterOrnament />
        </motion.div>

        {/* Om */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-soft-gold text-2xl mb-6"
          style={{ fontFamily: "serif" }}
          aria-label="Om symbol"
        >
          ॐ
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-6"
        >
          <p
            className="text-text-dark"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              letterSpacing: "0.14em",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            R Athul Krishna
          </p>
          <p
            className="text-soft-gold"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              fontStyle: "italic",
            }}
          >
            &amp;
          </p>
          <p
            className="text-text-dark"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              letterSpacing: "0.14em",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            Sreelakshmi Nair
          </p>
        </motion.div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-rule-sm mb-7"
        />

        {/* Thank you message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-text-mid mb-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.05rem, 2.8vw, 1.3rem)",
            fontStyle: "italic",
            lineHeight: 1.8,
            letterSpacing: "0.02em",
          }}
        >
          We look forward to celebrating<br />this special day with you.
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-soft-gold uppercase tracking-widest text-xs mb-10"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          13 September 2026 &nbsp;·&nbsp; Kannur
        </motion.p>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-4 text-soft-gold mb-10"
          aria-hidden="true"
        >
          <span style={{ fontSize: "0.5rem" }}>✦</span>
          <span style={{ fontSize: "0.8rem" }}>✦</span>
          <span style={{ fontSize: "0.5rem" }}>✦</span>
        </motion.div>

        {/* Copyright */}
        <p
          className="text-text-light"
          style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
        >
          © {year} Athul &amp; Sreelakshmi — Made with ❤ for our special day
        </p>
      </div>
    </footer>
  );
}

function LotusFooterOrnament() {
  return (
    <svg width="80" height="52" viewBox="0 0 80 52" fill="none" aria-hidden="true">
      {/* Lotus petals */}
      <ellipse cx="40" cy="36" rx="8" ry="14" fill="#C9A227" opacity="0.45" />
      <ellipse cx="26" cy="38" rx="7" ry="12" fill="#C9A227" opacity="0.3" transform="rotate(-18 26 38)" />
      <ellipse cx="54" cy="38" rx="7" ry="12" fill="#C9A227" opacity="0.3" transform="rotate(18 54 38)" />
      <ellipse cx="14" cy="40" rx="5" ry="9" fill="#C9A227" opacity="0.18" transform="rotate(-33 14 40)" />
      <ellipse cx="66" cy="40" rx="5" ry="9" fill="#C9A227" opacity="0.18" transform="rotate(33 66 40)" />
      {/* Water line */}
      <path d="M2 40 Q40 20 78 40" stroke="#C9A227" strokeWidth="0.8" fill="none" opacity="0.35" />
      <path d="M10 42 Q40 28 70 42" stroke="#C9A227" strokeWidth="0.5" fill="none" opacity="0.2" />
      {/* Center */}
      <circle cx="40" cy="36" r="3.5" fill="#C9A227" opacity="0.55" />
      <circle cx="40" cy="36" r="1.5" fill="#C9A227" opacity="0.85" />
      {/* Stamens */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = parseFloat((40 + 6 * Math.cos(rad)).toFixed(3));
        const y2 = parseFloat((36 + 6 * Math.sin(rad)).toFixed(3));
        return (
          <line
            key={deg}
            x1={40}
            y1={36}
            x2={x2}
            y2={y2}
            stroke="#C9A227"
            strokeWidth="0.6"
            opacity="0.4"
          />
        );
      })}
    </svg>
  );
}
