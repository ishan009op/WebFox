import React from 'react';
import { motion } from 'framer-motion';
import CardsOverlay from './Overlay.jsx';
import TextImageSection from './Slides.jsx';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero text-white px-4 py-10 md:py-20">
        <h4 className="text-2xl md:text-4xl text-center m-3">
          Drive Maximum Sales with
        </h4>
        <h1 className="text-3xl md:text-6xl text-center m-5 font-bold">
          Best Digital Marketing Agency
        </h1>

        <div className="h-px mt-12 md:mt-28 bg-white min-w-full"></div>

        {/* Stats */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10 justify-evenly my-10">
          <div className="flex gap-4 items-center justify-center flex-1 min-w-[150px]">
            {/* SVG */}
            <p className="inline text-lg md:text-xl font-bold">17+ years of experience</p>
          </div>
          <div className="flex gap-4 items-center justify-center flex-1 min-w-[150px]">
            <p className="inline text-lg md:text-xl font-bold">250+ In-House Experts</p>
          </div>
          <div className="flex gap-4 items-center justify-center flex-1 min-w-[150px]">
            <p className="inline text-lg md:text-xl font-bold">900+ Success Stories</p>
          </div>
          <div className="flex gap-4 items-center justify-center flex-1 min-w-[150px]">
            <p className="inline text-lg md:text-xl font-bold">21k+ Projects Delivered</p>
          </div>
        </div>

        <div className="h-px bg-white mb-10 md:mb-20 min-w-full"></div>

        <p className="text-white text-lg md:text-2xl font-medium px-4 md:px-10 mx-auto text-center max-w-4xl">
          Success online isn’t just about presence, it’s about performance. As one of the best digital marketing agencies, Softtrix combines data-driven strategies, creative execution, and deep industry insight to deliver tangible business outcomes.
        </p>

        <div className="flex justify-center mt-6 md:mt-10">
          <button className="bg-sky-400 font-semibold text-white px-6 py-3 text-lg md:text-xl rounded-lg">
            Schedule A Meeting
          </button>
        </div>
      </div>

      {/* Awards Section */}
      <div className="w-11/12 md:w-10/12 mx-auto my-10 md:my-20">
        <h2 className="text-3xl md:text-5xl text-stone-900 text-center font-bold mb-7">
          Awards That Recognise Digital Excellence
        </h2>
        <div className="flex flex-wrap justify-center md:justify-evenly gap-6 md:gap-10">
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2024/02/google-partner.png" alt="" />
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2023/03/clutch-softtrix-5.png" alt="" />
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2025/08/a.svg" alt="" />
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2025/08/b.svg" alt="" />
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2025/08/c.svg" alt="" />
          <img className="h-24 md:h-44 w-24 md:w-44" src="https://www.softtrix.com/wp-content/uploads/2025/08/d.svg" alt="" />
        </div>
      </div>

      {/* Text + Image Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 w-11/12 md:w-10/12 mx-auto my-10">
        <div className="flex-1">
          <img className="w-full rounded-lg" src="/img.png" alt="error" />
        </div>
        <div className="flex-1 max-w-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
            Search Has Changed. Attention Has Shifted.
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">
            Is Your Brand Where It Needs To Be?
          </h2>
          <p className="text-lg md:text-base">
            Search is no longer just about ranking on Google, it's about being everywhere your audience looks...
          </p>
        </div>
      </div>

      {/* Animated CTA Button */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-12 w-11/12 md:w-4/6 mx-auto my-10">
        <p className="text-blue-950 text-2xl md:text-4xl font-bold text-center md:text-left">
          Everyone is Searching Online,
          <br />
          <span className="text-lg md:text-2xl font-semibold">
            But are you getting found? If not?
          </span>
        </p>
        <motion.button
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              '10px 20px 40px rgba(0,0,0,0)',
              '10px 20px 40px rgba(0,0,0,0.35)',
              '10px 20px 40px rgba(0,0,0,0)',
            ],
            opacity: [0.7, 0.8, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="bg-sky-600 font-bold text-white px-6 py-4 text-xl rounded-lg"
        >
          Schedule A Meeting
        </motion.button>
      </div>

      {/* Goals Section */}
      <div className="text-center my-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold opacity-[0.96] mb-4">
          What Are You Looking To Achieve?
        </h2>
        <p className="mx-auto w-full md:w-3/4 text-lg md:text-xl">
          Every business comes with its own goals, challenges, and ambitions...
        </p>
      </div>

      {/* TextImageSection Slider */}
      <div className="w-11/12 md:w-10/12 mx-auto my-10">
        <TextImageSection />
      </div>
    </>
  );
};

export default Home;
