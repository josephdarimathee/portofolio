"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";


const projets = [
  { titre: "Portfolio Web", description: "Un site personnel moderne pour présenter mes compétences et réalisations.", image: "/NextWebsite.png", lien: "#" },
  { titre: "Application Food Delivery", description: "Application de commande de repas avec React et Node.js.", image: "/foodd.png", lien: "#" },
  { titre: "Dashboard Nike", description: "Dashboard interactif pour visualiser les ventes Nike.", image: "/nikedash.png", lien: "#" },
  { titre: "Réseau Social React", description: "Plateforme sociale moderne avec React et Firebase.", image: "/reactsocialmedia1.png", lien: "#" },
  { titre: "E-commerce Sneakers", description: "Site e-commerce pour sneakers avec paiement Stripe.", image: "/shoemap.png", lien: "#" },
  { titre: "Gestionnaire de tâches", description: "Application de gestion de tâches collaborative.", image: "/Frame 1.png", lien: "#" },
  { titre: "Blog Développeur", description: "Blog personnel pour partager des articles tech.", image: "/profiol3.png", lien: "#" },
  { titre: "Landing Page Startup", description: "Landing page animée pour une startup innovante.", image: "/SpaceWebsite.png", lien: "#" },
];

type PopupContent = { titre: string; description: string; image: string; info?: string; lien?: string };

