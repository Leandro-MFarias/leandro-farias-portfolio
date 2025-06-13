"use client"

import { motion, useInView } from "motion/react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { useRef } from "react";

const list = [
  { name: "React JS", icon: <FaReact className="text-sky-500" /> },
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
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    once: true,
  });

  return (
    <motion.div 
      className="overflow-hidden border-2 border-x-0 py-6" 
      id="skills" 
      ref={ref}
      animate={{
        y: inView ? 0 : "80%",
        opacity: inView ? [0, 0.1, 1] : 0,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
    >
      <div className="flex space-x-10 MyGradient">
        <motion.div
          className="flex space-x-10 flex-shrink-0"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...list, ...list].map((item, index) => (
            <span key={index} className="text-[70px]">
              {item.icon}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-10 flex-shrink-0"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...list, ...list].map((item, index) => (
            <span key={index} className="text-[70px]">
              {item.icon}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}