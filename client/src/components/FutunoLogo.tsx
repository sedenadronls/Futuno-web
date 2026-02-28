/**
 * FUTUNO Logo Component
 * 
 * Design Philosophy:
 * - FUT = Future (forward-pointing arrow/chevron representing progress)
 * - UNO = Universe (circular orbital ring representing infinity/cosmos)
 * 
 * The logo combines a dynamic forward arrow breaking through a cosmic ring,
 * symbolizing innovation propelling into the infinite universe.
 */

interface FutunoLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function FutunoLogo({ 
  size = 40, 
  className = '',
  showText = true 
}: FutunoLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Symbol - SVG-based for reliable rendering on all deployments */}
      <div 
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 122, 255, 0.4))' }}
        >
          <defs>
            <linearGradient id="futunoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A3FF" />
              <stop offset="50%" stopColor="#007AFF" />
              <stop offset="100%" stopColor="#0055CC" />
            </linearGradient>
            <filter id="glowMain" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="42" stroke="url(#futunoGradientMain)" strokeWidth="5" fill="none" filter="url(#glowMain)" />
          <path d="M30 50 L55 30 L55 42 L75 42 L75 58 L55 58 L55 70 Z" fill="url(#futunoGradientMain)" filter="url(#glowMain)" />
          <circle cx="50" cy="50" r="4" fill="url(#futunoGradientMain)" />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span 
          className="font-bold tracking-tight text-foreground"
          style={{ 
            fontSize: size * 0.55,
            letterSpacing: '-0.02em',
          }}
        >
          FUTUNO
        </span>
      )}
    </div>
  );
}

/**
 * SVG-based Logo Icon for favicon and small sizes
 * This is a simplified vector version for better scaling
 */
export function FutunoLogoIcon({ 
  size = 32, 
  className = '' 
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="futunoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#0055CC" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer Ring - Universe/Infinity */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="url(#futunoGradient)"
        strokeWidth="5"
        fill="none"
        filter="url(#glow)"
      />
      
      {/* Forward Arrow - Future/Progress */}
      <path
        d="M30 50 L55 30 L55 42 L75 42 L75 58 L55 58 L55 70 Z"
        fill="url(#futunoGradient)"
        filter="url(#glow)"
      />
      
      {/* Inner accent dot - representing the "one" in universe */}
      <circle
        cx="50"
        cy="50"
        r="4"
        fill="url(#futunoGradient)"
      />
    </svg>
  );
}
