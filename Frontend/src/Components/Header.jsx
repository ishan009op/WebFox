import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-[#0F172A] flex flex-col md:flex-row justify-between items-center text-white px-4 md:px-10 py-2">
        <div className="flex gap-4 text-sm">
          <p>sales@gmail.com</p>
          <p>HR: 91+ 999-9999-999</p>
        </div>
        <p className="text-sm mt-2 md:mt-0">91+ 888-8888-888</p>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="bg-white sticky top-0 z-50 shadow-md px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src="/irahi-logo (2).png" className="h-14 cursor-pointer" alt="Logo" onClick={() => navigate("/")} />

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="list-none cursor-pointer font-medium hover:text-sky-500"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}

          <button className="bg-[#F59E0B] px-4 py-2 rounded-lg text-white">
            Get Started
          </button>
        </div>

        {/* ================= HAMBURGER (MOBILE) ================= */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {menuItems.map((item) => (
                <motion.p
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg font-medium cursor-pointer"
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </motion.p>
              ))}

              <button className="bg-[#F59E0B] w-40 py-2 rounded-lg text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
