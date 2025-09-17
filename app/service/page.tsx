

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
    // Pour chaque service, ajoutez une propriété image (chemin relatif ou URL)
    {
        nom: "Site Vitrine",
        description: "Présentez votre activité, vos services et vos contacts sur une page professionnelle.",
        technologies: ["Next.js", "React", "TailwindCSS"],
        prix: "à partir de 250€",
        prix_deploiement: "30€/an (hébergement mutualisé)",
        image: "/sitevitrine.png"
    },
    {
        nom: "Site E-commerce",
        description: "Vendez vos produits en ligne avec paiement sécurisé et gestion de catalogue.",
        technologies: ["Next.js", "Stripe", "Prisma", "MySQL"],
        prix: "à partir de 600€",
        prix_deploiement: "60€/an (hébergement + domaine)",
        image: "/deliveroo1.jpg"
    },
    {
        nom: "Application Web sur-mesure",
        description: "Développement d'applications web personnalisées pour répondre à vos besoins spécifiques.",
        technologies: ["React", "Node.js", "MongoDB", "API REST"],
        prix: "sur devis",
        prix_deploiement: "à partir de 50€/an",
        image: "/project2.png"
    },
    {
        nom: "Blog professionnel",
        description: "Partagez vos articles et actualités avec un blog moderne et optimisé SEO.",
        technologies: ["Next.js", "Markdown", "Vercel"],
        prix: "à partir de 300€",
        prix_deploiement: "Gratuit (Vercel) ou 20€/an (autre hébergeur)",
        image: "/Frame 1.png"
    },
    {
        nom: "Landing Page Animée",
        description: "Page d'accueil dynamique pour promouvoir un produit, un événement ou une application.",
        technologies: ["React", "Framer Motion", "TailwindCSS"],
        prix: "à partir de 150€",
        prix_deploiement: "Gratuit (Vercel) ou 15€/an (autre hébergeur)",
        image: "/main.svg"
    },
];

export default function ServicePage() {
    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#7042f8]">Nos Services de Création de Site Web</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-[#18122b] rounded-xl shadow-lg overflow-hidden border border-[#7042f8]/30 hover:shadow-2xl transition-all duration-300">
                        <div className="md:flex">
                            <div className="md:w-1/2 w-full relative h-48 md:h-auto">
                                <Image
                                    src={encodeURI(service.image)}
                                    alt={service.nom}
                                    width={800}
                                    height={480}
                                    className="w-full h-48 md:h-full object-cover"
                                />
                                <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h2 className="text-lg md:text-2xl font-semibold text-white">{service.nom}</h2>
                                    <p className="text-xs md:text-sm text-gray-200 mt-1">{service.description}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between gap-4">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {service.technologies.map((tech, tIdx) => (
                                            <span key={tIdx} className="px-2 py-1 bg-[#7042f8]/20 text-[#7042f8] rounded text-xs font-bold">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="text-gray-300 mb-3">
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-400">Prix de création : <span className="text-green-400 font-bold">{service.prix}</span></span>
                                    <span className="text-sm text-gray-400">Déploiement/année : <span className="text-blue-400 font-bold">{service.prix_deploiement}</span></span>
                                </div>
                                <div className="mt-2">
                                    <Link rel="stylesheet" href="/projets">
                                    <button className="w-full bg-[#7042f8] hover:bg-[#a076f8] text-white font-bold py-2 px-4 rounded transition-all duration-200 shadow-md" >Souscrire</button>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-400 mt-10">Contactez-nous pour un devis personnalisé ou pour toute question sur nos offres !</p>
        </section>
    );
}