export default function Allprojet() {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<PopupContent | null>(null);
  const openPopup = (item: PopupContent) => { setPopupContent(item); setPopupOpen(true); };
  const closePopup = () => { setPopupOpen(false); setPopupContent(null); };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          if (entry.isIntersecting) gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
          else gsap.to(el, { opacity: 0, y: 50, duration: 0.5, ease: "power3.in" });
        });
      },
      { threshold: 0.15 }
    );
    const els = cardRefs.current.slice();
    els.forEach((el) => { if (el) { gsap.set(el, { opacity: 0, y: 50 }); observer.observe(el); } });
    return () => els.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#090d1a]">

      {/* Popup */}
      {popupOpen && popupContent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] backdrop-blur-sm px-4">
          <div className="bg-[#0d1220] rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-[#3b82f630]">
            <button onClick={closePopup} className="absolute top-4 right-4 text-gray-400 hover:text-[#3b82f6] text-2xl transition-colors">&times;</button>
            <Image src={popupContent.image} alt={popupContent.titre} width={320} height={180} className="rounded-lg mb-4 object-cover mx-auto" />
            <h3 className="text-xl font-bold text-white mb-2 text-center">{popupContent.titre}</h3>
            <p className="text-gray-400 mb-4 text-center text-sm">{popupContent.description}</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              {popupContent.lien && popupContent.lien !== "#" ? (
                <a href={popupContent.lien} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-black rounded-lg font-bold text-sm transition">
                  Visiter →
                </a>
              ) : (
                <button disabled className="px-5 py-2 bg-gray-700 text-gray-400 rounded-lg font-bold text-sm opacity-60">Lien indisponible</button>
              )}
              <button onClick={closePopup} className="px-5 py-2 border border-[#3b82f630] text-gray-300 rounded-lg font-bold text-sm transition hover:border-[#3b82f6]">Fermer</button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[120px] pointer-events-none" />

      <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tous mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">Projets</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-md">Une sélection complète de mes réalisations web, mobile et interactives.</p>
        </div>

        {/* Web Projects */}
        <div className="relative z-50 pointer-events-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projets.map((projet, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) cardRefs.current[idx] = el; }}
              className="group bg-[#0d1220] rounded-xl border border-[#1a2040] hover:border-[#3b82f640] overflow-hidden cursor-pointer transition-all duration-300"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image src={projet.image} alt={projet.titre} width={400} height={220} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">{projet.titre}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{projet.description}</p>
                <button onClick={() => openPopup(projet)}
                  className="w-full py-2 px-4 rounded-lg bg-[#3b82f615] border border-[#3b82f630] text-[#3b82f6] font-bold text-sm hover:bg-[#3b82f6] hover:text-black transition-all duration-200 pointer-events-auto">
                  Voir le projet →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Jeux */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#3b82f620]" />
            <h2 className="text-2xl font-extrabold text-white">
              🎮 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">Jeux</span>
            </h2>
            <div className="h-px flex-1 bg-[#3b82f620]" />
          </div>
          <div className="relative z-50 pointer-events-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titre: "Jeu du Serpent", description: "Contrôlez le serpent et mangez un maximum de pommes.", image: "/serpent.jpg", info: "Score, rapidité, réflexes", lien: "#" },
              { titre: "Morpion (Tic-Tac-Toe)", description: "Affrontez un ami ou l'ordinateur dans ce classique.", image: "/morpion.jpg", info: "2 joueurs, stratégie", lien: "#" },
              { titre: "Quiz Culture G", description: "Testez vos connaissances générales avec des questions variées.", image: "/quiz_culture.jpg", info: "Solo, QCM, score", lien: "#" },
              { titre: "Memory", description: "Retrouvez les paires de cartes identiques le plus vite possible.", image: "/memory.jpg", info: "Mémoire, rapidité", lien: "#" },
              { titre: "2048", description: "Fusionnez les tuiles pour atteindre le score 2048 !", image: "/2048tuiles.jpg", info: "Réflexion, logique", lien: "#" },
              { titre: "Casse-briques", description: "Détruisez toutes les briques avec la balle.", image: "/casse_brique.jpg", info: "Adresse, arcade", lien: "#" },
            ].map((jeu, idx) => (
              <div key={idx} className="group bg-[#0d1020] rounded-xl border border-[#1a2550] hover:border-[#3b82f640] overflow-hidden cursor-pointer transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image src={jeu.image} alt={jeu.titre} width={300} height={180} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#3b82f6] mb-1">{jeu.titre}</h3>
                  <p className="text-sm text-gray-400 mb-1">{jeu.description}</p>
                  <p className="text-xs text-gray-600 mb-3 font-mono">{jeu.info}</p>
                  <button onClick={() => openPopup(jeu)}
                    className="w-full py-2 px-4 rounded-lg bg-[#3b82f615] border border-[#3b82f630] text-[#3b82f6] font-bold text-sm hover:bg-[#3b82f6] hover:text-black transition-all duration-200 pointer-events-auto">
                    Jouer →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Mobiles */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#3b82f620]" />
            <h2 className="text-2xl font-extrabold text-white">
              📱 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">Applications Mobiles</span>
            </h2>
            <div className="h-px flex-1 bg-[#3b82f620]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titre: "Todo App", description: "Gérez vos tâches quotidiennes facilement sur mobile.", image: "/3135768.png", info: "Flutter, Android/iOS", lien: "#" },
              { titre: "Fitness Tracker", description: "Suivez vos activités sportives et votre santé.", image: "/1048953.png", info: "React Native, Android/iOS", lien: "#" },
              { titre: "App de Recettes", description: "Trouvez et sauvegardez vos recettes préférées.", image: "/1055687.png", info: "Flutter, Android/iOS", lien: "#" },
              { titre: "Chat App", description: "Discutez en temps réel avec vos amis et collègues.", image: "/1384060.png", info: "React Native, Android/iOS", lien: "#" },
              { titre: "E-commerce Mobile", description: "Achetez et vendez des produits depuis votre smartphone.", image: "/1170576.png", info: "Flutter, Android/iOS", lien: "#" },
              { titre: "App de Voyage", description: "Planifiez vos voyages et découvrez de nouvelles destinations.", image: "/201623.png", info: "React Native, Android/iOS", lien: "#" },
            ].map((app, idx) => (
              <div key={idx} className="group bg-[#0d1220] rounded-xl border border-[#1a1a3a] hover:border-[#3b82f640] overflow-hidden cursor-pointer transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image src={app.image} alt={app.titre} width={300} height={180} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#3b82f6] mb-1">{app.titre}</h3>
                  <p className="text-sm text-gray-400 mb-1">{app.description}</p>
                  <p className="text-xs text-gray-600 mb-3 font-mono">{app.info}</p>
                  <button onClick={() => openPopup(app)}
                    className="w-full py-2 px-4 rounded-lg bg-[#3b82f615] border border-[#3b82f630] text-[#3b82f6] font-bold text-sm hover:bg-[#3b82f6] hover:text-black transition-all duration-200">
                    Télécharger →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
