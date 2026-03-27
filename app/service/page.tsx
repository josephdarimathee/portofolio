"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCartShopping, faGear, faPen, faRocket } from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/service',
  },
}
const services = [
  {
    id: 1,
    nom: "Site Vitrine",
    tagline: "Votre image professionnelle en ligne",
    description:
      "Présentez votre activité, vos services et vos contacts sur une page professionnelle, rapide et optimisée SEO. Design unique, responsive et livré clé en main.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    prix: "à partir de 250€",
    prix_deploiement: "30€/an",
    image: "/sitevitrine.png",
    icon: faGlobe,
    delai: "5–7 jours",
    features: ["Design responsive", "SEO optimisé", "Formulaire de contact", "Google Analytics"],
  },
  {
    id: 2,
    nom: "Site E-commerce",
    tagline: "Vendez sans limites, 24h/24",
    description:
      "Boutique en ligne complète avec paiement sécurisé Stripe, gestion de catalogue, tableau de bord et expérience d'achat fluide sur tous les écrans.",
    technologies: ["Next.js", "Stripe", "Prisma", "MySQL"],
    prix: "à partir de 600€",
    prix_deploiement: "60€/an",
    image: "/deliveroo1.jpg",
    icon: faCartShopping,
    delai: "2–4 semaines",
    features: ["Paiement Stripe", "Gestion stock", "Dashboard admin", "Emails automatiques"],
  },
  {
    id: 3,
    nom: "Application Web",
    tagline: "Sur-mesure, de A à Z",
    description:
      "Développement d'applications web personnalisées avec API REST, authentification, base de données et interface intuitive adaptée à vos processus métier.",
    technologies: ["React", "Node.js", "MongoDB", "API REST"],
    prix: "Sur devis",
    prix_deploiement: "à partir de 50€/an",
    image: "/project2.png",
    icon: faGear,
    delai: "Sur devis",
    features: ["API REST", "Auth sécurisée", "Dashboard temps réel", "Déploiement cloud"],
  },
  {
    id: 4,
    nom: "Blog Professionnel",
    tagline: "Votre voix sur le web",
    description:
      "Blog moderne optimisé SEO pour partager vos articles, votre expertise et actualités. Interface d'édition simple, rapide à charger et élégant.",
    technologies: ["Next.js", "Markdown", "Vercel"],
    prix: "à partir de 300€",
    prix_deploiement: "Gratuit (Vercel)",
    image: "/Frame 1.png",
    icon: faPen,
    delai: "1–2 semaines",
    features: ["Éditeur simplifié", "SEO avancé", "Commentaires", "Newsletter"],
  },
  {
    id: 5,
    nom: "Landing Page Animée",
    tagline: "Convertissez vos visiteurs",
    description:
      "Page d'accueil dynamique et percutante pour promouvoir un produit, un événement ou une application. Animations fluides, CTA optimisés pour la conversion.",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    prix: "à partir de 150€",
    prix_deploiement: "Gratuit (Vercel)",
    image: "/main.svg",
    icon: faRocket,
    delai: "3–5 jours",
    features: ["Animations avancées", "A/B testing", "CTA optimisés", "Chargement rapide"],
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay } },
});

export default function ServicePage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="relative z-20 min-h-screen bg-[#090d1a] text-white overflow-x-hidden">

      {/* ── Ambiance ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#3b82f6] opacity-[0.05] blur-[180px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb] opacity-[0.04] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.012]"
          style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 pb-20 px-5 sm:px-10 lg:px-20 text-center">
        <motion.div initial="hidden" animate="visible">
          <motion.div variants={fadeUp(0.05)}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">What I build</span>
          </motion.div>

          <motion.h1 variants={fadeUp(0.1)}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Des solutions digitales
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
              qui vous propulsent
            </span>
          </motion.h1>

          <motion.p variants={fadeUp(0.18)}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Chaque projet est unique. Je vous accompagne de la conception à la mise en ligne avec des technologies modernes et éprouvées.
          </motion.p>

          {/* Stats rapides */}
          <motion.div variants={fadeUp(0.24)}
            className="inline-flex flex-wrap justify-center gap-8 px-8 py-5 rounded-2xl border border-[#3b82f620] bg-[#0d1220]/80 backdrop-blur-md">
            {[["5", "Services"], ["48h", "Réponse garantie"], ["100%", "Satisfaction client"]].map(([v, l]) => (
              <div key={l} className="flex flex-col items-center">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">{v}</span>
                <span className="text-[11px] text-gray-500 uppercase tracking-wide mt-0.5 font-medium">{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative z-10 px-5 sm:px-10 lg:px-20 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp(idx * 0.07)}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer
                ${hovered === service.id
                  ? "border-[#3b82f640] shadow-2xl shadow-[#3b82f615]"
                  : "border-[#1a2040]"
                }
                ${idx === 2 ? "lg:col-span-2" : ""}
              `}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image + overlay */}
              <div className={`relative overflow-hidden ${idx === 2 ? "h-56" : "h-48"}`}>
                <Image
                  src={service.image}
                  alt={service.nom}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#090d1a]/20 via-[#090d1a]/40 to-[#090d1a]" />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-xl bg-[#090d1a]/80 border border-[#3b82f630] backdrop-blur-md text-xl text-[#3b82f6]">
                  <FontAwesomeIcon icon={service.icon} style={{width: '1.5rem', height: '1.5rem'}} />
                </div>

                {/* Délai badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#090d1a]/80 border border-[#3b82f630] backdrop-blur-md">
                  <span className="text-[10px] font-bold font-mono text-[#60a5fa]">⏱ {service.delai}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#0d1220] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-xl font-black text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                      {service.nom}
                    </h2>
                    <p className="text-xs text-[#3b82f6] font-mono font-semibold mt-0.5">{service.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-black text-white">{service.prix}</p>
                    <p className="text-[10px] text-gray-500 font-mono">{service.prix_deploiement}/an</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-[#3b82f6] shrink-0">▸</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#3b82f608] border border-[#3b82f620] text-[10px] font-bold font-mono text-[#60a5fa]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-50 pointer-events-auto flex gap-3">
                  <Link href="/contact" className="flex-1 pointer-events-auto">
                    <button className="w-full py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-md shadow-[#3b82f630] pointer-events-auto">
                      Souscrire →
                    </button>
                  </Link>
                  <button
                    onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                    className="px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-400 border border-[#1a2040] hover:border-[#3b82f630] hover:text-[#3b82f6] transition-all duration-300 pointer-events-auto"
                  >
                    Détails
                  </button>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {activeId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-[#1a2040]">
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Ce service inclut une consultation initiale, des révisions illimitées pendant la phase de développement,
                          un déploiement assisté et 30 jours de support post-livraison. Contactez-moi pour un devis personnalisé
                          adapté à vos besoins spécifiques.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* ── CTA FINAL ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0)}
          className="mt-20 relative z-50 pointer-events-auto rounded-3xl overflow-hidden border border-[#3b82f630] bg-[#0d1220] p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f608] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent" />

          <p className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-4">
            Vous ne trouvez pas ce qu il vous faut ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Chaque besoin est unique. Contactez-moi pour un devis personnalisé et une consultation gratuite de 30 minutes.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl shadow-[#3b82f630] pointer-events-auto">
            Demander un devis gratuit →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
