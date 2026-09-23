import { useEffect, useRef } from 'react';

/**
 * Custom hook that smoothly translates vertical mouse wheel scrolling into horizontal scrolling
 * when the mouse is hovering over the target element.
 */
export function useHorizontalWheelScroll<T extends HTMLElement = HTMLDivElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If user is scrolling vertically with the mouse wheel
      if (Math.abs(e.deltaY) > 0) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        // Check if there is room to scroll horizontally
        const canScrollLeft = e.deltaY < 0 && el.scrollLeft > 0;
        const canScrollRight = e.deltaY > 0 && el.scrollLeft < maxScroll - 1;

        if (canScrollLeft || canScrollRight) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 1.25;
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return elementRef;
}

export default useHorizontalWheelScroll;
