import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 mt-20 rounded-t-3xl overflow-hidden">
      
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative px-6 md:px-12 py-14 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white">
            Brand<span className="text-amber-400">Craft</span>
          </h3>
          <p className="text-sm mt-3 text-slate-400">
            Creative design & marketing solutions that help brands grow,
            connect, and stand out in the market.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Graphic Design</li>
            <li>Content Creation</li>
            <li>Social Media Management</li>
            <li>Paid Advertising</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Your City, India</li>
            <li>📧 hello@yourbrand.com</li>
            <li>📞 +91 XXXXX XXXXX</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>

          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className="hover:text-amber-400 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-amber-400 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-amber-400 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.6 4.6 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} BrandCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
