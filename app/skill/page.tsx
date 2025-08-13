"use client";


import Image from "next/image";
import { motion } from "framer-motion";

const competencesProgrammation = [
    { nom: "JavaScript (ES6+)", img: "/js.png" },
    { nom: "TypeScript", img: "/ts.png" },
    { nom: "Python", img: "/python.jpeg" },
    { nom: "C#", img: "/csharp.png" },
    { nom: "Node.js", img: "/node-js.png" },
    { nom: "React.js", img: "/react.png" },
    { nom: "Next.js", img: "/next.png" },
    { nom: "HTML5 & CSS3", img: "/html.png" },
    { nom: "Tailwind CSS", img: "/tailwind.png" },
    { nom: "SQL/MySQL", img: "/mysql.png" },
    { nom: "MongoDB", img: "/mongodb.png" },
    { nom: "API REST", img: "/api.png" },
    { nom: "Git & GitHub", img: "/github-142-svgrepo-com.svg" }
];

const competencesJeux = [
    { nom: "Unity (C#)", img: "/unity.png" },
    { nom: "Godot Engine", img: "/godot.png" },
    { nom: "Unreal Engine (bases)", img: "/unreal.png" },
    { nom: "Game Design", img: "/game-design.png" },
    { nom: "Level Design", img: "/level-design.png" },
    { nom: "Animation 2D/3D", img: "/animation.jpeg" },
    { nom: "Physique de jeu", img: "/physics.png" },
    { nom: "Scripting gameplay", img: "/scripting.png" },
    { nom: "Gestion des assets", img: "/assets.jpeg" },
    { nom: "Optimisation mobile/PC", img: "/optimisation.png" }
];

export default function SkillPage() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center z-[20]  "
        >
            <main className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 text-[#7042f8]">Mes Compétences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#a076f8] text-center">Programmation</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {competencesProgrammation.map((comp, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center bg-[#18122b] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-200 border border-[#7042f8]/30 group"
                                    initial={{ opacity: 0, y: 40, rotateY: -90 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    whileHover={{ scale: 1.18, rotate: 8, boxShadow: "0px 0px 32px 8px #a076f8, 0px 8px 32px 0px #7042f8" }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 12, duration: 0.5, delay: idx * 0.07 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.7, ease: "backInOut" }}
                                        className="relative"
                                    >
                                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-90 group-hover:scale-125 transition-all duration-500 blur-lg bg-gradient-to-tr from-[#7042f8] to-[#a076f8] z-0"></span>
                                        <Image src={comp.img} alt={comp.nom} width={48} height={48} className="relative rounded bg-[#18122b] mb-2 z-10 group-hover:shadow-[0_0_32px_8px_#a076f8] transition-shadow duration-500" />
                                    </motion.div>
                                    <span className="text-gray-200 text-center text-sm font-semibold">{comp.nom}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#00e0ff] text-center">Développement de jeux vidéo</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {competencesJeux.map((comp, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center bg-[#18122b] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-200 border border-[#00e0ff]/30 group"
                                    initial={{ opacity: 0, y: 40, rotateY: 90 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    whileHover={{ scale: 1.18, rotate: -8, boxShadow: "0px 0px 32px 8px #00e0ff, 0px 8px 32px 0px #7042f8" }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 12, duration: 0.5, delay: idx * 0.07 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: -360, scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.7, ease: "backInOut" }}
                                        className="relative"
                                    >
                                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-90 group-hover:scale-125 transition-all duration-500 blur-lg bg-gradient-to-tr from-[#00e0ff] to-[#7042f8] z-0"></span>
                                        <Image src={comp.img} alt={comp.nom} width={48} height={48} className="relative rounded bg-[#18122b] mb-2 z-10 group-hover:shadow-[0_0_32px_8px_#00e0ff] transition-shadow duration-500" />
                                    </motion.div>
                                    <span className="text-gray-200 text-center text-sm font-semibold">{comp.nom}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
