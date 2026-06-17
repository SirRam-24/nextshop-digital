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
        points="12.5,90 32.5,90 62.5,50 72.5,10"
        fill="#E31E24"
      />
      
      {/* Green Middle Band */}
      <polygon
        points="62.5,50 72.5,10 83.75,70 70,90"
        fill="#0A9646"
      />
      
      {/* Yellow Right Corner */}
      <polygon
        points="70,90 83.75,70 87.5,90"
        fill="#FDB813"
      />
    </svg>
  );
}
