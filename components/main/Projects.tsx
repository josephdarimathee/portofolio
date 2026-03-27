"use client";
import React, { useRef, useLayoutEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import gsap from "gsap";


const Projects = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
          } else {
            gsap.to(el, { opacity: 0, y: 50, duration: 0.5, ease: "power3.in" });
          }
        });
      },
      { threshold: 0.15 }
    );

    const localRefs = cardRefs.current.slice();
    localRefs.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 50 });
        observer.observe(el);
      }
    });
    return () => localRefs.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <div
      className="relative z-20 w-full bg-[#090d1a] overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div
        className="relative z-10 flex flex-col items-center justify-center py-24 px-4 max-w-7xl mx-auto"
        id="projects"
      >
        {/* Header section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">
              Projets
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            Une sélection de projets web modernes, de la conception à la mise en production.
          </p>
        </div>

        {/* Grid row 1 */}
        <div className="relative z-50 pointer-events-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            {
              src: "/Macbook-Air-127.0.0.1 (1).png",
              title: "Modern Next.js Portfolio",
              description: "Portfolio moderne et responsive réalisé avec Next.js, Tailwind CSS et animations.",
              technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
              siteUrl: "https://votre-portfolio.com",
              infos: "Déploiement sur Vercel, SEO optimisé.",
            },
            {
              src: "/Macbook-Air-127.0.0.1.png",
              title: "Interactive Website Cards",
              description: "Cartes interactives pour sites web, avec effets de survol et transitions animées.",
              technologies: ["React", "CSS Modules", "Framer Motion"],
              siteUrl: "https://exemple-cards.com",
              infos: "Composants réutilisables, design moderne.",
            },
            {
              src: "/Macbook-Air-127.0.0.1 (2).png",
              title: "Space Themed Website",
              description: "Site vitrine sur le thème de l'espace, avec fond animé et navigation immersive.",
              technologies: ["Next.js", "Three.js", "Tailwind CSS"],
              siteUrl: "https://space-website.com",
              infos: "Effets 3D, expérience utilisateur immersive.",
            },
          ].map((proj, i) => (
            <div key={i} ref={(el) => { if (el) cardRefs.current[i] = el; }}>
              <ProjectCard
                {...proj}
                titleClassName="project-title"
                descriptionClassName="project-description"
                technologiesClassName="project-technologies"
                infosClassName="project-infos"
              />
            </div>
          ))}
        </div>

        {/* Grid row 2 */}
        <div className="relative z-50 pointer-events-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            {
              src: "/Projet1.png",
              title: "Application de gestion de tâches",
              description: "Application web pour gérer ses tâches quotidiennes, avec notifications et filtres.",
              technologies: ["React", "Redux", "Node.js", "MongoDB"],
              siteUrl: "https://gestion-taches.com",
              infos: "API REST, authentification sécurisée.",
            },
            {
              src: "/Projet1B.png",
              title: "Plateforme de réservation",
              description: "Plateforme de réservation en ligne pour événements et services.",
              technologies: ["Next.js", "Stripe", "Prisma", "MySQL"],
              siteUrl: "https://reservation.com",
              infos: "Paiement en ligne, gestion calendrier.",
            },
            {
              src: "/Projet1C.png",
              title: "Jeu web éducatif",
              description: "Mini-jeu éducatif pour enfants, apprentissage ludique des mathématiques.",
              technologies: ["React", "Canvas API", "Firebase"],
              siteUrl: "https://jeu-educatif.com",
              infos: "Scores en ligne, responsive mobile.",
            },
          ].map((proj, i) => (
            <div key={i} ref={(el) => { if (el) cardRefs.current[i + 3] = el; }}>
              <ProjectCard
                {...proj}
                titleClassName="project-title"
                descriptionClassName="project-description"
                technologiesClassName="project-technologies"
                infosClassName="project-infos"
              />
            </div>
          ))}
        </div>

        {/* Grid row 3 — centré */}
        <div className="relative z-50 pointer-events-auto w-full flex justify-center">
          <div className="w-full max-w-sm" ref={(el) => { if (el) cardRefs.current[6] = el; }}>
            <ProjectCard
              src="/Projet1D.png"
              title="Blog personnel"
              description="Blog moderne pour partager des articles, photos et vidéos."
              technologies={["Next.js", "Markdown", "Vercel"]}
              siteUrl="https://blog-personnel.com"
              infos="SEO, publication facile, design épuré."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
        </div>

        {/* CTA */}
        <a
          href="/projets"
          className="mt-12 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm text-black bg-[#3b82f6] hover:bg-[#2563eb] transition-all duration-300 shadow-lg shadow-[#3b82f640] pointer-events-auto"
        >
          Voir tous les projets →
        </a>
      </div>
    </div>
  );
};

export default Projects;
