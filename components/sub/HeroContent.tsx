"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-5 mt-50 w-full z-[20]  "
    >

      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start bg-white   rounded-[12px]">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[2px] w-70 border border-[#7042f88b] opacity-[0.9]"

        >

          <SparklesIcon className="text-[#b49bff] mr-[40px] h-5 w-5" />
          <h1 className="text-transparent  text-[13px] bg-clip-text bg-gradient-to-r from-purple-500 ">
            Developeur Fullstack  Portfolio
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span className="text-gray-400">
                Fournir
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  le mellieur{" "}
                </span>
                lexperience de mes projet
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
            >
              Je suis ingénieur logiciel Full Stack avec une expérience en développement de sites web, dapplications mobiles et de logiciels. Découvrez mes projets et mes compétences.
            </motion.p>
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Learn More!
            </motion.a>
          </div>

          <div className="flex justify-center items-center" id="hero-image">
            <motion.div
              variants={slideInFromRight(0.8)}
              className="relative flex justify-center items-center"
            >
              {/* Bordure colorée animée autour de l'image */}
              <span className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] min-w-[150px] min-h-[150px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 animate-spin-slow z-0"></span>
              <span className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] min-w-[150px] min-h-[150px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-40 blur-xl animate-pulse z-0"></span>
              <Image
                src="/PHprofil.jpg"
                alt="work icons"
                width={500}
                height={500}
                className="relative z-10 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] min-w-[120px] min-h-[120px] rounded-full object-cover border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
