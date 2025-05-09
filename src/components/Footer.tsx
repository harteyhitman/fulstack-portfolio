'use client'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
  return (
    <footer className="w-full bg-[#101928] text-white p-3 flex flex-col items-center space-y-4">
      <div className="flex space-x-6">
        <a
          href="https://github.com/harteyhitman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0B03F7] transition"
          title="GitHub Profile"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/azeez-oyegoke-434716204/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0B03F7] transition"
          title="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-[#0B03F7] transition"
          title="Send Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="tel:+2340000000000"
          className="hover:text-[#0B03F7] transition"
          title="Call Phone"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>

      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Azeez Oyegoke. All rights reserved.
      </p>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 bg-[#0B03F7] p-3 rounded-full shadow-lg hover:bg-white hover:text-[#0B03F7] transition"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
