"use client";

// Decorative SVG mandala for backgrounds
export default function MandalaBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`mandala-bg ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 800"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-slow"
        style={{ width: "min(900px, 130vw)", height: "min(900px, 130vw)", opacity: 0.5 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rings */}
        <circle cx="400" cy="400" r="390" stroke="#C9A227" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="360" stroke="#C9A227" strokeWidth="0.3" />
        <circle cx="400" cy="400" r="320" stroke="#C9A227" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="280" stroke="#C9A227" strokeWidth="0.3" />
        <circle cx="400" cy="400" r="240" stroke="#C9A227" strokeWidth="0.5" />

        {/* 16 petals outer ring */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x = 400 + 350 * Math.cos(rad);
          const y = 400 + 350 * Math.sin(rad);
          return (
            <ellipse
              key={`outer-petal-${i}`}
              cx={x}
              cy={y}
              rx="12"
              ry="30"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
              fill="#C9A227"
              opacity="0.6"
            />
          );
        })}

        {/* 12 petals middle ring */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x = 400 + 270 * Math.cos(rad);
          const y = 400 + 270 * Math.sin(rad);
          return (
            <ellipse
              key={`mid-petal-${i}`}
              cx={x}
              cy={y}
              rx="10"
              ry="24"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
              fill="#C9A227"
              opacity="0.5"
            />
          );
        })}

        {/* 8 lotus petals inner */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const x = 400 + 210 * Math.cos(rad);
          const y = 400 + 210 * Math.sin(rad);
          return (
            <ellipse
              key={`inner-petal-${i}`}
              cx={x}
              cy={y}
              rx="14"
              ry="40"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
              fill="#C9A227"
              opacity="0.7"
            />
          );
        })}

        {/* Radial lines */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = 400 + 100 * Math.cos(rad);
          const y1 = 400 + 100 * Math.sin(rad);
          const x2 = 400 + 380 * Math.cos(rad);
          const y2 = 400 + 380 * Math.sin(rad);
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#C9A227"
              strokeWidth="0.3"
              opacity="0.4"
            />
          );
        })}

        {/* Center circles */}
        <circle cx="400" cy="400" r="80" stroke="#C9A227" strokeWidth="1" fill="none" />
        <circle cx="400" cy="400" r="50" stroke="#C9A227" strokeWidth="0.5" fill="none" />
        <circle cx="400" cy="400" r="20" fill="#C9A227" opacity="0.3" />
      </svg>
    </div>
  );
}
