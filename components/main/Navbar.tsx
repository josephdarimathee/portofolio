'use client';
import Link from "next/link";
import { Socials } from "@/constants";
import Image from "next/image";
import "./navbar-anim.css";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-8">
      <div className="w-full h-full flex flex-row items-center justify-between m-0 px-[0px] max-w-9xl mx-auto" id="navbar">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            id="logo"
            className="flex cursor-pointer hover:animate-slowspin w-8 rounded-full border-2 border-[#7042f8]"
          />


          <span className="flex items-center justify-center font-bold ml-1 text-gray-300 h-full">
            <h1 className="text-lg md:text-xl lg:text-2xl text-center w-full">WebChain Dev</h1>
          </span>
        </a>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center hidden md:flex justify-between min-w-[500px] w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[32px] py-[10px] rounded-full text-gray-200" id="nav-links">
            <Link rel="stylesheet" href="/" className="cursor-pointer nav-anim" >Accuiel</Link>
            <Link rel="stylesheet" href="/about" className="cursor-pointer nav-anim" > Apropos</Link>
            <Link rel="stylesheet" href="/skill" className="cursor-pointer nav-anim" > Competence</Link>
            <Link rel="stylesheet" href="/projets" className="cursor-pointer nav-anim" >Project</Link>
            <Link rel="stylesheet" href="/service" className="cursor-pointer nav-anim" >Service</Link>
          </div>
          {/* Menu responsive avec useState */}
          <div className="flex-1 flex justify-end items-center md:hidden">
            <button
              className="focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 hidden md:flex">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Menu mobile visible si menuOpen est true */}
      {menuOpen && (
        <div className="fixed top-[65px] right-0 h-[calc(100vh-65px)] w-4/5 max-w-xs md:hidden z-50 bg-[#030014e6] backdrop-blur-md px-8 py-6 rounded-l-2xl shadow-2xl animate-slideInRight">
          <div className="flex flex-col items-start gap-2 mb-4">
            <Link rel="stylesheet" href="/" className="cursor-pointer nav-anim" >Accuiel</Link>
            <a href="#about-me" className="cursor-pointer nav-anim text-gray-200" onClick={() => setMenuOpen(false)}>
              Apropos moi
            </a>
            <Link rel="stylesheet" href="/skill" className="cursor-pointer nav-anim" > Competence</Link>
            <Link rel="stylesheet" href="/projets" className="cursor-pointer nav-anim" >Project</Link>
            <Link rel="stylesheet" href="/service" className="cursor-pointer nav-anim" >service</Link>
          </div>
          <div className="flex flex-row gap-3 justify-center w-full md:hidden" id="socials">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={28}
                height={28}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
