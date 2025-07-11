import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Eye, Calendar, Shield, Users } from "lucide-react"

export default function ContactLensesPage() {
  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#4C3D3D]">Contact Lenses</h1>
            <p className="text-xl text-[#4C3D3D] mb-8">
              Freedom and convenience with clear vision - contact lenses for every lifestyle
            </p>
            <Button asChild size="lg" className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90">
              <Link href="/book-exam">Schedule Contact Lens Fitting</Link>
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
                Contact lenses are a convenient and versatile alternative to glasses, offering the freedom to enjoy
                clear vision without frames. At Care Optical, we provide a wide variety of contact lenses to suit every
                need, including daily disposables, bi-weekly, monthly, and specialty lenses for astigmatism or
                multifocal prescriptions. Our optometrists work closely with you to determine the best type of lens
                based on your lifestyle, eye health, and prescription requirements.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                We also offer contact lens fittings to ensure comfort and performance. This includes trial lenses,
                personalized instructions on lens care, and follow-up appointments to assess fit and effectiveness.
                Whether you're new to contact lenses or looking to switch brands, we provide guidance and support every
                step of the way. We carry lenses from trusted brands and can also order custom solutions for unique
                prescriptions. With our emphasis on hygiene and eye health, Care Optical ensures that your contact lens
                experience is safe, effective, and comfortable. Schedule your contact lens consultation with us today.
              </p>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Types of Contact Lenses</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Daily Disposables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Fresh, new lenses every day with no cleaning required. Perfect for occasional wear, travel, or
                      those who prefer maximum hygiene and convenience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Eye className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Weekly/Monthly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Longer-wearing lenses that are cleaned and stored nightly. Cost-effective option for regular
                      contact lens wearers with proper care routine.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Specialty Lenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Toric lenses for astigmatism correction and multifocal lenses for presbyopia. Custom solutions for
                      unique prescriptions and eye conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Colored Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Enhancement and opaque colored lenses to change or enhance your natural eye color, available with
                      or without prescription correction.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Contact Lens Fitting Process</h2>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFD95A] mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#FFD95A] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-[#4C3D3D] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4C3D3D] mb-1">Initial Consultation</h3>
                      <p className="text-gray-700">
                        Comprehensive eye exam and discussion of your lifestyle, preferences, and contact lens goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#FFD95A] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-[#4C3D3D] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4C3D3D] mb-1">Measurements & Selection</h3>
                      <p className="text-gray-700">
                        Precise measurements of your corneal curvature and selection of appropriate lens type and brand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#FFD95A] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-[#4C3D3D] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4C3D3D] mb-1">Trial Fitting</h3>
                      <p className="text-gray-700">
                        Trial lenses to assess comfort, vision quality, and proper fit with professional guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#FFD95A] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-[#4C3D3D] font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#4C3D3D] mb-1">Training & Follow-up</h3>
                      <p className="text-gray-700">
                        Comprehensive training on insertion, removal, and care, plus follow-up appointments to ensure
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Benefits of Contact Lenses</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                <li>Unrestricted peripheral vision and natural field of view</li>
                <li>Freedom for sports and physical activities without glasses slipping</li>
                <li>No fogging up in weather changes or temperature differences</li>
                <li>Enhanced appearance without frames affecting your look</li>
                <li>Better compatibility with sunglasses and safety equipment</li>
                <li>Improved self-confidence and convenience for social activities</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Proper Contact Lens Care</h2>
              <p className="text-lg text-gray-700 mb-6">
                Maintaining proper hygiene is essential for safe contact lens wear. We provide detailed instructions on
                cleaning, storing, and handling your lenses. This includes proper hand washing techniques, appropriate
                cleaning solutions, and replacement schedules. Regular follow-up appointments help us monitor your eye
                health and ensure your lenses continue to fit properly.
              </p>

              <div className="bg-[#FFD95A]/20 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-[#4C3D3D] mb-3">Important Safety Reminders:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Never sleep in daily wear contact lenses</li>
                  <li>Replace lenses according to the prescribed schedule</li>
                  <li>Use only recommended cleaning solutions</li>
                  <li>Remove lenses immediately if you experience discomfort</li>
                  <li>Attend all scheduled follow-up appointments</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Trusted Brands We Carry</h2>
              <p className="text-lg text-gray-700 mb-8">
                We partner with leading contact lens manufacturers to offer you the latest in lens technology and
                comfort. Our selection includes brands known for their quality, comfort, and innovative features such as
                moisture retention, UV protection, and advanced materials that allow more oxygen to reach your eyes.
              </p>

              <div className="bg-white p-8 rounded-lg border-2 border-[#FFD95A] text-center">
                <h3 className="text-xl font-bold text-[#4C3D3D] mb-4">Ready to Try Contact Lenses?</h3>
                <p className="text-gray-700 mb-6">
                  Whether you're new to contacts or looking to switch, our expert team will help you find the perfect
                  lenses for your lifestyle and vision needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#C07F00] hover:bg-[#C07F00]/90">
                    <Link href="/book-exam">Book Contact Lens Fitting</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#C07F00] text-[#C07F00] hover:bg-[#C07F00] hover:text-white bg-transparent"
                  >
                    <Link href="/location">Visit Our Clinic</Link>
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
