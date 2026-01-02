import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Services from './Services.jsx';
import UseScrollToHash from './UseScrollToHash.js';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ContactModal from './ContactModal.jsx';


const Home = () => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("");

  UseScrollToHash()
  

  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-3 md:mx-10 my-3 md:my-6 rounded-3xl overflow-hidden bg-slate-950">
        {/* Blur shapes */}
        <div className="absolute -top-24 -left-24 w-56 h-56 md:w-96 md:h-96
                        bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute top-2/4 -right-24 w-56 h-56 md:w-96 md:h-96
                        bg-amber-400/30 rounded-full blur-3xl" />

        <div className="relative flex flex-col items-center justify-center text-center
                        px-4 md:px-20
                        min-h-[70vh] md:min-h-[85vh]">
          <h1 className="text-2xl md:text-5xl font-bold text-white leading-snug md:leading-tight max-w-4xl">
            Creative Design & Marketing Solutions for{" "}
            <span className="text-amber-400">Growing Businesses</span>
          </h1>

          <p className="mt-4 text-slate-300 text-xs md:text-base max-w-xl">
            From visual branding to digital & on-ground marketing — we help brands
            stand out and grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
            <button
              onClick={() => {
                setSource("get-started");
                setOpen(true);
              }}
              className="bg-amber-400 text-slate-900 px-6 py-3 rounded-full
                         text-sm font-semibold hover:bg-amber-500 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => {
                setSource("consult");
                setOpen(true);
              }}
              className="border border-slate-400 text-slate-100 px-6 py-3 rounded-full
                         text-sm font-medium hover:bg-slate-100 hover:text-slate-900 transition"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Services />
      <About />
      <Contact />

      {/* Contact Modal */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
      />

     {/* <AdminPanel/> */}
    </>
  );
};

export default Home;
