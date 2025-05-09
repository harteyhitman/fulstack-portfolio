'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contacts' },
]
export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="hidden lg:block sticky top-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-gray-800 md:px-20">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-8 px-6">
        <span className="font-bold text-xl tracking-tight"><Link href='/'> Azeez Oyegoke</Link></span>
        <ul className="flex space-x-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <motion.span
                  className={`hover:text-sky-400 transition ${
                    pathname === link.href ? 'text-sky-400' : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
