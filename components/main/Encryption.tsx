"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      import("gsap").then(({ default: gsap }) => {
        gsap.to(videoRef.current, {
          y: -25,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  return (
    <div className="relative z-20 flex flex-row items-center justify-center min-h-screen w-full h-full bg-[#090d1a] overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Titre */}
      <div className="absolute w-auto h-auto top-10 z-[5] text-center px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[36px] sm:text-[48px] font-extrabold text-white"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">
            {" & "}
          </span>
          Sécurité
        </motion.div>
      </div>

      {/* Lock icon central */}
      <div className="flex flex-col items-center justify-center translate-y-[-40px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto mb-6">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-300 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3b82f640] bg-[#3b82f610] my-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
          <span className="text-xs font-bold font-mono text-[#3b82f6] tracking-widest uppercase">
            Encryption
          </span>
        </div>
      </div>

      {/* Texte bas */}
      <div className="absolute z-[20] bottom-10 px-6 text-center">
        <p className="text-lg sm:text-xl font-medium text-gray-300">
          Sécurisez vos données avec un chiffrement de pointe
        </p>
        <p className="text-sm text-gray-600 mt-2">AES-256 · TLS 1.3 · Zero Knowledge</p>
      </div>

      {/* Vidéo */}
      <div className="w-full flex items-start justify-center absolute z-[10]">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-[65%] h-auto rounded-full opacity-80"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
