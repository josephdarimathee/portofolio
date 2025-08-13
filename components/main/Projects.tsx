
"use client";
import React, { useRef, useLayoutEffect } from "react";
import { useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import gsap from "gsap";
import { motion } from "framer-motion";

const Projects = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Animation GSAP apparition/disparition des cards au scroll
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLDivElement;
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
          });
        } else {
          gsap.to(el, {
            opacity: 0,
            y: 60,
            duration: 0.7,
            ease: "power3.in"
          });
        }
      });
    }, { threshold: 0.2 });
    const localRefs = cardRefs.current.slice();
    localRefs.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 60 });
        observer.observe(el);
      }
    });
    return () => {
      localRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);


  // Animation SplitText GSAP sur le h1 principal de la section Projects
  useEffect(() => {
    if (typeof window === "undefined") return;
    (async () => {

      const h1 = document.querySelector("#projects h1");
      if (h1) {
        // Split le texte en chars

        // Animation GSAP sur chaque lettre
        gsap.fromTo(
          h1.querySelectorAll('.char'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 3.7,
            ease: "power2.out"
          }
        );
      }
    })();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex justify-center z-[20]  "
    >
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-9 justify-center items-center">
          <div ref={el => { if (el) cardRefs.current[0] = el; }}>
            <ProjectCard
              src="/Macbook-Air-127.0.0.1 (1).png"
              title="Modern Next.js Portfolio"
              description="Portfolio moderne et responsive réalisé avec Next.js, Tailwind CSS et animations."
              technologies={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
              siteUrl="https://votre-portfolio.com"
              infos="Déploiement sur Vercel, SEO optimisé."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
          <div ref={el => { if (el) cardRefs.current[1] = el; }}>
            <ProjectCard
              src="/Macbook-Air-127.0.0.1.png"
              title="Interactive Website Cards"
              description="Cartes interactives pour sites web, avec effets de survol et transitions animées."
              technologies={["React", "CSS Modules", "Framer Motion"]}
              siteUrl="https://exemple-cards.com"
              infos="Composants réutilisables, design moderne."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
          <div ref={el => { if (el) cardRefs.current[2] = el; }}>
            <ProjectCard
              src="/Macbook-Air-127.0.0.1 (2).png"
              title="Space Themed Website"
              description="Site vitrine sur le thème de l'espace, avec fond animé et navigation immersive."
              technologies={["Next.js", "Three.js", "Tailwind CSS"]}
              siteUrl="https://space-website.com"
              infos="Effets 3D, expérience utilisateur immersive."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center">
          <div ref={el => { if (el) cardRefs.current[3] = el; }}>
            <ProjectCard
              src="/Projet1.png"
              title="Application de gestion de tâches"
              description="Application web pour gérer ses tâches quotidiennes, avec notifications et filtres."
              technologies={["React", "Redux", "Node.js", "MongoDB"]}
              siteUrl="https://gestion-taches.com"
              infos="API REST, authentification sécurisée."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
          <div ref={el => { if (el) cardRefs.current[4] = el; }}>
            <ProjectCard
              src="/Projet1B.png"
              title="Plateforme de réservation"
              description="Plateforme de réservation en ligne pour événements et services."
              technologies={["Next.js", "Stripe", "Prisma", "MySQL"]}
              siteUrl="https://reservation.com"
              infos="Paiement en ligne, gestion calendrier."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
          <div ref={el => { if (el) cardRefs.current[5] = el; }}>
            <ProjectCard
              src="/Projet1C.png"
              title="Jeu web éducatif"
              description="Mini-jeu éducatif pour enfants, apprentissage ludique des mathématiques."
              technologies={["React", "Canvas API", "Firebase"]}
              siteUrl="https://jeu-educatif.com"
              infos="Scores en ligne, responsive mobile."
              titleClassName="project-title"
              descriptionClassName="project-description"
              technologiesClassName="project-technologies"
              infosClassName="project-infos"
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-5 justify-center items-center">
          <div ref={el => { if (el) cardRefs.current[6] = el; }}>
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
      </div>
    </motion.div>
  );
};

export default Projects;
