import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "error" | "success"

  const addContact = async (e) => {
    e.preventDefault();

    if (!Name || !Email) {
      setMessage({ text: "Please fill all required fields.", type: "error" });
      return;
    }

    try {
      setLoading(true);
      setMessage({ text: "", type: "" });

      await axios.post("https://webfox-ue5o.onrender.com/api/user", {
        name: Name,
        email: Email,
      });

      setMessage({ text: "Subscription successful! Thank you.", type: "success" });
      SetName("");
      SetEmail("");
    } catch (error) {
      setMessage({
        text:
          error.response?.data?.message ||
          "Failed to submit. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  id="contact"
  className="relative mx-3 md:mx-10 lg:mx-20 my-16 md:my-24 rounded-3xl bg-slate-950 overflow-hidden scroll-mt-28"
>
  {/* Floating Background Shapes */}
  <motion.div
    className="absolute -top-24 -right-24 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/30 rounded-full"
    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-24 -left-24 w-48 h-48 md:w-96 md:h-96 bg-amber-400/30 rounded-full"
    animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute top-16 left-1/2 w-24 h-24 border-t-2 border-l-2 border-amber-400 rounded-sm opacity-40"
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  />

  <div className="relative px-6 md:px-10 lg:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center lg:text-left"
    >
      <p className="text-amber-400 text-sm font-semibold tracking-wide mb-3 animate-pulse">
        CONTACT US
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-md"
      >
        Let's build something <span className="text-amber-400">meaningful</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-slate-300 text-sm md:text-base max-w-md mx-auto lg:mx-0"
      >
        Tell us about your business, idea, or project. We'll handle it with creativity and precision.
      </motion.p>
    </motion.div>

    {/* RIGHT FORM */}
    <motion.form
      onSubmit={addContact}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 md:p-10 space-y-5 shadow-2xl w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Feedback Message */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`p-3 rounded-md text-sm font-medium ${
              message.type === "error"
                ? "bg-red-600/70 text-white"
                : "bg-emerald-500/70 text-white"
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      <input
        type="text"
        value={Name}
        onChange={(e) => SetName(e.target.value)}
        placeholder="Your Name"
        required
        className="w-full bg-slate-800 text-slate-100 px-4 py-3 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      />

      <input
        type="email"
        value={Email}
        onChange={(e) => SetEmail(e.target.value)}
        placeholder="Email Address"
        required
        className="w-full bg-slate-800 text-slate-100 px-4 py-3 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      />

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-amber-400 text-slate-900 font-semibold py-3 rounded-full disabled:opacity-50 flex justify-center items-center gap-2"
      >
        {loading && (
          <motion.span
            className="w-5 h-5 border-2 border-t-slate-900 border-slate-900 rounded-full animate-spin"
          />
        )}
        {loading ? "Subscribing..." : "Subscribe"}
      </motion.button>
    </motion.form>
  </div>
</section>

  );
};

export default Contact;
