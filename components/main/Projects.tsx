import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-9">
        <ProjectCard
          src="/Macbook-Air-127.0.0.1 (1).png"
          title="Modern Next.js Portfolio"
          description="Portfolio moderne et responsive réalisé avec Next.js, Tailwind CSS et animations."
          technologies={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
          siteUrl="https://votre-portfolio.com"
          infos="Déploiement sur Vercel, SEO optimisé."
        />
        <ProjectCard
          src="/Macbook-Air-127.0.0.1.png"
          title="Interactive Website Cards"
          description="Cartes interactives pour sites web, avec effets de survol et transitions animées."
          technologies={["React", "CSS Modules", "Framer Motion"]}
          siteUrl="https://exemple-cards.com"
          infos="Composants réutilisables, design moderne."
        />
        <ProjectCard
          src="/Macbook-Air-127.0.0.1 (2).png"
          title="Space Themed Website"
          description="Site vitrine sur le thème de l'espace, avec fond animé et navigation immersive."
          technologies={["Next.js", "Three.js", "Tailwind CSS"]}
          siteUrl="https://space-website.com"
          infos="Effets 3D, expérience utilisateur immersive."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Projet1.png"
          title="Application de gestion de tâches"
          description="Application web pour gérer ses tâches quotidiennes, avec notifications et filtres."
          technologies={["React", "Redux", "Node.js", "MongoDB"]}
          siteUrl="https://gestion-taches.com"
          infos="API REST, authentification sécurisée."
        />
        <ProjectCard
          src="/Projet1B.png"
          title="Plateforme de réservation"
          description="Plateforme de réservation en ligne pour événements et services."
          technologies={["Next.js", "Stripe", "Prisma", "MySQL"]}
          siteUrl="https://reservation.com"
          infos="Paiement en ligne, gestion calendrier."
        />
        <ProjectCard
          src="/Projet1C.png"
          title="Jeu web éducatif"
          description="Mini-jeu éducatif pour enfants, apprentissage ludique des mathématiques."
          technologies={["React", "Canvas API", "Firebase"]}
          siteUrl="https://jeu-educatif.com"
          infos="Scores en ligne, responsive mobile."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-5">
        <ProjectCard
          src="/Projet1D.png"
          title="Blog personnel"
          description="Blog moderne pour partager des articles, photos et vidéos."
          technologies={["Next.js", "Markdown", "Vercel"]}
          siteUrl="https://blog-personnel.com"
          infos="SEO, publication facile, design épuré."
        />

      </div>
    </div>
  );
};

export default Projects;
