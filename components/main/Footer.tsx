'use client';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#090d1a] border-t border-[#3b82f615] overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[20vh] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-16">

        {/* Top row : logo + nav */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={36} height={36} className="rounded-full border-2 border-[#3b82f6]" />
              <span className="font-extrabold text-lg text-white font-mono">
                Web<span className="text-[#3b82f6]">Nova</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Développeur Fullstack passionné, créant des expériences digitales modernes et performantes.
            </p>
            <div className="flex gap-2 mt-1 z-50 pointer-events-auto">
              {[
                { href: "https://github.com", icon: faGithub, color: "hover:text-white" },
                { href: "https://linkedin.com/in/votre_linkedin", icon: faLinkedin, color: "hover:text-[#0077b5]" },
                { href: "https://twitter.com/votre_twitter", icon: faTwitter, color: "hover:text-[#1da1f2]" },
                { href: "https://instagram.com/votre_instagram", icon: faInstagram, color: "hover:text-[#e1306c]" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 flex items-center justify-center rounded-lg bg-[#ffffff05] border border-[#ffffff10] text-gray-500 ${s.color} hover:border-[#3b82f630] transition-all duration-300 text-base pointer-events-auto`}
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3 pointer-events-auto">
              <h4 className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-1">Community</h4>
              {[
                { href: "https://www.youtube.com/@votre_chaine", icon: faYoutube, label: "Youtube", color: "hover:text-[#ff0000]" },
                { href: "https://github.com", icon: faGithub, label: "Github", color: "hover:text-white" },
                { href: "https://discord.com/invite/votre_invite", icon: faDiscord, label: "Discord", color: "hover:text-[#5865f2]" },
              ].map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm text-gray-500 ${l.color} transition-colors duration-200 pointer-events-auto`}>
                  <FontAwesomeIcon icon={l.icon} />
                  <span>{l.label}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pointer-events-auto">
              <h4 className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-1">Navigation</h4>
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/about" },
                { label: "Compétences", href: "/skill" },
                { label: "Projets", href: "/projets" },
                { label: "Services", href: "/service" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="text-sm text-gray-500 hover:text-[#3b82f6] transition-colors duration-200 pointer-events-auto">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 pointer-events-auto">
              <h4 className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono mb-1">Contact</h4>
              <p className="text-sm text-gray-500">josephdarimathee530@gmail.com</p>
              <p className="text-sm text-gray-500">Brazzaville, Congo</p>
              
              <Link href="/contact" className="mt-2 inline-flex items-center px-4 py-2 rounded-lg bg-[#3b82f6] text-black font-bold text-xs hover:bg-[#2563eb] transition-all duration-300 w-fit z-50 pointer-events-auto">
                
                Me contacter →
              
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3b82f620] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © 2025 WebNova. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-600">
            Conçu & développé avec{" "}
            <span className="text-[#3b82f6] font-semibold">Joseph Darimathee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
