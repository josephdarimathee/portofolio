import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col w-full overflow-hidden"
      style={{ minHeight: "100dvh" }}
      id="about-me"
    >
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[0] opacity-10 rotate-180"
      >
        <source src="/video_black.mp4" type="video/mp4" />
      </video>

      {/* Fond sombre profond */}
      <div className="absolute inset-0 z-[0] bg-[#090d1a]" />

      {/* Dégradés directionnels */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#090d1a] via-transparent to-[#090d1a]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#090d1a] via-transparent to-[#090d1a] opacity-50" />

      {/* Orbe verte principale */}
      <div className="absolute top-1/4 right-1/3 w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[140px] z-[1]" />
      <div className="absolute bottom-1/3 left-1/4 w-[35vw] max-w-[400px] h-[35vw] max-h-[400px] rounded-full bg-[#2563eb] opacity-[0.06] blur-[100px] z-[1]" />

      {/* Grille décorative subtile */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Points décoratifs */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <HeroContent />
    </div>
  );
};

export default Hero;
