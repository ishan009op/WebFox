import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Web Design",
    desc: "Modern UI/UX focused designs for conversion.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
  {
    title: "Development",
    desc: "Fast, scalable full-stack applications.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Branding",
    desc: "Strong identity that connects with users.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export default function TextImageSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);


const prevSlide = () =>
  setIndex((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );


  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
      
      {/* TEXT CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4 }}
          className="p-8 bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">
            {slides[index].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {slides[index].desc}
          </p>
          <button
            onClick={nextSlide}
            className="px-6 mx-4 py-3 bg-black text-white rounded-lg"
          >
            Next
          </button>
          <button onClick={prevSlide}
            className="px-6 py-3 mx-4 bg-black text-white rounded-lg">
            Prev
          </button>
        </motion.div>
      </AnimatePresence>

      {/* IMAGE CARD */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].img}
          src={slides[index].img}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-[350px] object-cover rounded-xl shadow-xl"
        />
      </AnimatePresence>

    </div>
  );
}
