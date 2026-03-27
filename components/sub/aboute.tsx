"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay } },
});

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBullseye, faLock, faRocket } from '@fortawesome/free-solid-svg-icons';

const values = [
  { icon: faBolt, title: "Performance", desc: "Chaque ligne de code est pensée pour la vitesse et l'expérience utilisateur." },
  { icon: faBullseye, title: "Précision", desc: "Des interfaces pixel-perfect, rigoureusement testées sur tous les supports." },
  { icon: faLock, title: "Fiabilité", desc: "Solutions robustes, sécurisées et maintenables sur le long terme." },
  { icon: faRocket, title: "Innovation", desc: "Veille technologique permanente pour des stacks modernes et pérennes." },
];

const timeline = [
  { year: "2015–2018", role: "Gestionnaire de bases de données", company: "POINT-NOIR", desc: "Structuration, supervision et gestion de l'information client." },
  { year: "2022–2024", role: "Licence — Analyse & Programmation", company: "IEPA, Brazzaville", desc: "Formation académique en développement logiciel et architecture système." },
  { year: "2023–2024", role: "Développeur Logiciel", company: "Dev-Logiciel", desc: "Développement d'applications, optimisation des performances, travail en équipe multidisciplinaire." },
  { year: "2023–2024", role: "Développeur Web", company: "Dev-ops", desc: "Conception de solutions web, planification et coordination de projets." },
  { year: "2025", role: "Développeur Fullstack Freelance", company: "LeaderDev", desc: "Création de portfolios, applications web & mobiles pour clients internationaux." },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Django", "Flask", "MySQL", "Tailwind CSS", "React Native",
  "PHP", "Godot", "JavaScript", "HTML", "CSS",
];

const  Aboute: React.FC = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <main className="relative z-20 min-h-screen bg-[#090d1a] text-white overflow-x-hidden">

      {/* ── Background ambiance ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2563eb] opacity-[0.05] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex items-center px-5 sm:px-10 lg:px-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-7">
            <motion.div variants={fadeUp(0.1)}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
              <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">À propos de moi</span>
            </motion.div>

            <motion.div variants={fadeUp(0.2)}>
              <h1 className="text-[2.8rem] sm:text-6xl font-black leading-[1.05] tracking-tight">
                Créateur de
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                  solutions digitales
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp(0.3)}
              className="text-gray-400 text-base leading-relaxed max-w-lg">
              Je suis <span className="text-white font-semibold">Joseph Darimathee Ombessa</span>, développeur Fullstack
              basé à Brazzaville, Congo. Passionné depuis plus de 6 ans, je transforme des idées complexes en
              applications web et mobiles performantes, élégantes et sur mesure.
            </motion.p>
              
            <motion.div variants={fadeUp(0.4)} className="flex flex-wrap gap-4 mt-2 relative z-50 pointer-events-auto">
              <Link  href="/contact"
                className="pointer-events-auto inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#3b82f630]">
                Me contacter →
              </Link>
              <Link href="/cv"
                className="pointer-events-auto inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm text-[#3b82f6] border border-[#3b82f640] hover:bg-[#3b82f610] transition-all duration-300">
                Voir mon CV
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp(0.5)}
              className="flex gap-10 mt-4 pt-6 border-t border-[#3b82f615]">
              {[["6+", "Années d'exp."], ["421+", "Clients"], ["1.2k+", "Projets"]].map(([v, l]) => (
                <div key={l} className="flex flex-col">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">{v}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wide font-medium mt-0.5">{l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              ref={imgRef}
              style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] opacity-20 blur-2xl" />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[#3b82f625] bg-[#0d1220]"
                style={{ width: "clamp(260px, 40vw, 380px)" }}>
                <Image
                  src="/statut.jpg"
                  alt="Joseph Darimathee"
                  width={380}
                  height={460}
                  className="w-full object-cover"
                  style={{ height: "clamp(300px, 50vw, 460px)" }}
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-transparent to-transparent" />

                {/* Info card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="bg-[#090d1a]/80 backdrop-blur-md rounded-2xl p-4 border border-[#3b82f625]">
                    <p className="font-bold text-white text-sm">Joseph Darimathee</p>
                    <p className="text-[#3b82f6] text-xs font-mono mt-0.5">Fullstack Developer · Brazzaville</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-gray-400 font-medium">Disponible pour missions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#0d1220] border border-[#3b82f630] rounded-2xl px-4 py-2.5 shadow-xl">
                <span className="text-xs font-mono font-bold text-[#3b82f6]">Next.js · React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0d1220] border border-[#3b82f630] rounded-2xl px-4 py-2.5 shadow-xl">
                <span className="text-xs font-mono font-bold text-[#60a5fa]">Node.js · Python</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative z-10 py-24 px-5 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(0)}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-[#3b82f630] bg-[#3b82f608] mb-4">
              <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">Ma philosophie</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">Ce qui me <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">définit</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp(i * 0.1)}
                className="group relative p-6 rounded-2xl bg-[#0d1220] border border-[#1a2040] hover:border-[#3b82f640] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f640] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#3b82f610] border border-[#3b82f620] mb-4 group-hover:bg-[#3b82f620] transition-colors text-[#3b82f6]">
                  <FontAwesomeIcon icon={v.icon} style={{width: '1.5rem', height: '1.5rem'}} />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative z-10 py-24 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0)}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-[#3b82f630] bg-[#3b82f608] mb-4">
              <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">Parcours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">histoire</span></h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f640] via-[#3b82f620] to-transparent" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeLeft(i * 0.08)}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-[13px] top-1.5 w-5 h-5 rounded-full bg-[#090d1a] border-2 border-[#3b82f6] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  </div>

                  <div className="group p-5 rounded-2xl bg-[#0d1220] border border-[#1a2040] hover:border-[#3b82f630] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-bold text-white text-sm">{item.role}</p>
                        <p className="text-[#3b82f6] text-xs font-mono">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#3b82f610] border border-[#3b82f625] text-[10px] font-bold font-mono text-[#60a5fa] whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="relative z-10 py-24 px-5 sm:px-10 lg:px-20 border-t border-[#3b82f610]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0)}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-[#3b82f630] bg-[#3b82f608] mb-4">
              <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">arsenal</span></h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.1)}
            className="flex flex-wrap justify-center gap-3"
          >
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-[#0d1220] border border-[#1a2040] text-sm font-semibold text-gray-300 font-mono hover:border-[#3b82f640] hover:text-[#3b82f6] hover:bg-[#3b82f608] transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 py-24 px-5 sm:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0)}
            className="relative rounded-3xl border border-[#3b82f630] bg-[#0d1220] p-10 sm:p-14 text-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3b82f608] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent pointer-events-none" />
            <p className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-4">Travaillons ensemble</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
              Un projet en tête ?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Que ce soit pour un site vitrine, une application complexe ou une consultation, je suis disponible et prêt à construire quelque chose d exceptionnel.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-50 pointer-events-auto">
              <Link href="/contact"
                className="pointer-events-auto px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#3b82f630]">
                Démarrer un projet →
              </Link>
              <Link href="/projets"
                className="pointer-events-auto px-8 py-3 rounded-xl font-bold text-sm text-[#3b82f6] border border-[#3b82f640] hover:bg-[#3b82f610] transition-all duration-300">
                Voir mes projets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
export default Aboute;