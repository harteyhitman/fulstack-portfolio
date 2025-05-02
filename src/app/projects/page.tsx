'use client'

import MobileNav from '@/components/MobileNav'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Pichi Finance MVP',
    description: 'A modern DeFi frontend built with Next.js and Zustand — includes live token swap simulation and wallet integration.',
    tech: ['Next.js', 'Zustand', 'TailwindCSS'],
    link: 'https://pichi.finance',
  },
  {
    title: 'TaskMaster',
    description: 'A fullstack task management app with auth, filters, and dashboard views using NestJS + PostgreSQL.',
    tech: ['NestJS', 'PostgreSQL', 'React'],
    link: 'https://taskmaster-app.vercel.app',
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
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-sm px-2 py-1 bg-gray-800 rounded-full text-sky-400">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-sm text-sky-400 underline hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  
  )
}
