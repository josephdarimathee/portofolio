"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import "./allprojects-animations.css";
import { motion } from "framer-motion";


const projets = [
    {
        titre: "Portfolio Web",
    description: "Un site personnel moderne pour présenter mes compétences et réalisations.",
        image: "/NextWebsite.png",
        lien: "#"
        
    },
    {
        titre: "Application Food Delivery",
    description: "Application de commande de repas avec React et Node.js.",
        image: "/foodd.png",
        lien: "#"
    },
    {
        titre: "Dashboard Nike",
    description: "Dashboard interactif pour visualiser les ventes Nike.",
        image: "/nikedash.png",
        lien: "#"
    },
    {
        titre: "Réseau Social React",
    description: "Plateforme sociale moderne avec React et Firebase.",
        image: "/reactsocialmedia1.png",
        lien: "#"
    },
    {
        titre: "E-commerce Sneakers",
    description: "Site e-commerce pour sneakers avec paiement Stripe.",
        image: "/shoemap.png",
        lien: "#"
    },
    {
        titre: "Gestionnaire de tâches",
    description: "Application de gestion de tâches collaborative.",
        image: "/Frame 1.png",
        lien: "#"
    },
    {
        titre: "Blog Développeur",
    description: "Blog personnel pour partager des articles tech.",
        image: "/profiol3.png",
        lien: "#"
    },
    {
        titre: "Landing Page Startup",
    description: "Landing page animée pour une startup innovante.",
        image: "/SpaceWebsite.png",
        lien: "#"
    },
];


