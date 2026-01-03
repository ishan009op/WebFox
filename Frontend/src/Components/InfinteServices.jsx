import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const InfiniteServices = ({ children }) => {
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    const speed = 0.05; // adjust speed here
    x.current -= delta * speed;

    const width = containerRef.current?.scrollWidth / 2;

    if (x.current <= -width) {
      x.current = 0;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex gap-6 w-max"
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteServices;
