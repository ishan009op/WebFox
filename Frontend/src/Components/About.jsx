import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className=" scroll-mt-28 relative bg-slate-950 py-20 px-4 md:px-10 overflow-hidden">
      
      {/* Background blur accents */}
      <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96
                      bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-64 h-64 md:w-96 md:h-96
                      bg-amber-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT: Text */}
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
            {/* Placeholder text – safe & editable */}
            We are a creative design and marketing team focused on delivering
            visually strong, performance-driven solutions. Our approach blends
            strategy, creativity, and execution to help businesses grow with
            confidence.
          </p>

          <p className="mt-4 text-slate-400 text-sm max-w-xl">
            This section can be updated later with your story, experience,
            values, and mission — without changing the layout or design.
          </p>
        </motion.div>

        {/* RIGHT: Visual / Stats Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="bg-[#0B1220] border border-slate-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 gap-6 text-center">
            
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-slate-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-slate-400 text-sm mt-1">
                Creative Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm mt-1">
                Brands Worked With
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-slate-400 text-sm mt-1">
                Ideas & Iterations
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
