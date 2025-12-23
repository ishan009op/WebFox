import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal.jsx";




const menuItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/#work" },
  { name: "Services", path: "/#services" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const[source,setSource]=useState('')
  const navigate = useNavigate();

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {/* <div className="min-w-screen bg-[#0F172A] flex flex-col md:flex-row justify-between items-center text-white px-4 md:px-10 py-2">
        <div className="flex gap-4 text-sm">
          <p>sales@gmail.com</p>
          <p>HR: 91+ 999-9999-999</p>
        </div>
        <p className="text-sm mt-2 md:mt-0">91+ 888-8888-888</p>
      </div> */}

     
      <div className="bg-white  sticky top-0 z-50 shadow-md px-1 py-3 flex md:justify-between lg:px-5 justify-around items-center">
        {/* Logo */}
        <img src="/irahi-logo (2).png" className="md:h-14 h-9 cursor-pointer" alt="Logo" onClick={() => navigate("/")} />

      
        <div className="flex text-[10px] justify-center gap-3 md:text-base items-center md:gap-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer list-none  text-gray-800 hover:text-amber-500 transition-colors duration-200"
              onClick={() => {
                navigate(item.path);
                
              }}
            >
              {item.name}
            </li>
          ))}

          <button
          
          onClick={() => {
                setSource("get-started");
                setOpen(true);
              }}
          
          className="bg-amber-400 w-16 text-[9px] font-medium md:w-32 md:text-base md:px-2  py-2 rounded-xl text-white">
            Get Started
          </button>
        </div>

        
      </div>

     <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
      />
     
    </>
  );
};

export default Header;
