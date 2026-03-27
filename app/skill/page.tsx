"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/skill',
  },
}
const competencesProgrammation = [
  { nom: "JavaScript (ES6+)", img: "/js.png", level: 95, color: "#f7df1e" },
  { nom: "TypeScript", img: "/ts.png", level: 90, color: "#3178c6" },
  { nom: "Python", img: "/python.jpeg", level: 85, color: "#3b82f6" },
  { nom: "C#", img: "/csharp.png", level: 72, color: "#9b59b6" },
  { nom: "Node.js", img: "/node-js.png", level: 88, color: "#68a063" },
  { nom: "React.js", img: "/react.png", level: 95, color: "#61dafb" },
  { nom: "Next.js", img: "/next.png", level: 92, color: "#ffffff" },
  { nom: "HTML5 & CSS3", img: "/html.png", level: 97, color: "#e34f26" },
  { nom: "Tailwind CSS", img: "/tailwind.png", level: 93, color: "#38bdf8" },
  { nom: "SQL / MySQL", img: "/mysql.png", level: 80, color: "#4479a1" },
  { nom: "MongoDB", img: "/mongodb.png", level: 75, color: "#4db33d" },
  { nom: "API REST", img: "/api.png", level: 88, color: "#3b82f6" },
  { nom: "Git & GitHub", img: "/github-142-svgrepo-com.svg", level: 90, color: "#f0f0f0" },
];

