import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="w-full bg-blue-950 flex flex-col md:flex-row justify-between items-center text-white px-4 md:px-10 py-2 md:py-3">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
                    <p className="flex items-center gap-2 text-sm md:text-lg">
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                        </svg>
                        sales@gmail.com
                    </p>

                    <p className="flex items-center gap-2 text-sm md:text-lg">
                        HR:
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                            <path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
                        </svg>
                        91+ 999-9999-999
                    </p>
                </div>

                <div className="flex gap-4 items-center mt-2 md:mt-0">
                    <div className="bg-white rounded-md hover:bg-slate-100">
                        <p className="font-bold px-3 py-1 text-black text-sm md:text-md">Talk to our experts</p>
                    </div>
                    <p className="font-semibold text-sm md:text-md">91+ 888-8888-888</p>
                </div>
            </div>

            {/* Sticky Navbar */}
            <div className="bg-white sticky top-0 z-50 shadow-md px-4 md: py-3 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div>
                    <img src="/logo.png" className="w-28 md:w-36 h-16 md:h-24 mx-auto md:mx-0" alt="Logo" />
                </div>

                {/* Menu */}
                <div className="flex flex-wrap justify-around md:justify-between gap-2 md:gap-6 w-full md:w-8/12 my-3 md:my-0">
                    {[
                        "White Label Services",
                        "SEO Services",
                        "PPC Services",
                        "Design & Development",
                        "About Us",
                        "Learning Center",
                    ].map((item, idx) => (
                        <li
                            key={idx}
                            className="list-none cursor-pointer font-medium text-gray-900 text-sm md:text-md hover:text-sky-500 transition-colors"
                        >
                            {item}
                        </li>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-end items-center">
                    <button className="bg-sky-500 w-36 rounded-lg text-md py-2 md:py-3">
                        <motion.p
                            className="text-white font-semibold text-sm md:text-sm"
                            animate={{
                                letterSpacing: ["0px", "0.4px", "0px"], // tiny spacing
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        >
                            Get a Free Quote
                        </motion.p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
