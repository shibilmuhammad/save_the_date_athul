"use client";

const petals = [
  {
    id: 1,
    left: "8%",
    delay: "0s",
    animClass: "petal-anim-1",
    size: 14,
    color: "#E8D5A3",
    opacity: 0.6,
  },
  {
    id: 2,
    left: "22%",
    delay: "3s",
    animClass: "petal-anim-2",
    size: 10,
    color: "#F2D2C8",
    opacity: 0.5,
  },
  {
    id: 3,
    left: "40%",
    delay: "1.5s",
    animClass: "petal-anim-3",
    size: 12,
    color: "#C9A227",
    opacity: 0.35,
  },
  {
    id: 4,
    left: "58%",
    delay: "5s",
    animClass: "petal-anim-4",
    size: 9,
    color: "#E8D5A3",
    opacity: 0.55,
  },
  {
    id: 5,
    left: "75%",
    delay: "2s",
    animClass: "petal-anim-1",
    size: 13,
    color: "#F2D2C8",
    opacity: 0.45,
  },
  {
    id: 6,
    left: "88%",
    delay: "7s",
    animClass: "petal-anim-5",
    size: 11,
    color: "#C9A227",
    opacity: 0.3,
  },
  {
    id: 7,
    left: "15%",
    delay: "9s",
    animClass: "petal-anim-3",
    size: 10,
    color: "#E8A0A0",
    opacity: 0.4,
  },
  {
    id: 8,
    left: "50%",
    delay: "6s",
    animClass: "petal-anim-2",
    size: 8,
    color: "#F2D2C8",
    opacity: 0.5,
  },
  {
    id: 9,
    left: "65%",
    delay: "4s",
    animClass: "petal-anim-4",
    size: 15,
    color: "#E8D5A3",
    opacity: 0.35,
  },
  {
    id: 10,
    left: "32%",
    delay: "11s",
    animClass: "petal-anim-5",
    size: 9,
    color: "#C9A227",
    opacity: 0.4,
  },
];

// Lotus petal SVG path
function LotusLeaf({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 20 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 31 C10 31, 1 22, 1 13 C1 6, 5 1, 10 1 C15 1, 19 6, 19 13 C19 22, 10 31, 10 31Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M10 31 C10 31, 1 22, 1 13 C1 6, 5 1, 10 1"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`petal ${petal.animClass}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          <LotusLeaf size={petal.size} color={petal.color} />
        </div>
      ))}
    </div>
  );
}
