"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Clubarant from "../../public/clubarant.png";
import MusicPlay from "../../public/musicplay.png";
import MediaImg from "../../public/media-img.png";
import Image from "next/image";

const projects = [
  {
    title: "Clubarant",
    description:
      "MVP web app built with Next.js, Zustand, and SCSS for modern E-commerce workflows.",
    tech: ["Next.js", "Nest.js", "Zustand", "SCSS" ],
    demo: "https://digidish-two.vercel.app/",
    code: "https://https://github.com/RogueDevTech/digidish-frontend",
    image: Clubarant,
  },
  {
    title: "Music Play",
    description:
      "Frontend music  app built with React caling music api  .",
    tech: ["Reat.js", "Css", "Axios", "TailwindCSS"],
    demo: "https://music-demo-app.vercel.app/",
    code: "https://github.com/harteyhitman/music-demo-app",
    image: MusicPlay,
  },
  {
    title: "Media Search",
    description:
      "Responsive Search Media with audios and images  data fetching using Axios.",
    tech: ["Next.js","Nest.js", "Axios", "TailwindCSS"],
    demo: "https://mediaseach.vercel.app/",
    code: "https://github.com/harteyhitman/media-search-fulstack",
    image: MediaImg,
  },
  // Add more projects here
];

export default function Projects() {
  const carouselRef = useRef(null);

  return (
    <section
      id="projects"
      className="py-14 px-4  justify-center items-center md:px-20"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 md:px-4"
        ref={carouselRef}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] md:min-w-[400px] bg-[#1A1A1A] rounded-2xl p-6 snap-center shadow-lg border border-gray-800"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4"
            />

            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-sky-900 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm text-sky-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  className="text-sm text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
