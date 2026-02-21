"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";


const Skills = () => {
  // Réfs pour chaque groupe de skills
  const skillRefs = [useRef<HTMLDivElement[]>([]), useRef<HTMLDivElement[]>([]), useRef<HTMLDivElement[]>([]), useRef<HTMLDivElement[]>([]), useRef<HTMLDivElement[]>([])];

  useEffect(() => {
    skillRefs.forEach((groupRef, groupIdx) => {
      if (groupRef.current) {
        groupRef.current.forEach((el, idx) => {
          if (el) {
            // Animation latérale alternée gauche/droite et rotation 90°
            const fromX = (groupIdx % 2 === 0 ? -80 : 80);
            gsap.fromTo(
              el,
              { opacity: 0, x: fromX, rotate: groupIdx % 2 === 0 ? -90 : 90, scale: 0.8 },
              {
                opacity: 1,
                x: 0,
                rotate: 0,
                scale: 1,
                duration: 0.8,
                delay: idx * 0.09,
                ease: "power3.out",
              }
            );
            // Animation continue (flottement)
            gsap.to(el, {
              y: -38,
              duration: 0.5 + Math.random() * 0.25,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: Math.random() * 0.4
            });
            // Animation jumper (saut) amplifiée
            gsap.to(el, {
              scaleY: 0.7,
              duration: 0.22,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: 0.11 * idx + Math.random() * 0.2
            });
            // Animation transition disparition/apparition (fade out/in)
            gsap.to(el, {
              opacity: 0.15,
              duration: 1.1,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: 0.18 * idx + Math.random() * 0.3
            });
            // Animation GSAP au survol
            const onEnter = () => {
              gsap.to(el, { scale: 1.13, rotate: groupIdx % 2 === 0 ? 12 : -12, boxShadow: "0px 0px 24px 4px #7042f8", duration: 0.4, ease: "power2.out" });
            };
            const onLeave = () => {
              gsap.to(el, { scale: 1, rotate: 0, boxShadow: "none", duration: 0.5, ease: "elastic.out(1,0.6)" });
            };
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
          }
        });
      }
    });
    // Nettoyage des listeners
    return () => {
      skillRefs.forEach((groupRef) => {
        if (groupRef.current) {
          groupRef.current.forEach((el) => {
            if (el) {
              el.removeEventListener("mouseenter", () => { });
              el.removeEventListener("mouseleave", () => { });
            }
          });
        }
      });
    };
  },);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 "
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <div
            key={index}
            className=""
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <div
            key={index}
            
            className=""
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <div
            key={index}
           
            className=""
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <div
            key={index}
            className=""
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <div
            key={index}
           
            className="transition-transform duration-00 hover:rotate-12"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
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
