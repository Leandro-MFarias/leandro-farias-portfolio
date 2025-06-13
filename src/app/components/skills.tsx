"use client";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const list = [
  { name: "React JS", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill className="text-yellow-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-sky-500" />,
  },
  { name: "Jest", icon: <SiJest className="text-rose-700" /> },
  { name: "GIT", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Github", icon: <FaGithub className="text-purple-600" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
  { name: "Node.Js", icon: <FaNodeJs className="text-lime-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
  { name: "Swagger", icon: <SiSwagger className="text-lime-400" /> },
];

export function Skills() {
  return (
    <div className="overflow-hidden flex border-t border-b border-white">
      <ul className="flex gap-10 py-4 animate-infinite-scroll">
        {[...list, ...list].map((item, index) => (
          <li key={index} className="text-6xl">{item.icon}</li>
        ))}
      </ul>
    </div>
  );
}
