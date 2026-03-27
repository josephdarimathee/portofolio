"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "PHP", "Python", "Flask", "Django", "React Native", "Godot", "JavaScript", "Tailwind CSS", "HTML", "CSS"];

const stats = [
  { value: "6+", label: "Années d'expérience" },
  { value: "421+", label: "Clients mondiaux" },
  { value: "1.2k+", label: "Projets complétés" },
];

const HeroContent: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const counterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;

    gsap.fromTo(
      img,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)", delay: 0.4 }
    );
    gsap.to(img, { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

    const handleMouseEnter = () => gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
    const handleMouseLeave = () => gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      img.removeEventListener("mouseenter", handleMouseEnter);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animate stat counters on mount
  useEffect(() => {
    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = parseFloat(stats[i].value.replace(/[^0-9.]/g, ""));
      const suffix = stats[i].value.replace(/[0-9.]/g, "");
      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: target,
        duration: 2,
        delay: 1 + i * 0.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(proxy.val) + suffix;
        },
      });
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-[20] w-full pt-[96px] pb-12 px-5 sm:px-8 lg:px-16 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── COLONNE GAUCHE ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          {/* Badge */}
          <motion.div
            variants={slideInFromTop}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] backdrop-blur-sm w-fit"
          >
            <SparklesIcon className="h-3.5 w-3.5 text-[#3b82f6] shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
              salut, je suis joseph darimathee
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.div variants={slideInFromLeft(0.4)}>
            <h1 className="text-[36px] sm:text-5xl md:text-6xl lg:text-[3.2rem] xl:text-[4rem] font-extrabold leading-[1.1] text-white">
              A Fullstack
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">
                Web Developer
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.6)}
            className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-[500px]"
            id="hero-description"
          >
            Développeur Fullstack passionné, spécialisé dans la création d applications web et mobiles
            performantes. Je transforme vos idées en solutions digitales modernes, évolutives et sur mesure.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={slideInFromLeft(0.8)} className="flex flex-wrap gap-4 mt-2">
            <a
              href="/projets"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-black bg-[#3b82f6] hover:bg-[#2563eb] transition-all duration-300 shadow-lg shadow-[#3b82f640]"
            >
              Hire Me
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/cv"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-[#3b82f6] border border-[#3b82f650] bg-transparent hover:bg-[#3b82f610] transition-all duration-300"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Get Resume
              <FontAwesomeIcon icon={faDownload} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />

            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={slideInFromLeft(1.0)}
            className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-[#ffffff10]"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]"
                  ref={el => { if (el) counterRefs.current[i] = el; }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 leading-tight font-medium tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={slideInFromLeft(1.1)} className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold rounded-md bg-[#ffffff08] border border-[#ffffff15] text-gray-400 hover:border-[#3b82f650] hover:text-[#3b82f6] transition-all duration-300 cursor-default font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── COLONNE DROITE — image ── */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <motion.div
            variants={slideInFromRight(0.6)}
            className="relative flex justify-center items-center"
            style={{
              width: "clamp(260px, 55vw, 420px)",
              height: "clamp(260px, 55vw, 420px)",
            }}
          >
            {/* Halo vert derrière l'image */}
            <div className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-[0.08] blur-[60px]" />

            {/* Ring tournant vert */}
            <span className="absolute inset-0 rounded-full border border-[#3b82f625] animate-spin" style={{ animationDuration: "12s" }} />
            <span className="absolute inset-[20px] rounded-full border border-dashed border-[#3b82f630]" />

            {/* Image profile */}
            <div className="relative z-10">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] opacity-60 blur-sm" />
              <Image
                src="/statut.jpg"
                alt="Profile"
                width={320}
                height={320}
                ref={heroImgRef}
                priority
                className="relative rounded-full object-cover border-4 border-[#090d1a] cursor-pointer"
                style={{
                  width: "clamp(180px, 42vw, 300px)",
                  height: "clamp(180px, 42vw, 300px)",
                }}
              />
            </div>

            {/* Badge disponibilité */}
            <div className="absolute top-4 -right-2 sm:-right-6 flex items-center gap-1.5 bg-[#0d1020] border border-[#3b82f640] rounded-xl px-3 py-2 shadow-xl backdrop-blur-md z-20">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold whitespace-nowrap">Disponible</span>
            </div>

            {/* Badge Full Stack */}
            <div className="absolute bottom-4 -left-2 sm:-left-6 flex items-center gap-1.5 bg-[#0d1020] border border-[#3b82f640] rounded-xl px-3 py-2 shadow-xl backdrop-blur-md z-20">
              <span className="text-sm leading-none">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />

              </span>
              <span className="text-[11px] sm:text-xs text-[#3b82f6] font-semibold whitespace-nowrap">Full Stack Dev</span>
            </div>

            {/* Floating tech badge */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0d1020] border border-[#3b82f640] rounded-full px-3 py-1 shadow-xl z-20">
              <span className="text-[10px] text-[#3b82f6] font-mono font-bold">Next.js · React · Node</span>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroContent;
