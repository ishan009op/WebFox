import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal.jsx";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("");

  // Smooth scroll handler
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ============== NAVBAR ============== */}
      <div className="bg-white sticky top-0 z-50 shadow-md px-1 py-3 flex md:justify-between lg:px-5 justify-around items-center">
        {/* Logo */}
        <img
          src="/irahi-logo (2).png"
          className="md:h-14 h-9 cursor-pointer"
          alt="Logo"
          onClick={() => scrollToSection("#home")}
        />

        {/* Menu */}
        <div className="flex text-[10px] justify-center gap-3 md:text-base items-center md:gap-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer list-none text-gray-800 hover:text-amber-500 transition-colors duration-200"
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </li>
          ))}

          {/* Get Started Button */}
          <button
            onClick={() => {
              setSource("get-started");
              setOpen(true);
            }}
            className="bg-amber-400 w-16 text-[9px] font-medium md:w-32 md:text-base md:px-2 py-2 rounded-xl text-white"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal open={open} onClose={() => setOpen(false)} source={source} />
    </>
  );
};

export default Header;
