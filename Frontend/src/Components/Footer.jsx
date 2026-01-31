import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <></>
    // <footer className="relative bg-slate-950 text-slate-300 mt-20 overflow-hidden rounded-t-3xl">
      
    //   {/* Background Glow Shapes */}
    //   <motion.div
    //     className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
    //     animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
    //     transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
    //   />
    //   <motion.div
    //     className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"
    //     animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
    //     transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
    //   />
    //   <motion.div
    //     className="absolute top-20 right-1/2 w-24 h-24 border-t-2 border-l-2 border-amber-400 rounded-sm opacity-40"
    //     animate={{ rotate: [360, 0] }}
    //     transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    //   />

    //   <div className="relative z-10 px-6 md:px-12 py-16 grid gap-10 md:grid-cols-4">
        
    //     {/* Brand Info */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.7 }}
    //     >
    //       <h4 className="text-white font-bold mb-3">BrandCraft</h4>
    //       <p className="text-sm text-slate-400">
    //         Creative design & marketing solutions that help brands grow,
    //         connect, and stand out in the market.
    //       </p>
    //     </motion.div>

    //     {/* Services */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ delay: 0.05, duration: 0.7 }}
    //     >
    //       <h4 className="text-white font-semibold mb-3">Services</h4>
    //       <ul className="space-y-2 text-sm">
    //         <li className="hover:text-amber-400 transition cursor-pointer">Graphic Design</li>
    //         <li className="hover:text-amber-400 transition cursor-pointer">Content Creation</li>
    //         <li className="hover:text-amber-400 transition cursor-pointer">Social Media Management</li>
    //         <li className="hover:text-amber-400 transition cursor-pointer">Paid Advertising</li>
    //         <li className="hover:text-amber-400 transition cursor-pointer">Brand Strategy</li>
    //       </ul>
    //     </motion.div>

    //     {/* Contact */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ delay: 0.1, duration: 0.7 }}
    //     >
    //       <h4 className="text-white font-semibold mb-3">Contact</h4>
    //       <ul className="space-y-2 text-sm">
    //         <li className="flex items-center gap-2">📍 punjab, India</li>
    //         <li className="flex items-center gap-2">📧 irahimedia@gmail.com</li>
    //         <li className="flex items-center gap-2">📞 +91 95923 97086</li>
    //       </ul>
    //     </motion.div>

    //     {/* Social */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ delay: 0.15, duration: 0.7 }}
    //     >
    //       <h4 className="text-white font-semibold mb-3">Follow Us</h4>
    //       <div className="flex gap-4 mt-2">
    //         {[
    //           { name: "Instagram", icon: "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" },
    //           { name: "Facebook", icon: "M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" },
    //           { name: "LinkedIn", icon: "M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.6 4.6 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z" }
    //         ].map((social, i) => (
    //           <motion.a
    //             key={i}
    //             href="#"
    //             whileHover={{ scale: 1.2, rotate: 10 }}
    //             whileTap={{ scale: 0.95 }}
    //             className="text-slate-300 hover:text-amber-400 transition"
    //             title={social.name}
    //           >
    //             <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    //               <path d={social.icon} />
    //             </svg>
    //           </motion.a>
    //         ))}
    //       </div>
    //     </motion.div>
    //   </div>

    //   {/* Bottom Copyright */}
    //   <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-500">
    //     © {new Date().getFullYear()} BrandCraft. All rights reserved.
    //   </div>
    // </footer>
 
  );

};

export default Footer;
