import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {

  const[Name,SetName]=useState('')
  const[Email,SetEmail]=useState('')
  const[Desc,SetDesc]=useState('')

const addContact=async(e)=>{

e.preventDefault();

  if (!Name || !Email || !Desc) {
    alert("Please fill all required fields");
    return;
  }

  const res=await axios.post("https://webfox-ue5o.onrender.com/api/user",{
name:Name,
email:Email,
desc:Desc
  })

SetName('')
SetEmail('')
SetDesc('')
  console.log(res.data)
}
  return (
    <section
      id="contact"
      className="relative mx-3 md:mx-10 my-10 md:my-20 rounded-3xl bg-slate-950 overflow-hidden scroll-mt-28"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-indigo-500/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-amber-400/30 blur-3xl rounded-full" />

      <div className="relative px-6 md:px-20 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Let’s Build Something{" "}
            <span className="text-amber-400">Meaningful</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-md">
            Tell us about your business, idea, or project. We’ll help you turn
            it into a strong brand and a high-impact presence.
          </p>

          <div className="mt-6 space-y-3 text-slate-300 text-sm">
            <p>📍 Location: Your City, India</p>
            <p>📧 Email: hello@yourbrand.com</p>
            <p>📞 Phone: +91 XXXXX XXXXX</p>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
        action={addContact}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-4"
        >
          <input
            type="text"
            value={Name}
            onChange={(e)=>SetName(e.target.value)}
            placeholder="Your Name"
            className="w-full bg-slate-800 text-slate-100 placeholder-slate-400
                       px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="email"
             value={Email}
            onChange={(e)=>SetEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-slate-800 text-slate-100 placeholder-slate-400
                       px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            rows="4"
             value={Desc}
            onChange={(e)=>SetDesc(e.target.value)}
            placeholder="Tell us about your project..."
            className="w-full bg-slate-800 text-slate-100 placeholder-slate-400
                       px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-400"
          />

          <motion.button
          type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-amber-400 text-slate-900 font-semibold
                       py-3 rounded-full hover:bg-amber-500 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
