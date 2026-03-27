"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faDownload } from "@fortawesome/free-solid-svg-icons";
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const skills = [
  { label: "React / Next.js", pct: 95 },
  { label: "TypeScript / JavaScript", pct: 90 },
  { label: "Node.js / Python", pct: 85 },
  { label: "Django / Flask", pct: 78 },
  { label: "MySQL / Bases de données", pct: 80 },
  { label: "React Native / Mobile", pct: 75 },
  { label: "Tailwind CSS / UI", pct: 92 },
  { label: "PHP", pct: 70 },
];

const experiences = [
  {
    period: "2023 – 2024",
    role: "Développeur Logiciel",
    company: "Dev-Logiciel",
    location: "Brazzaville",
    tasks: [
      "Développement et maintenance d'applications web complexes",
      "Collaboration active au sein d'équipes multidisciplinaires",
      "Optimisation des performances et revue de code",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Développeur Web",
    company: "Dev-ops",
    location: "Brazzaville",
    tasks: [
      "Conception et implémentation de solutions logicielles",
      "Participation à la planification et coordination des projets",
    ],
  },
  {
    period: "2015 – 2018",
    role: "Gestionnaire de Bases de données",
    company: "POINT-NOIR",
    location: "Congo",
    tasks: [
      "Supervision et structuration de bases de données clients",
      "Gestion efficace de l'information et contrôle qualité",
    ],
  },
];

const formations = [
  { period: "2023 – 2024", diploma: "Certificat — Développement d'applications mobiles", school: "IEPA, Brazzaville" },
  { period: "2022 – 2024", diploma: "Licence 2 — Analyse et Programmation", school: "IEPA, Brazzaville" },
];

const langues = [
  { lang: "Français", level: "Langue maternelle", pct: 100 },
  { lang: "Anglais", level: "Courant", pct: 72 },
];

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Django", "Flask", "MySQL", "PHP", "React Native", "Tailwind CSS", "JavaScript", "Godot", "HTML/CSS"];

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  return (
    <main className="min-h-screen bg-[#090d1a] text-white overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#3b82f6] opacity-[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2563eb] opacity-[0.04] blur-[120px]" />
      </div>

      {/* ── Actions bar ── */}
      <div className="relative z-20 w-full flex justify-center pt-24 pb-4 px-5 print:hidden">
        <div className="flex items-center gap-3">
          <Link href="/about"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-gray-400 border border-[#1a2040] hover:border-[#3b82f630] hover:text-white transition-all duration-300">
            ← À propos
          </Link>
          <button
            onClick={handlePrint}
            className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition-all duration-300 shadow-md shadow-[#3b82f630] flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faDownload} style={{width: '1rem', height: '1rem'}} />
            Télécharger / Imprimer
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-[#3b82f6] border border-[#3b82f640] hover:bg-[#3b82f610] transition-all duration-300"
          >
            PDF direct
          </a>
        </div>
      </div>

      {/* ── CV CARD ── */}
      <div ref={cvRef} className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
          className="rounded-3xl overflow-hidden border border-[#1a2040] bg-[#0d1220] shadow-2xl shadow-[#000]/60"
        >

          {/* ── HEADER ── */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0d1220] via-[#0f1628] to-[#0d1220] px-8 sm:px-12 pt-10 pb-8 border-b border-[#1a2040]">
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent" />
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#3b82f6] opacity-[0.06] blur-2xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#2563eb] opacity-[0.06] blur-2xl" />

            <div className="relative flex flex-col sm:flex-row gap-8 items-start sm:items-center">

              {/* Photo */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] blur-lg opacity-30" />
                <Image
                  src="/statut.jpg"
                  alt="Joseph Darimathee"
                  width={120}
                  height={120}
                  className="relative rounded-2xl object-cover border-2 border-[#3b82f640] shadow-xl"
                  priority
                />
              </div>

              {/* Identity */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      OMBESSA JOSEPH
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">DARIMATHEE</span>
                    </h1>
                    <p className="mt-1 text-sm font-semibold text-gray-400 font-mono uppercase tracking-widest">
                      Développeur Web & Mobile Fullstack
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3b82f640] bg-[#3b82f610]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#3b82f6] font-mono">Disponible</span>
                  </div>
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                  {[
                    { icon: faPhone, val: "+242 057 064 520" },
                    { icon: faEnvelope, val: "josephdarimathee530@gmail.com" },
                    { icon: faLocationDot, val: "Brazzaville, Congo" },
                  ].map((c) => (
                    <div key={c.val} className="flex items-center gap-2 text-xs text-gray-400">
                      <FontAwesomeIcon icon={c.icon} className="text-[#3b82f6]" style={{width: '0.875rem', height: '0.875rem'}} />
                      <span className="truncate">{c.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] divide-y lg:divide-y-0 lg:divide-x divide-[#1a2040]">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-0 divide-y divide-[#1a2040]">

              {/* Profil */}
              <div className="p-7">
                <SectionTitle>Profil</SectionTitle>
                <p className="text-sm text-gray-400 leading-relaxed mt-3">
                  Développeur passionné depuis plus de 6 ans, spécialisé dans la création d applications web et mobiles modernes. Je transforme des idées complexes en solutions digitales robustes, aidant entreprises et entrepreneurs à se digitaliser avec des technologies de pointe.
                </p>
              </div>

              {/* Compétences avec barres */}
              <div className="p-7">
                <SectionTitle>Compétences</SectionTitle>
                <div className="flex flex-col gap-4 mt-3">
                  {skills.map((s, i) => (
                    <motion.div key={s.label}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.05)}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-300">{s.label}</span>
                        <span className="text-[10px] font-bold text-[#3b82f6] font-mono">{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#1a2040] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Langues */}
              <div className="p-7">
                <SectionTitle>Langues</SectionTitle>
                <div className="flex flex-col gap-4 mt-3">
                  {langues.map((l) => (
                    <div key={l.lang}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-300">{l.lang}</span>
                        <span className="text-[10px] text-gray-500">{l.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#1a2040] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack pills */}
              <div className="p-7">
                <SectionTitle>Technologies</SectionTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {techStack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[#3b82f608] border border-[#3b82f620] text-[10px] font-bold font-mono text-[#60a5fa]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-0 divide-y divide-[#1a2040]">

              {/* Expériences */}
              <div className="p-7 sm:p-9">
                <SectionTitle>Expériences professionnelles</SectionTitle>
                <div className="flex flex-col gap-7 mt-5 relative">
                  <div className="absolute left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-[#3b82f640] to-transparent" />
                  {experiences.map((exp, i) => (
                    <motion.div key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeUp(i * 0.1)}
                      className="relative pl-7"
                    >
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#3b82f6] bg-[#090d1a] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                      </div>

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="font-bold text-white text-sm">{exp.role}</p>
                          <p className="text-[#3b82f6] text-xs font-mono">{exp.company} · {exp.location}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-[#3b82f610] border border-[#3b82f625] text-[10px] font-bold font-mono text-[#60a5fa] whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {exp.tasks.map((t, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="text-[#3b82f6] shrink-0 mt-0.5">▸</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Formations */}
              <div className="p-7 sm:p-9">
                <SectionTitle>Formations</SectionTitle>
                <div className="flex flex-col gap-5 mt-5 relative">
                  <div className="absolute left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-[#3b82f640] to-transparent" />
                  {formations.map((f, i) => (
                    <motion.div key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.1)}
                      className="relative pl-7"
                    >
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#3b82f6] bg-[#090d1a]" />
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-bold text-white text-sm">{f.diploma}</p>
                          <p className="text-[#3b82f6] text-xs font-mono">{f.school}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-[#3b82f610] border border-[#3b82f625] text-[10px] font-bold font-mono text-[#60a5fa] whitespace-nowrap">
                          {f.period}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="p-7 sm:p-9">
                <SectionTitle>En chiffres</SectionTitle>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { val: "6+", label: "Ans d'expérience" },
                    { val: "421+", label: "Clients servis" },
                    { val: "1.2k+", label: "Projets livrés" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#090d1a] border border-[#1a2040]">
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">{s.val}</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-1 font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER CARD ── */}
          <div className="relative px-8 sm:px-12 py-6 border-t border-[#1a2040] flex flex-wrap items-center justify-between gap-4">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f630] to-transparent" />
            <p className="text-xs text-gray-600 font-mono">
              Conçu & développé par <span className="text-[#3b82f6]">Joseph Darimathee</span> · Brazzaville, Congo · 2025
            </p>
            <div className="flex gap-3">
              <Link href="/projets" className="text-xs text-gray-500 hover:text-[#3b82f6] transition-colors">Projets →</Link>
              <Link href="/contact" className="text-xs text-gray-500 hover:text-[#3b82f6] transition-colors">Contact →</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          main { background: white !important; }
        }
      `}</style>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#3b82f6] to-[#2563eb]" />
      <h3 className="text-[11px] font-black text-[#3b82f6] tracking-widest uppercase font-mono">{children}</h3>
    </div>
  );
}
