'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import avatar from '../../public/new-avatar.jpg'; // ensure the path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="px-5 gap-22 flex flex-col md:flex-row items-center justify-center md:justify-between  md:gap-32 md:py-10">
      {/* Text Block */}
      <div className="md:text-left text-center  space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl  font-bold leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <br />  <span className="text-sky-500">Azeez Oyegoke</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A full stack developer building modern web apps using Next.js, NestJS, and PostgreSQL — with a deep love for clean UI and dev-core vibes.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4 justify-center md:justify-start"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-2 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Image Block */}
      <motion.div
        className=" flex justify-center md:justify-end"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="w-70 h-70 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-2 md:justify-left border-white ">
          <Image
            src={avatar}
            alt="Azeez Oyegoke Avatar"
            width={192}
            height={192}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
