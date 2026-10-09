import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Uses IntersectionObserver to trigger high-performance, GPU-accelerated
 * fade & slide animations once when entering viewport.
 */
export default function ScrollReveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'clip'
  delay = 0, // delay in ms
  duration = 800, // duration in ms (0.6–1s feels smooth)
  distance = 28, // distance in px (kept small = gentle slide)
  className = '',
  threshold = 0.15,
  triggerClosest, // CSS selector: observe this ancestor instead of the element itself (for items inside horizontal scrollers)
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  // Reduced-motion users still get a gentle fade (no sliding/zooming) so sections never appear 'static'.
  const reduced = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;
  const [isDone, setIsDone] = useState(false); // animation finished -> release inline styles
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const own = elementRef.current;
    const currentEl = (triggerClosest && own?.closest(triggerClosest)) || own;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, triggerClosest]);

  const getTransform = () => {
    if (isVisible || reduced) return 'translate3d(0, 0, 0) scale(1)';

    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'zoom':
        return 'scale(0.96)';
      case 'clip':
        return 'scale(1.06)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <Component
      ref={elementRef}
      className={className}
      onTransitionEnd={(e) => {
        // Once the reveal finishes, drop inline transform/transition so hover
        // effects and transitions defined by className work normally again.
        if (e.target === e.currentTarget && e.propertyName === 'opacity') setIsDone(true);
      }}
      style={
        isDone
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transform: getTransform(),
              clipPath: direction === 'clip' && !reduced ? (isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(10% 8% 10% 8%)') : undefined,
              transition: reduced
                ? `opacity 600ms ease-out ${Math.min(delay, 200)}ms`
                : `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, clip-path ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
              willChange: 'opacity, transform'
            }
      }
      {...props}
    >
      {children}
    </Component>
  );
}
