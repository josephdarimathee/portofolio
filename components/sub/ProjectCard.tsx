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
  infosClassName = ""
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const el = cardRef.current;
    if (!el) return;

    // Animation GSAP fade-in au scroll (apparition responsive)
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const h1 = el.querySelector("h1");
          const desc = el.querySelector("p");
          const infos = el.querySelector(".text-sm");
          if (h1) {
            gsap.fromTo(h1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
          }
          if (desc) {
            gsap.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power2.out" });
          }
          if (infos) {
            gsap.fromTo(infos, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" });
          }
        }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#18122b] flex flex-col justify-between h-full">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4 flex flex-col gap-2 flex-1">
        <h1 className={`text-2xl font-semibold text-white ${titleClassName}`}>{title}</h1>
        <p className={`mt-2 text-gray-300 ${descriptionClassName}`}>{description}</p>
        {infos && <p className={`text-sm text-gray-400 italic ${infosClassName}`}>{infos}</p>}
        {technologies && (
          <div className={`flex flex-wrap gap-2 mt-2 ${technologiesClassName}`}>
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-[#7042f8]/20 text-[#7042f8] rounded text-xs font-bold">{tech}</span>
            ))}
          </div>
        )}
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#7042f8] hover:bg-[#a076f8] text-white font-bold py-2 px-4 rounded transition-all duration-200 shadow-md"
          >
            Visiter le site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
