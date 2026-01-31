import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -20]);
  const y2 = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    // <section
    //   id="about"
    //   className="scroll-mt-28 relative bg-slate-950 py-28 px-4 md:px-10 overflow-hidden"
    // >
    //   {/* ===== BACKGROUND SHAPES ===== */}

    //   {/* Gradient shards */}
    //   <motion.div
    //     style={{ y: y1 }}
    //     className="absolute -top-32 -left-32 w-80 h-2 bg-gradient-to-r from-amber-400/60 to-green-400/20 rotate-12 opacity-50 rounded-lg"
    //     animate={{ x: [0, 20, 0] }}
    //     transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
    //   />
    //   <motion.div
    //     style={{ y: y2 }}
    //     className="absolute -bottom-24 -right-32 w-96 h-2 bg-gradient-to-r from-cyan-400/50 to-indigo-500/25 rotate-45 opacity-50 rounded-lg"
    //     animate={{ x: [0, -20, 0] }}
    //     transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
    //   />

    //   {/* Floating diamonds */}
    //   <motion.div
    //     className="absolute top-16 right-8 w-12 h-12 border-t-2 border-r-2 border-amber-400 rounded-sm opacity-40"
    //     animate={{ rotate: [0, 360] }}
    //     transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    //   />
    //   <motion.div
    //     className="absolute bottom-16 left-16 w-10 h-10 border-l-2 border-b-2 border-cyan-400 rounded-sm opacity-40"
    //     animate={{ rotate: [0, -360] }}
    //     transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    //   />

    //   {/* Subtle shimmer line */}
    //   <motion.div
    //     className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-amber-400/20 via-white/30 to-cyan-400/20 opacity-40"
    //     animate={{ x: [0, 50, 0] }}
    //     transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
    //   />

    //   {/* ===== CONTENT ===== */}
    //   <div className="relative max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center z-10">
    //     {/* LEFT TEXT */}
    //     <motion.div
    //       initial={{ opacity: 0, x: -50 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //     >
    //       <p className="text-amber-400 text-sm font-semibold tracking-wide mb-3 animate-pulse">
    //         ABOUT US
    //       </p>

    //       <motion.h2
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8, delay: 0.1 }}
    //         className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md"
    //       >
    //         We build brands that <span className="text-amber-400">stand out</span> in a crowded market
    //       </motion.h2>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //         className="text-slate-300 text-sm md:text-base max-w-xl mb-4"
    //       >
    //         We are a premium design & marketing team delivering visually strong,
    //         performance-driven solutions. Strategy + creativity + execution = measurable business growth.
    //       </motion.p>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8, delay: 0.3 }}
    //         className="text-slate-400 text-sm max-w-xl"
    //       >
    //         Flexible, scalable, and designed to impress — content and visuals editable anytime.
    //       </motion.p>
    //     </motion.div>

    //     {/* RIGHT PREMIUM GLASS CARD */}
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.95 }}
    //       whileInView={{ opacity: 1, scale: 1 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    //       className="relative bg-[#0B1220]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-12 shadow-2xl"
    //     >
    //       <div className="grid grid-cols-2 gap-8 text-center">
    //         {[
    //           { number: "5+", label: "Years Experience" },
    //           { number: "100+", label: "Projects" },
    //           { number: "50+", label: "Brands" },
    //           { number: "∞", label: "Ideas" },
    //         ].map((item, i) => (
    //           <motion.div
    //             key={i}
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             transition={{ duration: 0.5, delay: 0.1 * i }}
    //             whileHover={{ scale: 1.05 }}
    //             className="cursor-default"
    //           >
    //             <p className="text-3xl md:text-4xl font-bold text-white">{item.number}</p>
    //             <p className="text-slate-400 text-sm mt-1">{item.label}</p>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
    <></>
  );
};

export default About;
