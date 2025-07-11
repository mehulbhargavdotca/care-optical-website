import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Heart, Shield, Star, Quote, Eye, Zap } from "lucide-react"

export default function AboutPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Vaughan, ON",
      rating: 5,
      text: "Dr. Chen and her team provided exceptional care during my eye exam. The technology they use is impressive, and I found the perfect frames that suit my style perfectly!",
      service: "Eye Exam & Eyewear",
    },
    {
      name: "Michael Rodriguez",
      location: "Woodbridge, ON",
      rating: 5,
      text: "I've been wearing contact lenses for years, but Care Optical helped me find a much more comfortable brand. The fitting process was thorough and professional.",
      service: "Contact Lenses",
    },
    {
      name: "Emily Chen",
      location: "Maple, ON",
      rating: 5,
      text: "My daughter needed glasses for school, and the staff made the whole experience fun and stress-free. She loves her new frames and feels confident wearing them!",
      service: "Children's Eyewear",
    },
    {
      name: "David Thompson",
      location: "Richmond Hill, ON",
      rating: 5,
      text: "The digital lens technology here is amazing. My vision is clearer than ever, especially when working on the computer. Highly recommend Care Optical!",
      service: "Digital Lenses",
    },
    {
      name: "Lisa Park",
      location: "Thornhill, ON",
      rating: 5,
      text: "Professional, friendly, and knowledgeable staff. They took the time to explain everything and helped me choose the best lens treatments for my lifestyle.",
      service: "Lens Treatments",
    },
    {
      name: "James Wilson",
      location: "Concord, ON",
      rating: 5,
      text: "I needed safety glasses for work, and they had exactly what I needed. The prescription safety eyewear is comfortable and meets all industry standards.",
      service: "Safety Eyewear",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#C07F00] via-[#FFD95A] to-[#C07F00] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">About Care Optical</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional eye care and premium eyewear to the Vaughan community since 2010
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF7D4] to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="mb-20 animate-fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#4C3D3D] mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#C07F00] to-[#FFD95A] mx-auto rounded-full"></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Care Optical was founded with a simple mission: to provide comprehensive, personalized eye care that
                    puts our patients first. Located in the heart of Woodbridge, we have been serving the Vaughan
                    community and surrounding areas for over a decade, building lasting relationships with families who
                    trust us with their vision health.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our journey began when our founder, Dr. Sarah Chen, recognized the need for a modern optical clinic
                    that combined advanced technology with genuine, caring service. Today, we continue to uphold those
                    same values, investing in the latest diagnostic equipment while maintaining the personal touch that
                    makes each patient feel valued and heard.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We believe that clear vision is fundamental to quality of life, and we're committed to helping every
                    patient achieve their best possible vision through comprehensive eye care, premium eyewear, and
                    ongoing support.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Care Optical clinic interior"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                    <div className="flex items-center space-x-2">
                      <Award className="h-6 w-6 text-[#C07F00]" />
                      <span className="text-[#4C3D3D] font-semibold">15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#4C3D3D] mb-6">Our Values</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#C07F00] to-[#FFD95A] mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group bg-white">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-[#4C3D3D] group-hover:text-[#C07F00] transition-colors duration-300">
                      Compassionate Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We treat every patient with empathy, respect, and genuine concern for their well-being.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="text-center border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group bg-white"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-[#4C3D3D] group-hover:text-[#C07F00] transition-colors duration-300">
                      Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We strive for the highest standards in everything we do, from examinations to eyewear fitting.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="text-center border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group bg-white"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-[#4C3D3D] group-hover:text-[#C07F00] transition-colors duration-300">
                      Integrity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We provide honest, transparent recommendations based on your individual needs and budget.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="text-center border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group bg-white"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-[#4C3D3D] group-hover:text-[#C07F00] transition-colors duration-300">
                      Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We're proud to be part of the Vaughan community and committed to giving back.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#4C3D3D] mb-6">What Our Patients Say</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#C07F00] to-[#FFD95A] mx-auto rounded-full"></div>
                <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied patients about their experience at Care
                  Optical
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-white relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-bl-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#FFD95A] fill-current" />
                        ))}
                      </div>
                      <CardTitle className="text-[#4C3D3D] text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-[#C07F00] font-semibold bg-[#FFD95A]/20 px-2 py-1 rounded-full inline-block">
                        {testimonial.service}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-20 bg-gradient-to-r from-[#4C3D3D] to-[#4C3D3D]/90 text-white rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
                  <div className="w-24 h-1 bg-[#FFD95A] mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-3 animate-fade-in-up">
                    <div className="text-5xl font-bold text-[#FFD95A]">15+</div>
                    <div className="text-white/80">Years of Excellence</div>
                  </div>
                  <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="text-5xl font-bold text-[#FFD95A]">5000+</div>
                    <div className="text-white/80">Happy Patients</div>
                  </div>
                  <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <div className="text-5xl font-bold text-[#FFD95A]">50+</div>
                    <div className="text-white/80">Premium Brands</div>
                  </div>
                  <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <div className="text-5xl font-bold text-[#FFD95A]">100%</div>
                    <div className="text-white/80">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Technology */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#4C3D3D] mb-6">Certifications & Technology</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#C07F00] to-[#FFD95A] mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-[#4C3D3D]">Professional Certifications</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        College of Optometrists of Ontario (COO) Licensed
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Canadian Association of Optometrists Member
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Ontario Association of Optometrists Member
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        College of Opticians of Ontario Licensed Staff
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Continuing Education Certified
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        WSIB Approved Provider
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FFD95A] to-[#C07F00] rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-[#4C3D3D]">Advanced Technology</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Digital Retinal Imaging System
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Optical Coherence Tomography (OCT)
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Automated Visual Field Testing
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Digital Refraction System
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Corneal Topography
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 text-[#C07F00] mr-2" />
                        Digital Lens Measurement
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"></div>
                <div
                  className="absolute bottom-6 right-6 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#4C3D3D] mb-4">Experience the Care Optical Difference</h3>
                <p className="text-[#4C3D3D]/80 mb-8 max-w-2xl mx-auto text-lg">
                  Join the thousands of satisfied patients who trust Care Optical for their vision needs. We're here to
                  provide you with exceptional eye care in a comfortable, welcoming environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90 text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <Link href="/book-exam" className="flex items-center">
                      <Eye className="mr-2 h-5 w-5" />
                      Schedule Your Visit
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#4C3D3D] text-[#4C3D3D] hover:bg-[#4C3D3D] hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <Link href="/location">Find Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
