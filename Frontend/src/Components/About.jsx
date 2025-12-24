import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 relative bg-slate-950 py-20 px-4 md:px-10 overflow-hidden"
    >
      {/* ===== DIAGONAL BLUR BLOBS (SAME SHAPE STYLE) ===== */}

      {/* Top Right Blob */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[420px] h-[420px] md:w-[520px] md:h-[520px]
                   rounded-full bg-indigo-500/25 blur-[140px]"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Left Blob */}
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] md:w-[520px] md:h-[520px]
                   rounded-full bg-amber-400/25 blur-[140px]"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-amber-400 text-sm font-semibold tracking-wide mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            We build brands that{" "}
            <span className="text-amber-400">stand out</span> in a crowded market
          </h2>

          <p className="mt-5 text-slate-300 text-sm md:text-base max-w-xl">
            We are a creative design and marketing team focused on delivering
            visually strong, performance-driven solutions. Our approach blends
            strategy, creativity, and execution to help businesses grow with
            confidence.
          </p>

          <p className="mt-4 text-slate-400 text-sm max-w-xl">
            This content is editable anytime without changing the design or
            layout.
          </p>
        </motion.div>

        {/* RIGHT STATS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="bg-[#0B1220]/90 backdrop-blur border border-slate-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-slate-400 text-sm mt-1">Years Experience</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-slate-400 text-sm mt-1">Projects</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm mt-1">Brands</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-slate-400 text-sm mt-1">Ideas</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
