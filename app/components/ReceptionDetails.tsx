"use client";

import { motion } from "framer-motion";

interface DetailItemProps {
  label: string;
  value: string;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className="uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "rgba(232, 213, 163, 0.7)",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          fontWeight: 400,
          lineHeight: 1.4,
          color: "#FFF9F0",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default function ReceptionDetails() {
  return (
    <section
      id="reception"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "linear-gradient(160deg, #2C1810 0%, #3D1F0E 40%, #4A2418 100%)" }}
      aria-labelledby="reception-heading"
    >
      {/* Subtle mandala overlay in dark */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-5"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 800"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-slow"
          style={{ width: "min(900px, 140vw)", height: "min(900px, 140vw)" }}
          fill="none"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x = parseFloat((400 + 360 * Math.cos(rad)).toFixed(3));
            const y = parseFloat((400 + 360 * Math.sin(rad)).toFixed(3));
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="8"
                ry="24"
                transform={`rotate(${angle + 90}, ${x}, ${y})`}
                fill="#C9A227"
              />
            );
          })}
          <circle cx="400" cy="400" r="380" stroke="#C9A227" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" stroke="#C9A227" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="180" stroke="#C9A227" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Gold accent glow corners */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(201,162,39,0.1) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(201,162,39,0.1) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.3em] text-center text-xs mb-4"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 500,
            color: "#E8D5A3",
          }}
        >
          Join us for
        </motion.p>

        {/* Section title */}
        <motion.h2
          id="reception-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center mb-6"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
            letterSpacing: "0.12em",
            fontWeight: 400,
            color: "#E8D5A3",
          }}
        >
          Reception
        </motion.h2>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-rule-sm mb-12"
        />

        {/* Two-column layout (stacks on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — elegant date & time callout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Date large display */}
            <p
              className="mb-2 uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "0.65rem",
                color: "#E8D5A3",
              }}
            >
              Date
            </p>
            <p
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                color: "#E8D5A3",
                letterSpacing: "0.1em",
                lineHeight: 1.3,
              }}
            >
              20 September
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 7vw, 4rem)",
                color: "#C9A227",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              2026
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-soft-gold my-5 lg:mr-auto" />

            {/* Time */}
            <p
              className="mb-1 uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "0.6rem",
                color: "#E8D5A3",
              }}
            >
              Time
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                color: "#F5EDD4",
                fontStyle: "italic",
              }}
            >
              6:00 PM – 9:00 PM
            </p>

            {/* Evening star ornament */}
            <div className="flex items-center gap-3 mt-6 text-soft-gold opacity-60" aria-hidden="true">
              <span style={{ fontSize: "0.5rem" }}>✦</span>
              <span style={{ fontSize: "0.7rem" }}>✦</span>
              <span style={{ fontSize: "0.5rem" }}>✦</span>
            </div>
          </motion.div>

          {/* Right — venue card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="relative"
          >
            {/* Outer gold border box */}
            <div
              className="absolute -inset-3 rounded-xl pointer-events-none"
              style={{ border: "1px solid rgba(201,162,39,0.2)" }}
              aria-hidden="true"
            />
            <div
              className="rounded-lg p-7 sm:p-9 flex flex-col gap-6"
              style={{
                background: "rgba(255,249,240,0.06)",
                border: "1px solid rgba(201,162,39,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <DetailItem label="Venue" value="Sree Bhagavati Temple Auditorium" />
              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)" }}
              />
              <DetailItem label="Address" value="Elikulam, Kottayam Dt." />

              {/* Maps button */}
              <a
                id="reception-maps-btn"
                href="https://maps.app.goo.gl/ALu6oyuVz6Pxvpgb7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 self-start px-6 py-3"
                style={{
                  border: "1px solid rgba(201,162,39,0.5)",
                  color: "#E8D5A3",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
                aria-label="Get directions to Sree Bhagavati Temple Auditorium"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(201,162,39,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(201,162,39,0.8)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(201,162,39,0.5)";
                }}
              >
                <span aria-hidden="true">📍</span>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
