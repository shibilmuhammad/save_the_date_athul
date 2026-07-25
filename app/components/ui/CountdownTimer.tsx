"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const weddingDate = new Date("2026-09-13T10:00:00+05:30");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(weddingDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const units = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5" aria-label="Countdown to the wedding">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
          <div className="countdown-box">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-soft-gold"
              style={{ fontFamily: "var(--font-cinzel), serif", letterSpacing: "0.05em" }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span
              className="text-[10px] sm:text-xs text-text-light uppercase tracking-widest"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-soft-gold text-xl sm:text-2xl font-light mb-4" aria-hidden="true">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
