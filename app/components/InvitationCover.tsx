"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MandalaBackground from "./ui/MandalaBackground";

// Lines shown one by one with stagger — no cursor, no intervals, no blink
const REVEAL_LINES = [
  { text: "Two hearts…",                             italic: true  },
  { text: "One beautiful journey…",                  italic: true  },
  { text: "Together with our families",              italic: false },
  { text: "we invite you to celebrate our wedding.", italic: false },
];

// Each line appears this many ms after the previous one
const LINE_DELAY_MS = 900;
// How long after the last line to switch to invitation phase
const TRANSITION_DELAY_MS = 1000;

interface InvitationCoverProps {
  onOpen: () => void;
}

export default function InvitationCover({ onOpen }: InvitationCoverProps) {
  const [phase, setPhase] = useState<"reveal" | "invitation">("reveal");

  // After all lines have appeared + a short pause → switch to invitation
  useEffect(() => {
    const totalMs =
      REVEAL_LINES.length * LINE_DELAY_MS + TRANSITION_DELAY_MS;
    const timer = setTimeout(() => setPhase("invitation"), totalMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFF9F0 0%, #FAF8F2 40%, #F5EDD4 100%)" }}
    >
      <MandalaBackground />
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── PHASE 1: LINE REVEAL ── */}
      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
          >
            {/* Om symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-soft-gold text-4xl mb-10"
              style={{ fontFamily: "serif" }}
              aria-label="Om symbol"
            >
              ॐ
            </motion.div>

            <div
              className="flex flex-col items-center gap-4 min-h-[150px]"
              aria-live="polite"
            >
              {REVEAL_LINES.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: i * (LINE_DELAY_MS / 1000),
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="text-text-mid"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(1.1rem, 3vw, 1.45rem)",
                    fontStyle: line.italic ? "italic" : "normal",
                    letterSpacing: "0.02em",
                    lineHeight: 1.6,
                  }}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 2: INVITATION ── */}
      <AnimatePresence>
        {phase === "invitation" && (
          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Om symbol */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-soft-gold text-3xl mb-6"
              style={{ fontFamily: "serif" }}
              aria-label="Om symbol"
            >
              ॐ
            </motion.div>

            {/* Couple photos in arch frames */}
            <motion.div
              className="flex items-end justify-center gap-5 sm:gap-8 mb-8"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              {/* Photo 1 */}
              <div className="relative" style={{ width: 130, height: 172 }}>
                <div
                  className="arch-frame w-full h-full"
                  style={{
                    boxShadow: "0 8px 32px rgba(201,162,39,0.3)",
                    border: "2px solid rgba(201,162,39,0.5)",
                  }}
                >
                  <Image
                    src="/images/couple1.png"
                    alt="Athul and Sreelakshmi — photo 1"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="130px"
                    priority
                  />
                </div>
                <div
                  className="absolute inset-0 arch-frame pointer-events-none"
                  style={{ border: "1px solid rgba(201,162,39,0.35)", borderRadius: "inherit" }}
                />
              </div>

              {/* Divider ornament */}
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-soft-gold to-transparent" />
                <span className="text-soft-gold text-lg" style={{ fontFamily: "serif" }}>❦</span>
                <div className="w-px h-12 bg-gradient-to-b from-soft-gold via-soft-gold to-transparent" />
              </div>

              {/* Photo 2 */}
              <div className="relative" style={{ width: 130, height: 172 }}>
                <div
                  className="arch-frame w-full h-full"
                  style={{
                    boxShadow: "0 8px 32px rgba(201,162,39,0.3)",
                    border: "2px solid rgba(201,162,39,0.5)",
                  }}
                >
                  <Image
                    src="/images/couple2.png"
                    alt="Athul and Sreelakshmi — photo 2"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="130px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Gold rule */}
            <motion.div
              className="gold-rule-sm mb-5"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />

            {/* Names */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <h1
                className="text-text-dark"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
                  letterSpacing: "0.12em",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                R Athul Krishna
              </h1>
              <p
                className="text-soft-gold"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                  fontStyle: "italic",
                  letterSpacing: "0.08em",
                  lineHeight: 1.6,
                }}
              >
                &amp;
              </p>
              <h1
                className="text-text-dark"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
                  letterSpacing: "0.12em",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Sreelakshmi Nair
              </h1>
            </motion.div>

            {/* Gold rule */}
            <motion.div
              className="gold-rule-sm my-5"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            />

            {/* SAVE THE DATE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-soft-gold uppercase font-semibold mb-3"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "clamp(0.6rem, 1.8vw, 0.75rem)",
                letterSpacing: "0.35em",
              }}
            >
              Save the Date
            </motion.p>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="text-text-dark mb-8"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
                fontStyle: "italic",
                letterSpacing: "0.05em",
                fontWeight: 300,
              }}
            >
              13 September 2026
            </motion.p>

            {/* Open Invitation button */}
            <motion.button
              id="open-invitation-btn"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              whileHover={{ scale: 1.04, boxShadow: "0 6px 28px rgba(201,162,39,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpen}
              className="px-10 py-3.5 border border-soft-gold text-soft-gold uppercase tracking-widest text-xs cursor-pointer"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.25em",
                background: "transparent",
                transition: "background 0.3s ease",
              }}
              aria-label="Open Invitation — scroll to main content"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              Open Invitation
              <span className="ml-3" aria-hidden="true">↓</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Decorative corner ornaments ── */
function CornerOrnament({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const posClass = {
    "top-left":     "top-4 left-4",
    "top-right":    "top-4 right-4 rotate-90",
    "bottom-left":  "bottom-4 left-4 -rotate-90",
    "bottom-right": "bottom-4 right-4 rotate-180",
  }[position];

  return (
    <div className={`absolute ${posClass} pointer-events-none`} aria-hidden="true">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 55 L5 5 L55 5" stroke="#C9A227" strokeWidth="1" opacity="0.5" />
        <path d="M5 45 L5 15 L15 5" stroke="#C9A227" strokeWidth="0.5" opacity="0.3" />
        <circle cx="5" cy="5" r="3" fill="#C9A227" opacity="0.4" />
        <circle cx="5" cy="5" r="1.5" fill="#C9A227" opacity="0.7" />
      </svg>
    </div>
  );
}
