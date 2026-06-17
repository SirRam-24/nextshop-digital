import React from 'react';

export default function HMILogo({ className = 'w-10 h-10', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Red Left Band */}
      <polygon
        points="7,90 33,90 64,50 69,10"
        fill="#E31E24"
      />
      
      {/* Green Middle Band */}
      <polygon
        points="64,50 69,10 87,70 76,90"
        fill="#0A9646"
      />
      
      {/* Yellow Right Corner */}
      <polygon
        points="76,90 87,70 93,90"
        fill="#FDB813"
      />
    </svg>
  );
}
