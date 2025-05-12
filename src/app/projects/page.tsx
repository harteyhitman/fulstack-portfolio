'use client'

import MobileNav from '@/components/MobileNav'
import { motion } from 'framer-motion'
import Clubarant from "../../../public/clubarant.png";
import MusicPlay from "../../../public/musicplay.png";
import MediaImg from "../../../public/media-img.png";
import BankApp from "../../../public/bank-app.png";
import RentIt from "../../../public/rent-it.png";
import GithubFinder from "../../../public/github-finder.png";
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
  {
    title: "GithubFinder",
    description:
      "GithubFinder is a web app that allows users to search for GitHub users and view their profiles, repositories, and followers. It is built with React.js and uses the GitHub API for data fetching.",
    tech: ["Next.js", "Axios", "TailwindCSS", "SCSS"],
    demo: "https://github-finder-tau-gilt.vercel.app/",
    code: "https://github.com/harteyhitman/github-finder",
    image: GithubFinder,
  },
  {
    title: "bank-app-indol-one",
    description:
      "Responsive design bank app built with React and SCSS  designs Only.",
    tech: ["React.js", "", "TailwindCSS"],
    demo: "https://bank-app-indol-one.vercel.app/",
    code: "https://github.com/harteyhitman/bank-app",
    image: BankApp,
  },
  {
    title: "estate-platform",
    description:
      "Real estate platform built with React.js and SCSS A concept to promote flexibility for leasing and buying of Properties .",
    tech: ["React.js","CSS"],
    demo: "https://rent-it-real-estate-platform.vercel.app/",
    code: "https://github.com/harteyhitman/Real-estate-project",
    image: RentIt ,
  },
]

export default function ProjectsPage() {
  return (
    <>
          <MobileNav />
      <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 sm:color-[#101928]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Selected Projects
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border border-gray-800 bg-[#101928] hover:border-sky-500 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">{project.title}</h2>
               <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto rounded-lg mb-4"
                        />
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-sm px-2 py-1 bg-gray-800 rounded-full text-sky-400">
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
      </div>
    </section>
    </>
  
  )
}
