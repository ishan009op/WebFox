import React, { useState } from "react";

import { motion } from "framer-motion";
import {Clock} from 'lucide-react'
import Services from "./Services.jsx";
import UseScrollToHash from "./UseScrollToHash.js";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import ContactModal from "./ContactModal.jsx";
import img from "/img.png";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("");

  UseScrollToHash();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
     {/* <section
  id="home"
  className="relative w-full min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
>

  <motion.div
    aria-hidden
    className="pointer-events-none absolute -top-28 -left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-gradient-to-br from-amber-400/30 to-green-400/30 rounded-full blur-[100px]"
    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
  />
  <motion.div
    aria-hidden
    className="pointer-events-none absolute -bottom-52 -right-36 w-80 h-80 md:w-[520px] md:h-[520px] bg-gradient-to-tr from-cyan-400/20 to-indigo-400/20 rounded-full blur-[120px]"
    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
  />

 
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center lg:text-left"
    >
      <h1 className="text-3xl mt-14 sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
        Designing brands that look premium,
        <br />
        <span className="text-amber-500">feel memorable, and convert.</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-lg lg:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0">
        We craft visual identities, marketing creatives, and brand systems
        that help businesses stand out, build trust, and scale faster.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <a
          href="#contact"
          className="px-6 text-center py-3 rounded-full bg-amber-400 text-slate-900 font-semibold hover:scale-105 transition"
        >
          Get in touch
        </a>

        <a
          href="#services"
          className="px-6 text-center py-3 rounded-full border border-slate-300 text-slate-800 font-medium hover:border-amber-400 transition"
        >
          View services
        </a>
      </div>
    </motion.div>

    
    <motion.div
      className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.15 }}
    >
    
      <div className="hidden lg:block">
        <motion.div
          className="absolute -top-3 -left-1 w-12 h-12 bg-amber-400 rounded-full"
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 w-16 h-16 bg-cyan-400 rounded-full"
          animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-8 h-8 bg-indigo-900 rounded-full"
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      <img
        src={img}
        alt="Hero illustration"
        className="w-full max-w-md rounded-2xl shadow-xl relative z-10"
      />
    </motion.div>
  </div>
</section> */}


      {/* ================= OTHER SECTIONS ================= */}
      {/* <Services />
      <About />
      <Contact /> */}

      {/* Contact Modal */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
      />




 <section className="mx-auto my-20 max-w-5xl rounded-2xl border border-cyan-200/20 bg-cyan-950 px-6 py-16 text-center">
      
      {/* Badge */}
      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-4 py-1 text-sm font-semibold text-yellow-300">
        <Clock className="h-4 w-4" />
        Coming Soon
      </span>

      {/* Heading */}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Something <span className="text-cyan-400">New</span> is Coming
      </h2>

      {/* Text */}
      <p className="mx-auto max-w-xl text-base leading-relaxed text-cyan-100/80 sm:text-lg">
        We’re working behind the scenes to launch something valuable for brands.
        Clean design. Strong identity. Stay tuned.
      </p>

    </section>





    </>
  );
};

export default Home;
