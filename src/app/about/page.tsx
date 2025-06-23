"use client";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export default function About() {
  return (
    <>
      <MobileNav />
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-b from-[#101928] to-[#0B03F7]/20 text-[#00BCFF]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who’s Azeez Oyegoke?
        </motion.h2>

        <motion.div
          className="max-w-3xl text-lg md:text-xl space-y-6 leading-relaxed text-gray-300 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            I’m a{" "}
            <span className="text-white font-semibold">
              full stack developer
            </span>{" "}
            who codes with purpose and vibes. From slick frontend experiences to
            rock-solid backend APIs, I turn ideas into clean, scalable digital
            products.
          </p>

          <p>
            My weapon of choice? A modern stack:{" "}
            <span className="text-white font-semibold">
              Next.js, NestJS, PostgreSQL
            </span>{" "}
            — and yes, TailwindCSS stays glued to my fingertips.
          </p>

          <p>
            I'm obsessed with details that make a difference — transitions that
            feel like butter, UIs that breathe, and performance that doesn’t
            just impress but *convert*. My mission? Build apps that feel alive
            and make users say: “Damn, who built this?”
          </p>

          <p>
            When I’m not pushing commits, I’m leveling up, sharing knowledge, or
            vibing with a design system that finally makes sense. Whether it’s
            solo builds or team collabs, I bring clarity, energy, and
            straight-up engineering power.
          </p>

          <p className="text-sky-400 font-medium">
            Let's build something future-proof — and maybe a little 🔥.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Feature
            icon={<FaLaptopCode size={32} />}
            title="Code That Performs"
            desc="Clean, scalable, and optimized for speed across the stack."
          />
          <Feature
            icon={<MdDesignServices size={32} />}
            title="Design-Minded Dev"
            desc="Fluent in UI/UX with a pixel-perfect attention to detail."
          />
          <Feature
            icon={<FaRocket size={32} />}
            title="Startup Energy"
            desc="Fast iterations, lean builds, and ship-it mentality."
          />
          <Feature
            icon={<FaUsers size={32} />}
            title="Team Player"
            desc="Strong communicator, great collaborator, always learning."
          />
        </motion.div>
      </section>
    </>
  );
}
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-[#0B03F7]/40 transition-all">
      <div className="text-sky-400 mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
