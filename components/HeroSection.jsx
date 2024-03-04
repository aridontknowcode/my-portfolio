
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";




const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* `sm:text-left` This overrides the 'text-center' class for screens larger than */}
                {/* or equal to the small breakpoints ('sm'), ensuring that text aligns to the left */}
                {/* for those screens */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="col-span-7 self-center text-center sm:text-left"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 ">
                            Hello, I'm {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Harith',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Software Developer',
                                1000,
                                'A Student',
                                1000,
                                'An Intern',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
                        {/* can put text here */}
                    </p>
                    <div className="">
                        <button className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-blue-400 to-blue-600 hover:bg-slate-200 text-white">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-blue-400 to-purple-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"><a href="/cv.pdf" download="cv">Download CV</a></span>
                        </button>
                    </div>
                    {/* text-lg means the text will be xl size for default */}
                    {/* lg:text-xl the text will be xl size for large screens */}

                </motion.div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, translateX:-100 }}
                        animate={{ opacity: 1, translateX:1 }}
                        transition={{ duration: 1 }}
                        className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;