const competencesJeux = [
  { nom: "Unity (C#)", img: "/unity.png", level: 78, color: "#ffffff" },
  { nom: "Godot Engine", img: "/godot.png", level: 82, color: "#478cbf" },
  { nom: "Unreal Engine", img: "/unreal.png", level: 55, color: "#0e1128" },
  { nom: "Game Design", img: "/game-design.png", level: 80, color: "#3b82f6" },
  { nom: "Level Design", img: "/level-design.png", level: 75, color: "#60a5fa" },
  { nom: "Animation 2D/3D", img: "/animation.jpeg", level: 68, color: "#a78bfa" },
  { nom: "Physique de jeu", img: "/physics.png", level: 72, color: "#34d399" },
  { nom: "Scripting gameplay", img: "/scripting.png", level: 80, color: "#f59e0b" },
  { nom: "Gestion des assets", img: "/assets.jpeg", level: 85, color: "#3b82f6" },
  { nom: "Optimisation mobile", img: "/optimisation.png", level: 77, color: "#10b981" },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "prog", label: "Programmation" },
  { id: "jeux", label: "Jeux vidéo" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

interface Skill {
  nom: string;
  img: string;
  level: number;
  color: string;
}

function SkillCard({ skill, index }: { skill: Skill; index: number; category: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-[#1a2040] bg-[#0d1220] hover:border-[#3b82f640] transition-all duration-400 cursor-default overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 0 40px 0 ${skill.color}18` : "none",
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 30%, ${skill.color}10 0%, transparent 70%)` }}
      />

      {/* Top line accent */}
      <div
        className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}60, transparent)` }}
      />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-[#090d1a] border border-[#1a2040] group-hover:border-[#3b82f630] transition-all duration-300 overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={skill.img}
            alt={skill.nom}
            width={36}
            height={36}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Name */}
      <span className="relative z-10 text-center text-xs font-bold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
        {skill.nom}
      </span>

      {/* Progress bar */}
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[9px] text-gray-600 font-mono uppercase tracking-wide">Niveau</span>
          <span className="text-[10px] font-black font-mono" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
        <div className="h-1 rounded-full bg-[#1a2040] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.04, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillPage() {
  const [active, setActive] = useState("all");

  const showProg = active === "all" || active === "prog";
  const showJeux = active === "all" || active === "jeux";

  // Aggregate stats
  const avgProg = Math.round(competencesProgrammation.reduce((s, c) => s + c.level, 0) / competencesProgrammation.length);
  const avgJeux = Math.round(competencesJeux.reduce((s, c) => s + c.level, 0) / competencesJeux.length);

  return (
    <main className="relative z-20 min-h-screen bg-[#090d1a] text-white overflow-x-hidden">

      {/* ── Ambiance ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#3b82f6] opacity-[0.05] blur-[160px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#2563eb] opacity-[0.04] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.012]"
          style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 pb-16 px-5 sm:px-10 lg:px-20 text-center">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.05)}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">My Skills</span>
          </motion.div>

          <motion.h1 variants={fadeUp(0.1)}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Technologies que
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
              je maîtrise
            </span>
          </motion.h1>

          <motion.p variants={fadeUp(0.18)}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Un arsenal de technologies modernes pour concevoir des applications performantes, des expériences interactives et des jeux captivants.
          </motion.p>

          {/* Summary stats */}
          <motion.div variants={fadeUp(0.22)}
            className="inline-flex flex-wrap justify-center gap-10 px-8 py-5 rounded-2xl border border-[#3b82f620] bg-[#0d1220]/80 backdrop-blur-md mb-10">
            {[
              { val: competencesProgrammation.length + "+", label: "Technos web" },
              { val: competencesJeux.length + "+", label: "Outils jeux" },
              { val: avgProg + "%", label: "Maîtrise moy. web" },
              { val: avgJeux + "%", label: "Maîtrise moy. jeux" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">{val}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={fadeUp(0.27)}
            className="relative z-50 pointer-events-auto inline-flex items-center gap-1 p-1 rounded-xl border border-[#1a2040] bg-[#0d1220]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`pointer-events-auto px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  active === cat.id
                    ? "bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white shadow-md shadow-[#3b82f630]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SKILLS CONTENT ── */}
      <section className="relative z-10 px-5 sm:px-10 lg:px-20 pb-32 max-w-7xl mx-auto">

        {/* Programmation */}
        {showProg && (
          <motion.div
            key="prog"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3b82f625]" />
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3b82f630] bg-[#3b82f608]">
                <span className="text-lg">💻</span>
                <span className="text-sm font-black text-[#3b82f6] tracking-wide uppercase font-mono">Programmation & Web</span>
                <span className="px-2 py-0.5 rounded-full bg-[#3b82f620] text-[10px] font-bold text-[#60a5fa] font-mono">
                  {competencesProgrammation.length} techs
                </span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3b82f625]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {competencesProgrammation.map((skill, idx) => (
                <SkillCard key={skill.nom} skill={skill} index={idx} category="prog" />
              ))}
            </div>
          </motion.div>
        )}

        {/* Jeux */}
        {showJeux && (
          <motion.div
            key="jeux"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#60a5fa25]" />
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#60a5fa30] bg-[#60a5fa08]">
                <span className="text-lg">🎮</span>
                <span className="text-sm font-black text-[#60a5fa] tracking-wide uppercase font-mono">Développement Jeux Vidéo</span>
                <span className="px-2 py-0.5 rounded-full bg-[#60a5fa20] text-[10px] font-bold text-[#93c5fd] font-mono">
                  {competencesJeux.length} outils
                </span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#60a5fa25]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {competencesJeux.map((skill, idx) => (
                <SkillCard key={skill.nom} skill={skill} index={idx} category="jeux" />
              ))}
            </div>
          </motion.div>
        )}

        {/* ── CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0)}
          className="mt-24 relative rounded-3xl overflow-hidden border border-[#3b82f630] bg-[#0d1220] p-10 sm:p-14 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f608] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent" />

          <p className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-4">Intéressé ?</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Mettons ces compétences<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">au service de votre projet</span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            Chaque technologie listée a été utilisée en production. Parlons de votre projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact"
              className="px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#3b82f630]">
              Démarrer un projet →
            </a>
            <a href="/projets"
              className="px-8 py-3 rounded-xl font-bold text-sm text-[#3b82f6] border border-[#3b82f640] hover:bg-[#3b82f610] transition-all duration-300">
              Voir mes réalisations
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
