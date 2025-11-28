"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-sky-400 h-3"></div>

      {/* Main Header */}
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="UIU Data Science Club Logo"
                width={120}
                height={120}
                className="h-32 w-auto"
              />
              <div>
                <div className="font-bold text-gray-900 text-xl">UIU</div>
                <div className="text-sm text-gray-600">Data Science</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/team" className="text-gray-700 hover:text-[#17A2B8] transition">
                Team
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-[#17A2B8] transition">
                Partners
              </Link>
              <Link href="/questions" className="text-gray-700 hover:text-[#17A2B8] transition">
                Questions Bank
              </Link>
              <Link href="/track" className="text-gray-700 hover:text-[#17A2B8] transition">
                Track Application
              </Link>
              <Link
                href="/events"
                className="bg-[#17A2B8] text-white px-6 py-2 rounded-full hover:bg-[#138496] transition"
              >
                Events
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <Link href="/team" className="text-gray-700 hover:text-[#17A2B8]">
                Team
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-[#17A2B8]">
                Partners
              </Link>
              <Link href="/questions" className="text-gray-700 hover:text-[#17A2B8]">
                Questions Bank
              </Link>
              <Link href="/track" className="text-gray-700 hover:text-[#17A2B8]">
                Track Application
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-[#17A2B8]">
                Events
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
