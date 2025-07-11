import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Glasses, Contact, Shield, Users, Award, MapPin, Phone, Clock, Star, Zap, Heart } from "lucide-react"

export default function HomePage() {
  const featuredServices = [
    {
      title: "Eye Examinations",
      description: "Comprehensive eye health assessments using the latest technology",
      href: "/services/eye-examinations",
      icon: Eye,
      image: "/images/services/eye-exam.svg",
    },
    {
      title: "Prescription Eyewear",
      description: "Stylish frames paired with precise prescriptions",
      href: "/services/prescription-eyewear",
      icon: Glasses,
      image: "/images/services/prescription-eyewear.svg",
    },
    {
      title: "Contact Lenses",
      description: "Convenient alternatives to glasses for active lifestyles",
      href: "/services/contact-lenses",
      icon: Contact,
      image: "/images/services/contact-lense.svg",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic equipment for precise eye care",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed optometrists and experienced optical professionals",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Premium eyewear brands and comprehensive warranties",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Individual attention tailored to your unique vision needs",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#B8860B] via-[#DAA520] to-[#FFD700] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        </div>

        {/* Moving Shine Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-shine"></div>
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-45 animate-shine-delayed"></div>
        </div>

        {/* Golden Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full animate-sparkle"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#FFD700] rounded-full animate-sparkle-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-sparkle-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full animate-sparkle"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#FFD700] rounded-full animate-sparkle-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Welcome to
                  <span className="block text-[#4C3D3D] drop-shadow-xl animate-text-glow">Care Optical</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 max-w-xl leading-relaxed drop-shadow-md">
                  Your trusted partner for comprehensive eye care and premium eyewear in Woodbridge, Ontario.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-pulse-glow"
                >
                  <Link href="/book-exam" className="flex items-center">
                    <Eye className="mr-2 h-5 w-5" />
                    Book Your Eye Exam
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#4C3D3D] transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  <Link href="/services/eye-examinations">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative">
                <img
                  src="/images/hero-placeholder.svg"
                  alt="Modern optical clinic interior"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-2xl animate-bounce-slow border-2 border-[#FFD700]">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-[#FFD700] fill-current animate-spin-slow" />
                    <span className="text-[#4C3D3D] font-semibold">5-Star Care</span>
                  </div>
                </div>
                {/* Floating Golden Rings */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#FFD700] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-[#FFD700] rounded-full animate-pulse-delayed"></div>
                <div className="absolute -top-4 -right-4 w-10 h-10 border-2 border-[#FFD700] rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF7D4] to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4C3D3D] mb-4">Why Choose Care Optical?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized care to deliver exceptional vision solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300 animate-pulse-gold">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4C3D3D] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-[#FFF7D4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4C3D3D] mb-4">Our Featured Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive eye care services designed to meet all your vision needs
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border-[#FFD700] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D] text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#FFD700] text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <Link href={service.href}>
                        Learn More
                        <Zap className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#4C3D3D] to-[#4C3D3D]/90 text-white relative overflow-hidden">
        {/* Golden Shine Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent animate-shine-horizontal"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in-up">
              <div className="text-4xl font-bold text-[#FFD700] animate-number-glow">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-[#FFD700] animate-number-glow">5000+</div>
              <div className="text-white/80">Happy Patients</div>
            </div>
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-[#FFD700] animate-number-glow">50+</div>
              <div className="text-white/80">Eyewear Brands</div>
            </div>
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-[#FFD700] animate-number-glow">100%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4C3D3D] mb-4">Visit Us Today</h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Woodbridge, serving Vaughan and surrounding areas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4C3D3D]">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                7766 Martin Grove Rd #20
                <br />
                Woodbridge, ON
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white bg-transparent"
              >
                <Link href="/location">Get Directions</Link>
              </Button>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4C3D3D]">Call Us</h3>
              <p className="text-gray-600 text-lg font-medium">(905) 850-5111</p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white bg-transparent"
              >
                <a href="tel:9058505111">Call Now</a>
              </Button>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4C3D3D]">Office Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 9AM-7PM
                <br />
                Sat: 9AM-5PM, Sun: 11AM-4PM
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white bg-transparent"
              >
                <Link href="/book-exam">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#B8860B] via-[#DAA520] to-[#FFD700] text-white relative overflow-hidden">
        {/* Moving Shine Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-shine"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4C3D3D] drop-shadow-lg">Ready to See Clearly?</h2>
            <p className="text-xl text-[#4C3D3D]/90 leading-relaxed drop-shadow-md">
              Don't wait to take care of your vision. Book your comprehensive eye exam today and discover the difference
              professional eye care can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow"
              >
                <Link href="/book-exam" className="flex items-center">
                  <Eye className="mr-2 h-5 w-5" />
                  Book Your Eye Exam
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#4C3D3D] text-[#4C3D3D] hover:bg-[#4C3D3D] hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm"
              >
                <Link href="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
