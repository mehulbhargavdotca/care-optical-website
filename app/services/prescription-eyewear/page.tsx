import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Glasses, Palette, Shield, Star } from "lucide-react"

export default function PrescriptionEyewearPage() {
  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#4C3D3D]">Prescription Eyewear</h1>
            <p className="text-xl text-[#4C3D3D] mb-8">
              Stylish frames paired with precise prescriptions for perfect vision and confidence
            </p>
            <Button asChild size="lg" className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90">
              <Link href="/book-exam">Find Your Perfect Frames</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Finding the perfect pair of prescription glasses is both a science and an art. At Care Optical, we offer
                a curated selection of stylish and functional frames paired with precise prescriptions. Whether you're
                looking for a classic, modern, or designer look, our eyewear specialists help you choose frames that
                match your face shape, personality, and lifestyle. Once your prescription is determined, we ensure that
                your lenses are customized to your visual needs.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Our prescription eyewear collection includes a variety of lens options, such as single-vision, bifocals,
                and progressive lenses. We also offer coatings that protect against glare, scratches, and harmful blue
                light. At Care Optical, you're not just getting glasses—you're getting visual clarity, comfort, and
                confidence. We believe your eyewear should enhance your life, not limit it. Come in today and let our
                professionals help you find your next favorite pair of glasses.
              </p>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Our Eyewear Features</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Glasses className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Precision Fitting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Expert frame fitting and adjustment to ensure optimal comfort, proper lens positioning, and the
                      best possible vision correction for your unique facial features.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Palette className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Style Variety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Extensive collection of frames from classic to contemporary styles, including designer brands,
                      budget-friendly options, and specialty frames for every taste and budget.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Quality Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Durable frame materials including titanium, acetate, and memory metal that provide long-lasting
                      comfort and maintain their shape over time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Star className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Expert Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Personalized styling advice from our experienced opticians who help you select frames that
                      complement your face shape, skin tone, and personal style preferences.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Lens Options Available</h2>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFD95A] mb-8">
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                  <li>
                    <strong>Single Vision Lenses:</strong> Perfect for distance or reading correction with crisp, clear
                    vision at one focal distance
                  </li>
                  <li>
                    <strong>Bifocal Lenses:</strong> Traditional two-zone lenses for both distance and near vision with
                    a visible line separation
                  </li>
                  <li>
                    <strong>Progressive Lenses:</strong> No-line multifocal lenses providing seamless vision at all
                    distances - distance, intermediate, and near
                  </li>
                  <li>
                    <strong>Computer Lenses:</strong> Specially designed for digital device users with blue light
                    filtering and reduced eye strain
                  </li>
                  <li>
                    <strong>High-Index Lenses:</strong> Thinner, lighter lenses for stronger prescriptions that reduce
                    lens thickness and weight
                  </li>
                  <li>
                    <strong>Photochromic Lenses:</strong> Adaptive lenses that darken in sunlight and clear indoors for
                    all-day comfort
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Frame Styles for Every Face</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced opticians are trained in facial analysis and frame selection. We consider your face
                shape, features, and personal style to recommend frames that enhance your natural appearance. Whether
                you have a round, oval, square, or heart-shaped face, we have frames that will complement your unique
                features.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold text-[#4C3D3D] mb-2">Classic Styles</h3>
                  <p className="text-gray-600">
                    Timeless designs that never go out of style, perfect for professional and everyday wear.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#4C3D3D] mb-2">Modern Trends</h3>
                  <p className="text-gray-600">
                    Contemporary frames featuring the latest fashion trends and innovative design elements.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#4C3D3D] mb-2">Designer Collections</h3>
                  <p className="text-gray-600">
                    Premium designer frames from renowned brands offering luxury materials and exclusive designs.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">The Perfect Fit Process</h2>
              <p className="text-lg text-gray-700 mb-8">
                Getting the perfect fit is crucial for both comfort and optimal vision. Our fitting process includes
                precise measurements of your pupillary distance, bridge width, temple length, and lens height. We also
                consider your lifestyle needs - whether you spend long hours at a computer, play sports, or need glasses
                for specific activities. After your glasses are ready, we provide professional adjustments and teach you
                proper care techniques to ensure your eyewear lasts for years to come.
              </p>

              <div className="bg-white p-8 rounded-lg border-2 border-[#FFD95A] text-center">
                <h3 className="text-xl font-bold text-[#4C3D3D] mb-4">Ready to Find Your Perfect Frames?</h3>
                <p className="text-gray-700 mb-6">
                  Visit our showroom to try on hundreds of frame styles and work with our expert opticians to find your
                  ideal prescription eyewear.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#C07F00] hover:bg-[#C07F00]/90">
                    <Link href="/book-exam">Schedule Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#C07F00] text-[#C07F00] hover:bg-[#C07F00] hover:text-white bg-transparent"
                  >
                    <Link href="/brands">View Our Brands</Link>
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
