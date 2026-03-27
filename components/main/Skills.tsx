"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React, { useEffect } from "react";
import gsap from "gsap";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  useEffect(() => {
    // Animation d'entrée au scroll via IntersectionObserver
    const skillItems = document.querySelectorAll(".skill-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 30, scale: 0.85 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    skillItems.forEach((el) => observer.observe(el));

    // Hover animation
    skillItems.forEach((el) => {
      const onEnter = () => {
        gsap.to(el, {
          scale: 1.15,
          y: -8,
          filter: "drop-shadow(0 0 12px #3b82f670)",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
          y: 0,
          filter: "none",
          duration: 0.4,
          ease: "elastic.out(1, 0.6)",
        });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    { data: Skill_data, label: "Core" },
    { data: Frontend_skill, label: "Frontend" },
    { data: Backend_skill, label: "Backend" },
    { data: Full_stack, label: "Full Stack" },
    { data: Other_skill, label: "Other" },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-8 w-full py-24 px-4 overflow-hidden bg-[#090d1a]"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <SkillText />

        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-8">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3b82f630]" />
              <span className="text-[10px] font-bold font-mono text-[#3b82f6] tracking-widest uppercase opacity-60">
                {group.label}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3b82f630]" />
            </div>
            <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
              {group.data.map((image, index) => (
                <div key={index} className="skill-item cursor-pointer">
                  <SkillDataProvider
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vidéo de fond subtile */}
      <div className="w-full h-full absolute inset-0 z-[-1] pointer-events-none">
        <div className="w-full h-full opacity-10 flex items-center justify-center">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/card-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
