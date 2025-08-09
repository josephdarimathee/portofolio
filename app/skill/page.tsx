
import React from "react";

const competencesProgrammation = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "C#",
    "Node.js",
    "React.js",
    "Next.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "SQL/MySQL",
    "MongoDB",
    "API REST",
    "Git & GitHub"
];

const competencesJeux = [
    "Unity (C#)",
    "Godot Engine",
    "Unreal Engine (bases)",
    "Game Design",
    "Level Design",
    "Animation 2D/3D",
    "Physique de jeu",
    "Scripting gameplay",
    "Gestion des assets",
    "Optimisation mobile/PC"
];

export default function SkillPage() {
    return (
        <main className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#7042f8]">Mes Compétences</h1>
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#a076f8]">Programmation</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                        {competencesProgrammation.map((comp, idx) => (
                            <li key={idx}>{comp}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#00e0ff]">Développement de jeux vidéo</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                        {competencesJeux.map((comp, idx) => (
                            <li key={idx}>{comp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
