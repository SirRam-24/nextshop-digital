import React from 'react';

export default function NextshopLogo({ className = 'w-10 h-10', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Gradients to create the 3D folded ribbon effect */}
        <linearGradient id="blue-ribbon-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#0055FF" />
        </linearGradient>
        <linearGradient id="blue-ribbon-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0033DD" />
          <stop offset="100%" stopColor="#0088FF" />
        </linearGradient>
        <linearGradient id="blue-ribbon-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0055FF" />
          <stop offset="100%" stopColor="#00B0FF" />
        </linearGradient>
        
        {/* Subtle drop shadow under folds */}
        <filter id="ribbon-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#ribbon-shadow)">
        {/* 1. Left Vertical leg (folded under) */}
        <path
          d="M31 75 C31 75 32 60 36 45 C38 37 41.5 27.5 45.5 27.5 C47.5 27.5 49 29.5 50 31.5 L60.5 50.5 L54 52.5 L45 34 C44 32 42.5 32 41.5 34.5 C38.5 42 33 60 31 75 Z"
          fill="url(#blue-ribbon-left)"
        />

        {/* 2. Diagonal folded ribbon segment (on top of left, under right) */}
        <path
          d="M45.5 27.5 L60.5 50.5 L60.5 67 C60.5 70 59 72.5 57 72.5 C55 72.5 53 71.5 52 69.5 L39.5 47 L45.5 27.5 Z"
          fill="url(#blue-ribbon-mid)"
          opacity="0.95"
        />

        {/* 3. Right vertical leg ending in arrowhead */}
        <path
          d="M52 69.5 C52 69.5 55 60 59 47 C62.5 36 67.5 22 67.5 22 L56.5 27.5 L71 21 L70 36 L65 30 C65 30 60 44 57 54 C54 64 52 69.5 52 69.5 Z"
          fill="url(#blue-ribbon-right)"
        />
      </g>
    </svg>
  );
}
