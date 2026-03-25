'use client';
import Link from "next/link";
import { Socials } from "@/constants";
import Image from "next/image";
import "./navbar-anim.css";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/skill", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/service", label: "Services" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`
          w-full h-[68px] fixed top-0 z-50
          transition-all duration-500
          px-4 sm:px-6 lg:px-8
          ${scrolled
            ? "bg-[#03001490] backdrop-blur-xl shadow-lg shadow-[#7042f815] border-b border-[#7042f820]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a href="#about-me" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7042f8] to-[#00e0ff] blur-sm opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
              <Image
                src="/logo.png"
                alt="logo"
                width={38}
                height={38}
                className="relative rounded-full border-2 border-[#7042f8] group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <span className="font-bold text-base sm:text-lg text-white tracking-wide">
              WebChain<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7042f8] to-[#00e0ff]">Dev</span>
            </span>
          </a>

          {/* ── Liens desktop (lg+) ── */}
          <div className="hidden lg:flex items-center gap-0.5 bg-[#0300145e] border border-[#7042f830] rounded-full px-5 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`
                  nav-anim px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeLink === link.href ? "text-white bg-[#7042f830]" : "text-gray-400 hover:text-white"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Socials + CTA (md+) ── */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <div className="hidden lg:flex gap-2">
              {Socials.map((social) => (
                <div
                  key={social.name}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#7042f815] border border-[#7042f830] hover:border-[#7042f8] hover:bg-[#7042f830] transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#7042f8] to-[#00e0ff] text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md shadow-[#7042f830] whitespace-nowrap"
            >
              Me contacter
            </a>
          </div>

          {/* ── Hamburger (< lg) ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 cursor-pointer shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-300 rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-gray-300 rounded transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"}`} />
            <span className={`block h-0.5 w-6 bg-gray-300 rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Menu mobile drawer ── */}
      <div
        className={`
          fixed top-[68px] right-0 h-[calc(100dvh-68px)]
          w-[78vw] max-w-[300px]
          lg:hidden z-50
          bg-[#030014f5] backdrop-blur-xl
          border-l border-[#7042f820]
          shadow-2xl shadow-[#7042f830]
          transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          {/* Liens */}
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { setMenuOpen(false); setActiveLink(link.href); }}
                className={`
                  flex items-center gap-3
                  py-3 px-4 rounded-xl
                  text-base font-medium
                  border-b border-[#7042f810]
                  transition-all duration-200
                  ${activeLink === link.href
                    ? "text-white bg-[#7042f820] border-[#7042f830]"
                    : "text-gray-400 hover:text-white hover:bg-[#7042f815]"
                  }
                `}
              >
                <span className="text-[#7042f8] text-xs font-mono w-5 shrink-0">0{i + 1}.</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA mobile */}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full text-center py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#7042f8] to-[#00e0ff] hover:opacity-90 transition-all"
          >
            Me contacter
          </a>

          {/* Socials mobile */}
          <div className="flex gap-3 justify-center mt-5 pt-5 border-t border-[#7042f820]">
            {Socials.map((social) => (
              <div
                key={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7042f815] border border-[#7042f830] hover:border-[#7042f8] transition-all cursor-pointer"
              >
                <Image src={social.src} alt={social.name} width={20} height={20} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
