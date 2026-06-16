"use client";

import { motion } from "framer-motion";

interface VyuhLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export function VyuhLogo({ size = 48, animate = false, className = "" }: VyuhLogoProps) {
  const h = size * 0.625; // aspect 48:30

  const pulse = animate
    ? {
        scale: [1, 1.08, 1],
        opacity: [0.15, 0.35, 0.15],
      }
    : {};

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer glow rings (animated only) */}
      {animate && (
        <>
          <motion.circle
            cx="24" cy="15" r="22"
            stroke="#FF1E1E" strokeWidth="0.4" fill="none"
            animate={{ opacity: [0.08, 0.2, 0.08], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "24px 15px" }}
          />
          <motion.circle
            cx="24" cy="15" r="26"
            stroke="#FF1E1E" strokeWidth="0.3" fill="none"
            animate={{ opacity: [0.05, 0.12, 0.05], scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "24px 15px" }}
          />
        </>
      )}

      {/* Grid connection lines — background layer */}
      <line x1="0" y1="0" x2="48" y2="0" stroke="white" strokeWidth="0.4" opacity="0.08" />
      <line x1="12" y1="12" x2="36" y2="12" stroke="white" strokeWidth="0.4" opacity="0.08" />

      {/* V-shape arms */}
      <line x1="0"  y1="0"  x2="12" y2="12" stroke="#FF1E1E" strokeWidth="0.9" opacity="0.6" />
      <line x1="12" y1="12" x2="24" y2="24" stroke="#FF1E1E" strokeWidth="0.9" opacity="0.6" />
      <line x1="48" y1="0"  x2="36" y2="12" stroke="#FF1E1E" strokeWidth="0.9" opacity="0.6" />
      <line x1="36" y1="12" x2="24" y2="24" stroke="#FF1E1E" strokeWidth="0.9" opacity="0.6" />

      {/* Cross-connections (matrix feel) */}
      <line x1="0"  y1="0"  x2="12" y2="12" stroke="white" strokeWidth="0.3" opacity="0.15" />
      <line x1="48" y1="0"  x2="36" y2="12" stroke="white" strokeWidth="0.3" opacity="0.15" />

      {/* Inactive / ghost nodes */}
      <circle cx="24" cy="0"  r="1.5" fill="white" opacity="0.15" />
      <circle cx="0"  cy="12" r="1.2" fill="white" opacity="0.1"  />
      <circle cx="48" cy="12" r="1.2" fill="white" opacity="0.1"  />
      <circle cx="0"  cy="24" r="1"   fill="white" opacity="0.07" />
      <circle cx="12" cy="24" r="1"   fill="white" opacity="0.07" />
      <circle cx="36" cy="24" r="1"   fill="white" opacity="0.07" />
      <circle cx="48" cy="24" r="1"   fill="white" opacity="0.07" />

      {/* Active V nodes — glow halos */}
      <circle cx="0"  cy="0"  r="6" fill="#FF1E1E" opacity="0.12" />
      <circle cx="48" cy="0"  r="6" fill="#FF1E1E" opacity="0.12" />
      <circle cx="12" cy="12" r="5" fill="#FF1E1E" opacity="0.1"  />
      <circle cx="36" cy="12" r="5" fill="#FF1E1E" opacity="0.1"  />
      <circle cx="24" cy="24" r="7" fill="#FF1E1E" opacity="0.18" />

      {/* Active V nodes — solid */}
      <circle cx="0"  cy="0"  r="2.5" fill="#FF1E1E" />
      <circle cx="48" cy="0"  r="2.5" fill="#FF1E1E" />
      <circle cx="12" cy="12" r="2.5" fill="#FF1E1E" />
      <circle cx="36" cy="12" r="2.5" fill="#FF1E1E" />
      <circle cx="24" cy="24" r="3"   fill="#FF1E1E" />

      {/* Apex highlight (brightest node) */}
      <circle cx="24" cy="24" r="1.2" fill="white" opacity="0.9" />
    </svg>
  );
}
