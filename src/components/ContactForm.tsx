'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' }
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) tempErrors.email = 'Enter a valid email'
    if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty'
    setErrors(tempErrors)
    return Object.values(tempErrors).every(x => x === '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    alert('Form submitted!') // Replace this with actual integration (e.g., Formspree, EmailJS)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-0 max-w-1xl mx-auto text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="bg-[#0B03F7] hover:bg-indigo-700 transition duration-300 text-white px-6 py-3 rounded-lg font-medium"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          className="flex flex-col gap-6 md:justify-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">I'm always open to opportunities, collaborations or just a friendly tech chat.</p>

          <div className="flex items-center gap-4">
            <span className="text-xl text-[#0B03F7]">
              <FaEnvelope />
            </span>
            <a href="mailto:oyegoke.a18@gmail.com">oyegoke.a18@gmail.com</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xl text-[#0B03F7]">
              <FaPhoneAlt />
            </span>
            <a href="tel:+234 813 602 3232">+234 813 602 3232</a>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <a href="https://github.com/harteyhitman" target="_blank" rel="noopener noreferrer" title="Visit my Github profile profile">
              <span className="text-2xl hover:text-[#0B03F7] transition">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/azeez-oyegoke-434716204/" target="_blank" rel="noopener noreferrer"   title="Visit my LinkedIn profile">
              <span className="text-2xl hover:text-[#0B03F7] transition">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
