import React from "react";
import Link from "next/link";

const Service = () => {
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
                <Link href="/service">
                    <button className="px-6 py-2 rounded bg-[#00e0ff] hover:bg-[#7042f8] text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00e0ff] focus:ring-offset-2">
                        Voir plus
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Service;






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

