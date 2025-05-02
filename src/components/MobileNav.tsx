'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Contact Me', href: '#contact' },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleNav = () => setIsOpen(prev => !prev)

  // const toggleTheme = () => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark'
  //   setTheme(newTheme)
  //   document.documentElement.classList.toggle('dark', newTheme === 'dark')
  //   localStorage.setItem('theme', newTheme)
  // }

  // useEffect(() => {
  //   const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  //   const initialTheme = stored || (prefersDark ? 'dark' : 'light')
  //   setTheme(initialTheme)
  //   document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  // }, [])
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  
    if (newTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  
    localStorage.setItem('theme', newTheme)
  }
  
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
  
    if (initialTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-6 z-50 relative">
        <button onClick={toggleNav} className="text-white dark:text-white">
          {isOpen ? <FaTimes size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={toggleNav}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Top drawer */}
            <motion.div
              className="fixed top-0 left-0 w-full h-[80vh] bg-white dark:bg-[#101928] text-gray-900 dark:text-white z-50 rounded-b-3xl px-6 py-10 flex flex-col items-center space-y-8"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={toggleNav}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl font-semibold hover:text-[#0B03F7] dark:hover:text-blue-400 transition duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="mt-6 flex items-center gap-2 border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1a2238] transition"
              >
                {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
