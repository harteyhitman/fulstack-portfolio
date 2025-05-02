"use client";

import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <MobileNav />

      <section className=" flex flex-col justify-center items-center px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Talk
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-xl text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Whether you have an idea, an opportunity, or just want to vibe on a
          project — my inbox is open. I'm available for freelance, full-time, or
          contract work.
        </motion.p>

        <form
          action="mailto:your@email.com"
          method="POST"
          encType="text/plain"
          className="w-full max-w-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 bg-[#101928] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#101928] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-[#101928] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
