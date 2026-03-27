import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  siteUrl?: string;
  infos?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  technologiesClassName?: string;
  infosClassName?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  technologies,
  siteUrl,
  infos,
  titleClassName = "",
  descriptionClassName = "",
  technologiesClassName = "",
  infosClassName = "",
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, {
        y: -6,
        boxShadow: "0 20px 60px rgba(0,255,136,0.15)",
        borderColor: "#3b82f640",
        duration: 0.35,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        y: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        borderColor: "#1a2040",
        duration: 0.4,
        ease: "power2.out",
      });
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-xl border border-[#1a2040] bg-[#0d1220] flex flex-col h-full group cursor-pointer"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
    >
      {/* Image avec overlay gradient */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={800}
          height={500}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent opacity-80" />

        {/* Badge technologie principale */}
        {technologies && technologies[0] && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-[#0d1220]/90 border border-[#3b82f630] backdrop-blur-sm">
            <span className="text-[10px] font-bold font-mono text-[#3b82f6]">{technologies[0]}</span>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className={`text-lg font-bold text-white leading-tight ${titleClassName}`}>{title}</h3>
        <p className={`text-sm text-gray-400 leading-relaxed ${descriptionClassName}`}>{description}</p>

        {infos && (
          <p className={`text-xs text-gray-600 italic ${infosClassName}`}>{infos}</p>
        )}

        {technologies && (
          <div className={`flex flex-wrap gap-1.5 mt-1 ${technologiesClassName}`}>
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#3b82f610] text-[#3b82f6] border border-[#3b82f625] rounded text-[10px] font-bold font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-black font-bold text-sm transition-all duration-200 shadow-md w-fit pointer-events-auto"
          >
            Visiter →
          </a>
        )}
      </div>

      {/* Barre décorative en bas au hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ProjectCard;
