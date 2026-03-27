"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { faGlobe, faMobile, faWrench, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Services = [
  {
    titre: "Web Development",
    description: "Création de sites web modernes, performants et responsives adaptés à vos besoins professionnels.",
    icon: faGlobe,
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    titre: "Mobile Apps",
    description: "Conception et développement d'applications mobiles intuitives et performantes pour Android et iOS.",
    icon: faMobile,
    tags: ["React Native", "Flutter", "Firebase"],
  },
  {
    titre: "Dedicated Web Support",
    description: "Support technique continu, maintenance et optimisation de vos applications web existantes.",
    icon: faWrench,
    tags: ["Maintenance", "Optimisation", "Support"],
  },
  {
    titre: "Consultation & Marketing",
    description: "Conseils stratégiques, audit technique et accompagnement pour votre transformation digitale.",
    icon: faChartLine,
    tags: ["SEO", "Audit", "Stratégie"],
  },
];

const Service: React.FC = () => {
 
  return (
    <div
      className="relative w-full bg-[#090d1a] overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[120px] pointer-events-none" />

      <section className="relative z-10 w-full max-w-6xl mx-auto py-24 px-4">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
              What I Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">
              Services
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            Des solutions digitales sur mesure pour propulser votre projet vers le succès.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-[#0d1220] rounded-xl p-6 border border-[#1a2040] hover:border-[#3b82f640] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Numéro de fond */}
              <span className="absolute top-4 right-5 text-6xl font-black text-[#3b82f6] opacity-[0.04] font-mono select-none">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#3b82f610] border border-[#3b82f625] mb-4 group-hover:bg-[#3b82f620] transition-colors duration-300 text-[#3b82f6]">
                <FontAwesomeIcon icon={service.icon} style={{width: '1.75rem', height: '1.75rem'}} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                {service.titre}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-[#3b82f608] border border-[#3b82f620] text-[#3b82f6] rounded text-[10px] font-bold font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Barre verte au bas */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative z-50 pointer-events-auto flex justify-center">
          <Link href="/service" className="pointer-events-auto">
            <button className="px-8 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-black font-bold text-sm transition-all duration-300 shadow-lg shadow-[#3b82f640] pointer-events-auto">
              Voir tous les services →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;
