"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-[#18122b] text-gray-200">
            <h1 className="text-4xl font-bold mb-6 text-[#7042f8] text-center">À propos de moi</h1>
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full bg-[#231942]/60 rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0">
                    <Image
                        src="/PHprofil.jpg" // Remplacez par le chemin de votre image dans /public
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
                        <Link rel="stylesheet" href="mailto:mifwebchain@gmail.com" className="px-4 py-2 rounded bg-[#7042f8] hover:bg-[#a076f8] text-white font-semibold transition">Me contacter</Link>
                        <Link rel="stylesheet" href="/../cv" className="px-4 py-2 rounded bg-[#00e0ff] hover:bg-[#00bfff] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">
                            <button className="px-4 py-2 rounded bg-[#00e0ff] hover:bg-[#00bfff] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">Voir mon CV</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
