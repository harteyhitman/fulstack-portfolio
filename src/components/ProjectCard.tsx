'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Pichi Finance App',
    description: 'MVP web app built with Next.js, Zustand, and SCSS for modern finance workflows.',
    tech: ['Next.js', 'Zustand', 'SCSS'],
    demo: 'https://pichi-finance.vercel.app',
    code: 'https://github.com/your-username/pichi-finance',
  },
  {
    title: 'TaskMaster Pro',
    description: 'Full-stack task management app built with NestJS and PostgreSQL.',
    tech: ['NestJS', 'PostgreSQL', 'Next.js'],
    demo: '',
    code: '',
  },
  {
    title: 'Coalition Health UI',
    description: 'Responsive dashboard with chart views and data fetching using Axios.',
    tech: ['Next.js', 'Axios', 'TailwindCSS'],
    demo: '',
    code: '',
  },
  // Add more projects here
]

export default function Projects() {
  const carouselRef = useRef(null)

  return (
    <section id="projects" className="py-14 px-4 md:px-0 justify-center items-center">
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
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
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
  )
}
