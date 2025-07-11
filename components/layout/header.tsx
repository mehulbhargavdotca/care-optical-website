"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: "Eye Examinations", href: "/services/eye-examinations" },
    { name: "Prescription Eyewear", href: "/services/prescription-eyewear" },
    { name: "Prescription Lenses", href: "/services/prescription-lenses" },
    { name: "Digital Lenses", href: "/services/digital-lenses" },
    { name: "Lens Treatments", href: "/services/lens-treatments" },
    { name: "Prescription Sunglasses", href: "/services/prescription-sunglasses" },
    { name: "Contact Lenses", href: "/services/contact-lenses" },
    { name: "Safety Eyewear", href: "/services/safety-eyewear" },
    { name: "Children's Eyewear", href: "/services/childrens-eyewear" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/images/care-optical-logo.png"
              alt="Care Optical - Eye Exam"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#4C3D3D] hover:text-[#C07F00] transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-[#4C3D3D] hover:text-[#C07F00] transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-[#4C3D3D] hover:text-[#C07F00] transition-colors">
              About Us
            </Link>
            <Link href="/brands" className="text-[#4C3D3D] hover:text-[#C07F00] transition-colors">
              Brands
            </Link>
            <Link href="/location" className="text-[#4C3D3D] hover:text-[#C07F00] transition-colors">
              Location
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden lg:block bg-[#C07F00] hover:bg-[#C07F00]/90">
            <Link href="/book-exam">Book Exam</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#4C3D3D] hover:text-[#C07F00]">
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-semibold text-[#4C3D3D]">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-4 text-sm text-[#4C3D3D] hover:text-[#C07F00]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link href="/about" className="text-[#4C3D3D] hover:text-[#C07F00]">
                About Us
              </Link>
              <Link href="/brands" className="text-[#4C3D3D] hover:text-[#C07F00]">
                Brands
              </Link>
              <Link href="/location" className="text-[#4C3D3D] hover:text-[#C07F00]">
                Location
              </Link>
              <Button asChild className="bg-[#C07F00] hover:bg-[#C07F00]/90 w-full">
                <Link href="/book-exam">Book Exam</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
