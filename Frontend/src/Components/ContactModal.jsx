import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ open, onClose, source }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg bg-slate-900 rounded-2xl p-6 md:p-8 space-y-4"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {source === "consult" ? "Book a Consultation" : "Get Started"}
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Tell us about your project. We’ll get back to you within 24 hours.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="text"
              placeholder="Budget"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            />

            <select
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Looking For</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="branding">Branding</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="consultation">Consultation</option>
            </select>

            <textarea
              rows="4"
              placeholder="Project Description"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-amber-400"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-amber-400 text-slate-900 font-semibold py-3 rounded-full"
            >
              Submit
            </motion.button>
          </form>

          <button
            onClick={onClose}
            className="text-slate-500 text-xs mt-4 block mx-auto"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
