'use client';
import Link from "next/link";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/skill", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/service", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname || "/");
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Sync active link with route
  useEffect(() => {
    setActiveLink(pathname || "/");
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Sliding indicator for desktop nav
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-active="true"]`) as HTMLElement;
    if (!activeEl) return;
    const { offsetLeft, offsetWidth } = activeEl;
    indicatorRef.current.style.left = `${offsetLeft}px`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
  }, [activeLink]);

  return (
    <>
      <nav
        className={`
          w-full h-[68px] fixed top-0 z-50
          transition-all duration-500
          px-4 sm:px-6 lg:px-10
          ${scrolled
            ? "bg-[#090d1a]/92 backdrop-blur-xl shadow-lg shadow-[#3b82f610] border-b border-[#3b82f620]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] blur-sm opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
              <Image
                src="/logo.png"
                alt="logo"
                width={38}
                height={38}
                className="relative rounded-full border-2 border-[#3b82f6] group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <span className="font-extrabold text-base sm:text-lg text-white tracking-wide font-mono">
              Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">Nova</span>
            </span>
          </Link>

          {/* ── Liens desktop ── */}
          <div
            ref={navRef}
            className="hidden lg:flex relative items-center gap-1 bg-[#0d1220]/70 border border-[#3b82f620] rounded-full px-3 py-2 backdrop-blur-md"
          >
            {/* Sliding active pill indicator */}
            <span
              ref={indicatorRef}
              className="absolute top-2 bottom-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] transition-all duration-300 ease-out pointer-events-none z-0 shadow-md shadow-[#3b82f640]"
            />
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive}
                  onClick={() => setActiveLink(link.href)}
                  className={`
                    relative z-10 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300
                    ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ── Socials + CTA ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex gap-2">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b82f610] border border-[#3b82f625] hover:border-[#3b82f6] hover:bg-[#3b82f620] transition-all duration-300 group"
                  title={social.name}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md shadow-[#3b82f640] whitespace-nowrap"
            >
              Me contacter
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 cursor-pointer shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-6 bg-[#3b82f6] rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-[#3b82f6] rounded transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"}`} />
            <span className={`block h-0.5 w-6 bg-[#3b82f6] rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Menu mobile drawer ── */}
      <div
        className={`
          fixed top-[68px] right-0 h-[calc(100dvh-68px)]
          w-[80vw] max-w-[300px]
          lg:hidden z-50
          bg-[#090d1a]/97 backdrop-blur-xl
          border-l border-[#3b82f620]
          shadow-2xl shadow-[#3b82f620]
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">

          {/* Logo dans le drawer */}
          <div className="flex items-center gap-2 mb-8 pb-6 border-b border-[#3b82f615]">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] blur-sm opacity-50" />
              <Image src="/logo.png" alt="logo" width={32} height={32} className="relative rounded-full border-2 border-[#3b82f6]" />
            </div>
            <span className="font-extrabold text-sm text-white font-mono">
              Web<span className="text-[#3b82f6]">Nova</span>
            </span>
          </div>

          {/* Liens */}
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setActiveLink(link.href); }}
                  className={`
                    flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold
                    transition-all duration-200
                    ${isActive
                      ? "text-white bg-gradient-to-r from-[#3b82f620] to-[#2563eb15] border border-[#3b82f630]"
                      : "text-gray-400 hover:text-white hover:bg-[#3b82f610] border border-transparent"
                    }
                  `}
                >
                  <span className={`text-xs font-mono w-5 shrink-0 ${isActive ? "text-[#3b82f6]" : "text-gray-600"}`}>
                    0{i + 1}.
                  </span>
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA mobile */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full text-center py-3 rounded-lg font-bold text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition-all shadow-md shadow-[#3b82f630]"
          >
            Me contacter →
          </Link>

          {/* Socials mobile */}
          <div className="flex gap-3 justify-center mt-5 pt-5 border-t border-[#3b82f615]">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b82f610] border border-[#3b82f625] hover:border-[#3b82f6] hover:bg-[#3b82f620] transition-all cursor-pointer"
                title={social.name}
              >
                <Image src={social.src} alt={social.name} width={20} height={20} className="object-contain opacity-70" />
              </a>
            ))}
          </div>

          {/* Footer du drawer */}
          <p className="text-center text-[10px] text-gray-700 font-mono mt-4">
            © 2025 LeaderDev
          </p>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
