import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#4C3D3D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD95A]">Care Optical</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive eye care and premium eyewear in Woodbridge, Ontario.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#FFD95A]" />
                <span className="text-sm">Serving Vaughan & Area</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD95A]">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-[#FFD95A]" />
                <div className="text-sm">
                  <p>7766 Martin Grove Rd #20</p>
                  <p>Woodbridge, ON</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#FFD95A]" />
                <span className="text-sm">(905) 850-5111</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD95A]">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>11:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFD95A]">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/book-exam" className="block hover:text-[#FFD95A] transition-colors">
                Book an Eye Exam
              </Link>
              <Link href="/services" className="block hover:text-[#FFD95A] transition-colors">
                Our Services
              </Link>
              <Link href="/brands" className="block hover:text-[#FFD95A] transition-colors">
                Eyewear Brands
              </Link>
              <Link href="/location" className="block hover:text-[#FFD95A] transition-colors">
                Find Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Care Optical. All rights reserved. | Serving Vaughan and surrounding areas.</p>
          <p className="mt-2">
            Developed by{" "}
            <a
              href="https://mehulbhargav.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD95A] hover:text-white transition-colors duration-300 underline"
            >
              Mehul Bhargav
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
