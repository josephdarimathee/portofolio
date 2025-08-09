
import Image from "next/image";
export default function CVPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-12 px-2 bg-[#18122b] text-gray-200">
            <div className="w-full max-w-4xl bg-[#231942]/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-8 border border-[#7042f8]/30">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
                    <div className="flex-shrink-0 flex justify-center md:block">
                        <Image
                            src="/statut.jpg"
                            alt="Photo de profil Joseph Darimathee"
                            width={140}
                            height={140}
                            className="rounded-full border-4 border-[#7042f8] object-cover shadow-lg"
                            priority
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#7042f8]">OMBESSA JOSEPH DARIMATHEE</h1>
                                <h2 className="text-lg font-semibold text-[#00e0ff]">Développeur Web & Mobile</h2>
                            </div>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 px-4 py-2 rounded bg-[#00e0ff] hover:bg-[#7042f8] text-white font-semibold text-sm transition">Télécharger le CV</a>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-8 mt-2 text-sm text-[#e0e0e0]">
                            <span><span className="font-semibold">Téléphone :</span> +242 057064520</span>
                            <span><span className="font-semibold">Mail :</span> josephdarimathee530@gmail.com</span>
                            <span><span className="font-semibold">Adresse :</span> 20 RUE DU BOIS, BRAZZAVILLE</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#7042f8]/30 mb-6" />
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#7042f8] mb-1 uppercase tracking-wide">Profil</h3>
                    <p className="text-sm text-[#e0e0e0]">
                        Je suis passionné en développement web et mobile, et je développe des plateformes web et mobile. Malgré mon âge, je possède une expérience solide pour transformer et innover des idées en projet concret, aidant les entreprises à se digitaliser et à innover grâce à des technologies modernes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#7042f8] mb-1 uppercase tracking-wide">Compétences</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Développement web : HTML, CSS, JavaScript, React, Vue.js, TailwindCSS, SplideJS</li>
                            <li>Bases de données : Base-donnée, POINT-NOIR, structuration et supervision</li>
                            <li>Architecture de logiciels</li>
                            <li>Optimisation des performances</li>
                            <li>Collaboration en équipe multidisciplinaire</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#7042f8] mb-1 uppercase tracking-wide">Langues</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Français : langue maternelle</li>
                            <li>Anglais : niveau courant</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#7042f8] mb-1 uppercase tracking-wide">Expériences professionnelles</h3>
                        <div className="mb-2">
                            <div className="font-semibold">Développeur Logiciel</div>
                            <div className="text-xs text-[#00e0ff]">Dev-Logiciel, BRAZZAVILLE | 2023-2024</div>
                            <ul className="list-disc pl-5 text-sm">
                                <li>Développement et maintenance dapplications</li>
                                <li>Collaboration active au sein déquipes multidisciplinaires</li>
                                <li>Optimisation des performances du site</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <div className="font-semibold">Développeur Web</div>
                            <div className="text-xs text-[#00e0ff]">Dev-ops, BRAZZAVILLE | 2023-2024</div>
                            <ul className="list-disc pl-5 text-sm">
                                <li>Conception et implémentation de solutions logicielles</li>
                                <li>Participation à la planification et à la coordination des projets de développement</li>
                            </ul>
                        </div>
                        <div className="mb-2">
                            <div className="font-semibold">Supervision et structuration de bases de données clients</div>
                            <div className="text-xs text-[#00e0ff]">POINT-NOIR | 2015-2018</div>
                            <ul className="list-disc pl-5 text-sm">
                                <li>Gestion efficace de linformation</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#7042f8] mb-1 uppercase tracking-wide">Formations</h3>
                        <div className="mb-2">
                            <div className="font-semibold">Licence 2 Analyse et programmation</div>
                            <div className="text-xs text-[#00e0ff]">IEPA, BRAZZAVILLE | 2022-2024</div>
                        </div>
                        <div className="mb-2">
                            <div className="font-semibold">Certificat en développement dapplications mobiles</div>
                            <div className="text-xs text-[#00e0ff]">IEPA, BRAZZAVILLE | 2023-2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
