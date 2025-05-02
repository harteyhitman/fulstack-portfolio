'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="py-10 flex align-cnter justify-center md:justify-between  flex-col md:flex-row  md:gap-2 md:py-10">
        <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
        <section id="about" className="py- px-8 max-w-2xl mx-auto md:px-2">
      <motion.div
        className="text-gray-400 text-lg leading-relaxed space-y-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          I'm Azeez Oyegoke — a passionate full stack developer with a sharp eye for UI/UX
          and the technical chops to bring high-performance apps to life.
        </p>
        <p>
          I specialize in building scalable and maintainable software using technologies like{' '}
          <span className=" font-semibold">Next.js, NestJS, PostgreSQL</span> and
          <span className=" font-semibold"> TailwindCSS</span>. On the frontend, I make
          sure the user experience is buttery smooth with smart interactions and modern animations.
        </p>
        <p>
          Outside of coding, I’m big on learning, collaboration, and shipping products that make
          real impact. Whether I’m solving technical challenges or refining design systems, I’m all
          in — from pixels to Postgres.
        </p>
      </motion.div>
    </section>
    </div>
  
  )
}
