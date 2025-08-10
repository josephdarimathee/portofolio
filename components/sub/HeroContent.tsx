"use client";



import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const HeroContent: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = document.getElementById("hero-description");
    if (target && gsap) {
      // Charger le plugin ScrambleText dynamiquement
      import("gsap/ScrambleTextPlugin").then((mod) => {
        gsap.registerPlugin(mod.ScrambleTextPlugin || mod.default);
        gsap.fromTo(target, {
          scrambleText: {
            text: "",
            chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
            revealDelay: 0.2,
            speed: 0.1
          }
        }, {
          scrambleText: {
            text: target.textContent || "",
            chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
            revealDelay: 0.2,
            speed: 0.1
          },
          duration: 6.2,
          ease: "power1.inOut"
        });
      });
    }
  },);

  useEffect(() => {
    if (heroImgRef.current) {
      // Apparition
      gsap.fromTo(
        heroImgRef.current,
        { scale: 0.7, rotate: -20, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
        }
      );
      // Animation continue de saut (jump)
      gsap.to(heroImgRef.current, {
        y: -50,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-5 mt-50 w-full z-[20]  "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start bg-[#18122b] text-gray-200   rounded-[12px]">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" id="highlight-text">
                  {" "}
                  le mellieur{" "}
                </span>
                lexperience de mes projet
              </span>
            </motion.div>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
              id="hero-description"
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
              <span className="absolute w-[40vw] h-[40vw] max-w-[320px] max-h-[320px] min-w-[120px] min-h-[120px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 animate-spin-slow z-0"></span>
              <span className="absolute w-[40vw] h-[40vw] max-w-[320px] max-h-[320px] min-w-[120px] min-h-[120px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-40 blur-xl animate-pulse z-0"></span>
              <Image
                src="/statut.jpg"
                alt="work icons"
                width={320}
                height={320}
                id="hero-image"
                ref={heroImgRef}
                className="relative z-10 w-[35vw] h-[35vw] max-w-[280px] max-h-[280px] min-w-[100px] min-h-[100px] rounded-full object-cover border-4 border-white"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
