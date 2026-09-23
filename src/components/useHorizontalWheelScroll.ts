import { useEffect, useRef, useCallback } from 'react';

/**
 * High-performance hook for horizontal card tracks:
 * 1. Intercepts vertical mouse-wheel events and translates them to horizontal scrolling.
 * 2. Injects `data-lenis-prevent="true"` to prevent parent Lenis smooth-scroll from hijacking wheel events.
 * 3. Supports smooth mouse grab-and-drag for natural swipe navigation on desktop.
 * 4. Provides programmatic step scroll handlers.
 */
export function useHorizontalWheelScroll<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    containerRef.current = node;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Guarantee Lenis does not intercept wheel events inside this container
    el.setAttribute('data-lenis-prevent', 'true');

    // 1. Wheel listener: Translate mouse wheel to horizontal translation
    const handleWheel = (e: WheelEvent) => {
      // Check if user is scrolling vertically or horizontally
      const isHorizontalDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontalDelta ? e.deltaX : e.deltaY;

      if (Math.abs(delta) < 1) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 2) return; // No horizontal overflow to scroll

      const canScrollLeft = delta < 0 && el.scrollLeft > 0;
      const canScrollRight = delta > 0 && el.scrollLeft < maxScroll - 2;

      if (canScrollLeft || canScrollRight) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollLeft += delta * 1.25;
      }
    };

    // 2. Click & Drag support for desktop mouse users
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      // Only drag with primary mouse button
      if (e.button !== 0) return;
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = 'grab';
      el.style.removeProperty('user-select');
    };

    const handleMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = 'grab';
      el.style.removeProperty('user-select');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.4; // Multiplier for smooth dragging
      el.scrollLeft = scrollLeft - walk;
    };

    el.style.cursor = 'grab';
    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollByAmount = useCallback((amount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth',
      });
    }
  }, []);

  const scrollLeft = useCallback(() => scrollByAmount(-380), [scrollByAmount]);
  const scrollRight = useCallback(() => scrollByAmount(380), [scrollByAmount]);

  return {
    ref: setRef,
    containerRef,
    scrollLeft,
    scrollRight,
  };
}

export default useHorizontalWheelScroll;
