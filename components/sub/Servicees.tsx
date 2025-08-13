"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Service: React.FC = () => {

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex   z-[20]  "
        >
            <section className="w-full max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#7042f8]">Mes Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {Services.map((Service, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-[#231942]/80 rounded-xl p-6 shadow-lg border border-[#7042f8]/20 hover:scale-105 transition-transform duration-200">
                            <div className="text-5xl mb-4">{Service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#00e0ff] text-center">{Service.titre}</h3>
                            <p className="text-gray-200 text-center text-sm">{Service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link href="/service">
                        <button className="px-6 py-2 rounded bg-[#00e0ff] hover:bg-[#7042f8] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">
                            Voir plus

                        </button>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Service;


/**
import React from "react";
import Link from "next/link";
const Servicee = () => {
    return (
        <section className="w-full max-w-5xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#7042f8]">Mes Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {Services.map((Service, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-[#231942]/80 rounded-xl p-6 shadow-lg border border-[#7042f8]/20 hover:scale-105 transition-transform duration-200">
                        <div className="text-5xl mb-4">{Service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#00e0ff] text-center">{Service.titre}</h3>
                        <p className="text-gray-200 text-center text-sm">{Service.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/about">
                    <button className="px-6 py-2 rounded bg-[#00e0ff] hover:bg-[#7042f8] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">
                        Voir plus

                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Servicee;



"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function AboutPage() {
    return (

        <motion.div
            initial="hidden"
            animate="visible"
            className="flex   z-[20]  "
        >
            <main className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-[#18122b] text-gray-200">
               
                <h1 className="text-4xl font-bold mb-6 text-[#7042f8] text-center">À propos de moi</h1>
                <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full bg-[#231942]/60 rounded-2xl p-8 shadow-lg">
                    <div className="flex-shrink-0">
                        <Image
                            src="/PHprofil.jpg"
                            alt="Photo de profil"
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-[#7042f8] shadow-xl object-cover"
                            priority
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold text-[#a076f8]">Joseph Darimathee</h2>
                        <p>
                            Passionné par le développement web, la programmation et la création de jeux vidéo, je suis un développeur fullstack avec une forte appétence pour l’innovation et l’apprentissage continu. J’aime concevoir des interfaces modernes, dynamiques et accessibles, tout en explorant les dernières technologies.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-semibold text-[#00e0ff]">Compétences principales :</span> React, Next.js, TypeScript, Node.js, Python, C#, Tailwind CSS, MongoDB, MySQL, Unity, Godot, Game Design</li>
                            <li><span className="font-semibold text-[#00e0ff]">Langues :</span> Français (natif), Anglais (courant)</li>
                            <li><span className="font-semibold text-[#00e0ff]">Qualités :</span> Créatif, rigoureux, autonome, esprit d’équipe</li>
                            <li><span className="font-semibold text-[#00e0ff]">Centres d’intérêt :</span> Jeux vidéo, IA, design, musique, sport</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <Link rel="stylesheet" href="/contact" className="px-4 py-2 rounded bg-[#7042f8] hover:bg-[#a076f8] text-white font-semibold transition">Me contacter</Link>

                            <Link href="../cv" className="px-4 py-2 rounded bg-[#00e0ff] hover:bg-[#00bfff] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">
                                Voir mon CV
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

 */



const Services = [
    {
        titre: "Développement Web",
        description: "Création de sites web modernes, performants et responsives adaptés à vos besoins professionnels.",
        icon: "🌐"
    },
    {
        titre: "Applications Mobiles",
        description: "Conception et développement d'applications mobiles intuitives et performantes pour Android et iOS.",
        icon: "📱"
    },
    {
        titre: "Conseil & Formation",
        description: "Accompagnement, audit technique, et formation sur les technologies web et mobiles pour vos équipes.",
        icon: "🎓"
    }
];
