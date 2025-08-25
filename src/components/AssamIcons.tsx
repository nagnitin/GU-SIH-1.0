import React from 'react';

interface AssamIconProps {
  type: 'gamusa' | 'japi' | 'tea' | 'bihu' | 'brahmaputra' | 'tea-garden' | 'biodiversity' | 'heritage';
  className?: string;
  size?: number;
}

const AssamIcons: React.FC<AssamIconProps> = ({ type, className = '', size = 24 }) => {
  const icons = {
    gamusa: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
        <rect x="2" y="2" width="20" height="2" fill="currentColor"/>
        <rect x="2" y="20" width="20" height="2" fill="currentColor"/>
        <rect x="2" y="2" width="2" height="20" fill="currentColor"/>
        <rect x="20" y="2" width="2" height="20" fill="currentColor"/>
        <circle cx="6" cy="6" r="1" fill="currentColor"/>
        <circle cx="18" cy="6" r="1" fill="currentColor"/>
        <circle cx="6" cy="18" r="1" fill="currentColor"/>
        <circle cx="18" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
    japi: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <ellipse cx="12" cy="8" rx="10" ry="6" fill="none" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="12" cy="8" rx="8" ry="4" fill="currentColor" opacity="0.3"/>
        <path d="M12 2 L12 14" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="4" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    tea: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <ellipse cx="12" cy="16" rx="8" ry="6" fill="none" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="12" cy="16" rx="6" ry="4" fill="currentColor" opacity="0.3"/>
        <path d="M18 16 L22 16 L22 12 L18 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M12 8 L12 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M10 6 L14 6" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M9 4 L15 4" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
        <circle cx="14" cy="14" r="0.5" fill="currentColor"/>
      </svg>
    ),
    bihu: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12 2 L12 6" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M12 18 L12 22" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M2 12 L6 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M18 12 L22 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="4" r="1" fill="currentColor"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
        <circle cx="4" cy="12" r="1" fill="currentColor"/>
        <circle cx="20" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    brahmaputra: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <path d="M2 8 Q6 6 10 8 Q14 10 18 8 Q22 6 22 8 L22 16 Q18 18 14 16 Q10 14 6 16 Q2 18 2 16 Z" fill="currentColor" opacity="0.3"/>
        <path d="M2 8 Q6 6 10 8 Q14 10 18 8 Q22 6 22 8" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M2 16 Q6 18 10 16 Q14 14 18 16 Q22 18 22 16" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="6" cy="12" r="0.5" fill="currentColor"/>
        <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
        <circle cx="18" cy="12" r="0.5" fill="currentColor"/>
      </svg>
    ),
    'tea-garden': (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <circle cx="6" cy="18" r="2" fill="currentColor"/>
        <circle cx="12" cy="16" r="2" fill="currentColor"/>
        <circle cx="18" cy="18" r="2" fill="currentColor"/>
        <circle cx="9" cy="14" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
        <path d="M2 20 L22 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M6 18 L6 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M12 16 L12 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M18 18 L18 20" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    ),
    biodiversity: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <path d="M12 2 L12 22" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M2 12 L22 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="8" cy="8" r="1" fill="currentColor"/>
        <circle cx="16" cy="8" r="1" fill="currentColor"/>
        <circle cx="8" cy="16" r="1" fill="currentColor"/>
        <circle cx="16" cy="16" r="1" fill="currentColor"/>
        <circle cx="12" cy="6" r="0.5" fill="currentColor"/>
        <circle cx="12" cy="18" r="0.5" fill="currentColor"/>
        <circle cx="6" cy="12" r="0.5" fill="currentColor"/>
        <circle cx="18" cy="12" r="0.5" fill="currentColor"/>
      </svg>
    ),
    heritage: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
        <path d="M12 2 L12 8" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M8 8 L16 8" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M6 8 L6 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M18 8 L18 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M6 20 L18 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="8" y="10" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="14" r="1" fill="currentColor"/>
        <path d="M10 12 L14 12" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M10 16 L14 16" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  };

  return icons[type] || null;
};

export default AssamIcons; 