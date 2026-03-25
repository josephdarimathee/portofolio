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
        className="absolute inset-0 w-full h-full object-cover z-[0] opacity-25 rotate-180"
      >
        <source src="/video_black.mp4" type="video/mp4" />
      </video>

      {/* Dégradés de bord */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030014] via-transparent to-[#030014]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030014] via-transparent to-[#030014] opacity-60" />

      {/* Orbes lumineuses */}
      <div className="absolute top-1/3 left-1/4 w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-[#7042f8] opacity-[0.07] blur-[120px] z-[1] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] max-w-[400px] h-[30vw] max-h-[400px] rounded-full bg-[#00e0ff] opacity-[0.05] blur-[100px] z-[1]" />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#7042f8 1px, transparent 1px), linear-gradient(90deg, #7042f8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <HeroContent />
    </div>
  );
};

export default Hero;
