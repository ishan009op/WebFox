import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring motion
  const smoothX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none
                 w-6 h-6 rounded-full bg-amber-400 mix-blend-difference"
    />
  );
};

export default CursorFollower;
