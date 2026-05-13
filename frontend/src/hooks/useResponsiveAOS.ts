import { useEffect, useState } from 'react';

interface ResponsiveAOSOptions {
  mobileEffect: string;
  desktopEffect: string;
  breakpoint?: number; // Default: 768px (Tailwind's md breakpoint)
}

export const useResponsiveAOS = ({
  mobileEffect,
  desktopEffect,
  breakpoint = 768,
}: ResponsiveAOSOptions): string => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile ? mobileEffect : desktopEffect;
};
