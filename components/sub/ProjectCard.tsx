import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  siteUrl?: string;
  infos?: string;
}

const ProjectCard = ({ src, title, description, technologies, siteUrl, infos }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#18122b] flex flex-col justify-between h-full">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4 flex flex-col gap-2 flex-1">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {infos && <p className="text-sm text-gray-400 italic">{infos}</p>}
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
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