export default function Allprojet() {
    const projetRefs = useRef<HTMLDivElement[]>([]);
    // Type pour le contenu du popup
    type PopupContent = {
        titre: string;
        description: string;
        image: string;
        info?: string;
        lien?: string;
    };
    // Hooks pour le popup
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState<PopupContent | null>(null);
    const openPopup = (item: PopupContent) => { setPopupContent(item); setPopupOpen(true); };
    const closePopup = () => { setPopupOpen(false); setPopupContent(null); };
    const jeuRefs = useRef<HTMLDivElement[]>([]);
    const appRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const fadeIn = (el: HTMLDivElement) => {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
            // Animation de rotation continue
            gsap.to(el, {
                rotate: 360,
                duration: 8,
                repeat: -1,
                ease: "linear"
            });
        };
        const fadeOut = (el: HTMLDivElement) => {
            gsap.to(el, { opacity: 0, y: 60, duration: 0.7, ease: "power3.in" });
            gsap.to(el, { rotate: 0, duration: 0.7, ease: "power3.in" });
        };
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target as HTMLDivElement;
                if (entry.isIntersecting) fadeIn(el);
                else fadeOut(el);
            });
        }, { threshold: 0.18 });
        // Capture la valeur courante des refs pour le cleanup
        const projetsEls = projetRefs.current.slice();
        const jeuxEls = jeuRefs.current.slice();
        const appsEls = appRefs.current.slice();
        projetsEls.forEach((el) => { if (el) { gsap.set(el, { opacity: 0, y: 60, rotate: 0 }); observer.observe(el); } });
        jeuxEls.forEach((el) => { if (el) { gsap.set(el, { opacity: 0, y: 60, rotate: 0 }); observer.observe(el); } });
        appsEls.forEach((el) => { if (el) { gsap.set(el, { opacity: 0, y: 60, rotate: 0 }); observer.observe(el); } });
        return () => {
            projetsEls.forEach((el) => { if (el) observer.unobserve(el); });
            jeuxEls.forEach((el) => { if (el) observer.unobserve(el); });
            appsEls.forEach((el) => { if (el) observer.unobserve(el); });
        };
    }, []);

   
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center z-[20]  "
        >
            {/* Modal Popup */}
            {popupOpen && popupContent && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
                    <div className="bg-[#18122b] rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-[#7042f8]/40">
                        <button onClick={closePopup} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
                        <Image src={popupContent.image} alt={popupContent.titre} width={320} height={180} className="rounded mb-4 object-cover mx-auto" />
                        <h3 className="text-2xl font-bold text-[#7042f8] mb-2 text-center">{popupContent.titre}</h3>
                        <p className="text-gray-300 mb-4 text-center">{popupContent.description}</p>
                        {popupContent.info && <p className="text-xs text-gray-400 mb-4 text-center">{popupContent.info}</p>}
                        {popupContent.lien && popupContent.lien !== "#" && (
                            <a href={popupContent.lien} target="_blank" rel="noopener noreferrer" className="block text-center px-4 py-2 bg-[#7042f8] hover:bg-[#a076f8] text-white rounded font-bold transition mx-auto w-fit">Lien externe</a>
                        )}
                    </div>
                </div>
            )}
            <section className="py-20 px-4 max-w-5xl mx-auto fade-in-up" id="all-projects">
                <h2 className="text-3xl font-bold mb-8 text-center animated-gradient-text">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projets.map((projet, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a1333] rounded-2xl shadow-lg p-6 flex flex-col items-center card-anim transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7042f8]/40 hover:z-10"
                            style={{ animationDelay: `${idx * 80}ms` }}
                        >
                            <Image
                                src={projet.image}
                                alt={projet.titre}
                                width={300}
                                height={180}
                                className="rounded mb-4 object-cover img-anim"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2 card-title-anim">{projet.titre}</h3>
                            <p className="text-gray-300 mb-4 text-center card-desc-anim">{projet.description}</p>
                            <button onClick={() => openPopup(projet)} className="w-full bg-[#7042f8] hover:bg-[#a076f8] text-white font-bold py-2 px-4 rounded transition-all duration-200 shadow-md">Voir le projet</button>
                        </div>
                    ))}
                </div>
                {/* Section Jeux */}
                <div className="mt-16" id="games-section">
                    <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Jeux</h2>
                    <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">Découvrez une sélection de jeux interactifs pour vous divertir et tester vos compétences. Cliquez sur Jouer le jeu pour commencer une partie !</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                titre: "Jeu du Serpent",
                                description: "Contrôlez le serpent et mangez un maximum de pommes sans toucher les murs.",
                                image: "/serpent.jpg",
                                info: "Score, rapidité, réflexes",
                                lien: "#"
                            },
                            {
                                titre: "Morpion (Tic-Tac-Toe)",
                                description: "Affrontez un ami ou l&apos;ordinateur dans ce classique du jeu de réflexion.",
                                image: "/morpion.jpg",
                                info: "2 joueurs, stratégie",
                                lien: "#"
                            },
                            {
                                titre: "Quiz Culture G",
                                description: "Testez vos connaissances générales avec des questions variées.",
                                image: "/quiz_culture.jpg",
                                info: "Solo, QCM, score",
                                lien: "#"
                            },
                            {
                                titre: "Memory",
                                description: "Retrouvez les paires de cartes identiques le plus vite possible.",
                                image: "/memory.jpg",
                                info: "Mémoire, rapidité",
                                lien: "#"
                            },
                            {
                                titre: "2048",
                                description: "Fusionnez les tuiles pour atteindre le score 2048 !",
                                image: "/2048tuiles.jpg",
                                info: "Réflexion, logique",
                                lien: "#"
                            },
                            {
                                titre: "Casse-briques",
                                description: "Détruisez toutes les briques avec la balle sans la laisser tomber.",
                                image: "/casse_brique.jpg",
                                info: "Adresse, arcade",
                                lien: "#"

                            }
                        ].map((jeu, idx) => (
                            <div key={idx} className="bg-[#13231a] rounded-lg shadow-lg p-4 flex flex-col items-center">
                                <Image src={jeu.image} alt={jeu.titre} width={300} height={180} className="rounded mb-4 object-cover" />
                                <h3 className="text-xl font-semibold text-green-300 mb-2">{jeu.titre}</h3>
                                <p className="text-gray-200 mb-2 text-center">{jeu.description}</p>
                                <p className="text-xs text-gray-400 mb-4">{jeu.info}</p>
                                <button onClick={() => openPopup(jeu)} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-bold transition">Jouer le jeu</button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Section Applications Mobiles */}
                <div className="mt-16" id="mobile-apps-section">
                    <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Applications Mobiles</h2>
                    <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">Découvrez mes applications mobiles développées avec Flutter et React Native. Téléchargez-les pour profiter dune expérience mobile moderne et performante !</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                titre: "Todo App",
                                description: "Gérez vos tâches quotidiennes facilement sur mobile.",
                                image: "/3135768.png",
                                info: "Flutter, Android/iOS",
                                lien: "#"
                            },
                            {
                                titre: "Fitness Tracker",
                                description: "Suivez vos activités sportives et votre santé.",
                                image: "/1048953.png",
                                info: "React Native, Android/iOS",
                                lien: "#"
                            },
                            {
                                titre: "App de Recettes",
                                description: "Trouvez et sauvegardez vos recettes préférées.",
                                image: "/1055687.png",
                                info: "Flutter, Android/iOS",
                                lien: "#"
                            },
                            {
                                titre: "Chat App",
                                description: "Discutez en temps réel avec vos amis et collègues.",
                                image: "/1384060.png",
                                info: "React Native, Android/iOS",
                                lien: "#"
                            },
                            {
                                titre: "E-commerce Mobile",
                                description: "Achetez et vendez des produits depuis votre smartphone.",
                                image: "/1170576.png",
                                info: "Flutter, Android/iOS",
                                lien: "#"
                            },
                            {
                                titre: "App de Voyage",
                                description: "Planifiez vos voyages et découvrez de nouvelles destinations.",
                                image: "/201623.png",
                                info: "React Native, Android/iOS",
                                lien: "#"
                            }
                        ].map((app, idx) => (
                            <div key={idx} className="bg-[#132031] rounded-lg shadow-lg p-4 flex flex-col items-center">
                                <Image src={app.image} alt={app.titre} width={300} height={180} className="rounded mb-4 object-cover" />
                                <h3 className="text-xl font-semibold text-blue-300 mb-2">{app.titre}</h3>
                                <p className="text-gray-200 mb-2 text-center">{app.description}</p>
                                <p className="text-xs text-gray-400 mb-4">{app.info}</p>
                                <button onClick={() => openPopup(app)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-bold transition">Télécharger lapplication</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
 
);

};

