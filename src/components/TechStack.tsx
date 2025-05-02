'use client'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiNestjs, SiPostgresql, SiTailwindcss, SiTypescript, SiReact, SiJavascript, SiFigma, SiGit, SiCss3, SiHtml5, SiVercel, SiNetlify, SiExpress, SiNodedotjs, SiDocker } from 'react-icons/si'

const techStack = [
  { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
  { name: 'NestJS', icon: <SiNestjs size={32} /> },
  { name: 'React', icon: <SiReact size={32} /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} /> },
  { name: 'JavaScript', icon: <SiJavascript size={32} /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={32} /> },
  { name: 'SCSS', icon: <SiCss3 size={32} /> },
  { name: 'HTML5', icon: <SiHtml5 size={32} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
  { name: 'Express', icon: <SiExpress size={32} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={32} /> },
  { name: 'Git', icon: <SiGit size={32} /> },
  { name: 'Docker', icon: <SiDocker size={32} /> },
  { name: 'Figma', icon: <SiFigma size={32} /> },
  { name: 'Vercel', icon: <SiVercel size={32} /> },
  { name: 'Netlify', icon: <SiNetlify size={32} /> },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-14 px-4 md:px-0 max-w-6xl mx-auto md:justify-between  md:align-top md:flex flex-column"> 
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center md:text-left  mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-white place-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            {tech.icon}
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
