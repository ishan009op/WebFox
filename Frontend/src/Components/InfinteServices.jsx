import { useRef, useEffect, useState } from "react";

const InfiniteServices = ({ children, speed = 1 }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPosRef = useRef(0); // persist scroll position

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth / 2; // because we duplicate content

    let animationFrame;

    const scroll = () => {
      if (!isPaused) {
        scrollPosRef.current += speed;
        if (scrollPosRef.current >= totalScrollWidth) {
          scrollPosRef.current = 0; // loop seamlessly
        }
        container.scrollLeft = scrollPosRef.current;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, speed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="flex gap-6 overflow-x-hidden cursor-grab"
    >
      {children}
    </div>
  );
};

export default InfiniteServices;
