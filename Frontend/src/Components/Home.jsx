import React from 'react';
import { motion } from 'framer-motion';
import CardsOverlay from './Overlay.jsx';
import TextImageSection from './Slides.jsx';

const Home = () => {
  return (
    <>
      <div className='bg-[url(/11230.jpg)] flex flex-col justify-center box-border h-screen my-2 mx-2 md:my-6 md:mx-10 rounded-3xl bg-blend-darken'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-center text-2xl p-2 md:text-4xl font-bold my-8'>Creative Design & Marketing Solutions for Growing Businesses</h1>

        <p className='text-slate-200 m-4 text-xs text-center'>From visual branding to digital & on-ground marketing — we help brands stand out and grow</p>
<div className='flex gap-2 justify-between my-10 mx-auto'>
        <button className='bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300 py-3 px-5 text-xs rounded-full font-medium text-slate-50'>Get Started </button>
        <button className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-full py-3 px-5 text-xs font-medium text-slate-100'>Book a Consultant</button>
        </div>
      </div>
      
    </>
  );
};

export default Home;
