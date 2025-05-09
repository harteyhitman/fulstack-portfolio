import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Azeez Oyegoke | Full Stack Developer',
  description: 'Modern portfolio built with Next.js, Tailwind, and Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0F0F] text-white `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
