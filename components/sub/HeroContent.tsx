"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Mysql","Php", "Python","Flask", "Django","ReactNative","Godo","JavaScript","Jquery","Tailwindcss","HTML","CSS"];

const HeroContent: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = document.getElementById("hero-description");
    if (target && gsap) {
      import("gsap/ScrambleTextPlugin").then((mod) => {
        gsap.registerPlugin(mod.ScrambleTextPlugin || mod.default);
        gsap.fromTo(
          target,
          { scrambleText: { text: "", chars: "", revealDelay: 0.3, speed: 0.08 } },
          {
            scrambleText: { text: target.textContent || "", chars: "", revealDelay: 0.3, speed: 0.08 },
            duration: 5,
            ease: "power1.inOut",
            delay: 0.8,
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;

    gsap.fromTo(
      img,
      { scale: 0.6, opacity: 0, rotateY: -30 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 1.4, ease: "elastic.out(1, 0.55)", delay: 0.3 }
    );
    gsap.to(img, { y: -14, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });

    const handleMouseEnter = () => gsap.to(img, { rotateY: 360, duration: 1, ease: "power2.inOut" });
    const handleMouseLeave = () => gsap.to(img, { rotateY: 0, duration: 0.8, ease: "power2.out" });
    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      img.removeEventListener("mouseenter", handleMouseEnter);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="
        relative z-[20] w-full
        pt-[96px] pb-12
        px-5 sm:px-8 lg:px-12
        min-h-screen
        flex items-center justify-center
      "
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

        {/* ── COLONNE GAUCHE ── */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">

          {/* Badge */}
          <motion.div
            variants={slideInFromTop}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#7042f860] bg-[#7042f810] backdrop-blur-sm w-fit"
          >
            <SparklesIcon className="h-3.5 w-3.5 text-[#b49bff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-[#00e0ff] tracking-widest uppercase">
              Développeur Fullstack · Portfolio
            </span>
          </motion.div>

          {/* Titre */}
          <motion.div variants={slideInFromLeft(0.4)}>
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-6xl font-extrabold leading-[1.18] text-white">
              Concevoir des
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7042f8] via-[#a076f8] to-[#00e0ff]">
                expériences digitales
              </span>
              <br />
              <span className="text-gray-300">qui marquent.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.6)}
            className="text-sm sm:text-base md:text-[1.05rem] text-gray-400 leading-relaxed max-w-[520px]"
            id="hero-description"
          >
            Ingénieur logiciel Full Stack passionné par la création d applications web et mobiles
            performantes. Je transforme vos idées en solutions digitales modernes et évolutives.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div variants={slideInFromLeft(0.7)} className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-[#7042f815] border border-[#7042f840] text-[#a076f8] hover:border-[#7042f8] hover:bg-[#7042f825] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={slideInFromLeft(0.9)} className="flex flex-wrap gap-3 mt-1">
            <a
              href="/projets"
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#7042f8] to-[#00e0ff] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#7042f840]"
            >
              Voir mes projets
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-gray-300 border border-[#7042f860] bg-[#7042f810] hover:bg-[#7042f825] hover:text-white hover:border-[#7042f8] transition-all duration-300"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Télécharger CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="flex gap-6 sm:gap-10 mt-2 pt-5 border-t border-[#7042f820]"
          >
            {[
              { value: "3+", label: "Années d'expérience" },
              { value: "20+", label: "Projets livrés" },
              { value: "15+", label: "Clients satisfaits" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7042f8] to-[#00e0ff]">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 leading-tight">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── COLONNE DROITE — image ── */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <motion.div
            variants={slideInFromRight(0.6)}
            className="relative flex justify-center items-center"
            /* taille du "canvas" autour de l'image — s'adapte au viewport */
            style={{
              width: "clamp(220px, 55vw, 360px)",
              height: "clamp(220px, 55vw, 360px)",
            }}
          >
            {/* Rings décoratifs */}
            <span className="absolute inset-0 rounded-full border border-[#7042f830] animate-spin-slow" />
            <span className="absolute inset-[18px] rounded-full border border-[#00e0ff20]" />

            {/* Glow */}
            <span className="absolute inset-[30px] rounded-full bg-gradient-to-br from-[#7042f840] to-[#00e0ff20] blur-2xl opacity-70" />

            {/* Image */}
            <div className="relative z-10">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7042f8] via-[#a076f8] to-[#00e0ff] opacity-75 blur-sm" />
              <Image
                src="/statut.jpg"
                alt="Profile"
                width={260}
                height={260}
                ref={heroImgRef}
                priority
                className="relative rounded-full object-cover border-4 border-[#030014] cursor-pointer"
                style={{
                  width: "clamp(150px, 40vw, 240px)",
                  height: "clamp(150px, 40vw, 240px)",
                }}
              />
            </div>

            {/* Badge disponibilité */}
            <div className="absolute top-0 -right-1 sm:-right-3 flex items-center gap-1.5 bg-[#0d0d1f] border border-[#7042f840] rounded-xl px-2.5 py-1.5 shadow-lg backdrop-blur-md z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Disponible</span>
            </div>

            {/* Badge Full Stack */}
            <div className="absolute bottom-0 -left-1 sm:-left-3 flex items-center gap-1.5 bg-[#0d0d1f] border border-[#7042f840] rounded-xl px-2.5 py-1.5 shadow-lg backdrop-blur-md z-20">
              <span className="text-sm leading-none">⚡</span>
              <span className="text-[10px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Full Stack Dev</span>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroContent;
