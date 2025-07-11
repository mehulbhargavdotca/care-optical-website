import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Eye, Shield, Users, Clock } from "lucide-react"

export default function EyeExaminationsPage() {
  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#4C3D3D]">Comprehensive Eye Examinations</h1>
            <p className="text-xl text-[#4C3D3D] mb-8">
              Advanced eye care technology and personalized attention for your vision health
            </p>
            <Button asChild size="lg" className="bg-[#4C3D3D] hover:bg-[#4C3D3D]/90">
              <Link href="/book-exam">Schedule Your Eye Exam</Link>
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
                At Care Optical, your vision health is our top priority. Our comprehensive eye examinations go beyond
                just checking if you need glasses. We use the latest technology and techniques to assess the overall
                health of your eyes, ensuring early detection of any potential issues. An eye exam at Care Optical
                includes a series of tests to evaluate your vision and check for eye diseases such as glaucoma,
                cataracts, and macular degeneration. Our licensed optometrists take the time to understand your personal
                vision needs and lifestyle so we can provide tailored recommendations.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                We believe that regular eye exams are essential for everyone, regardless of age or vision quality.
                Children need eye exams to support learning and development, while adults require routine checkups to
                monitor for age-related conditions. Our team creates a welcoming and relaxed environment to ensure a
                comfortable experience for all patients. From digital retinal imaging to pressure testing and visual
                acuity exams, we make sure no detail is overlooked. Book your eye exam today to take the first step
                toward maintaining healthy eyes and clear vision.
              </p>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">What's Included in Your Eye Exam</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Eye className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Vision Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Complete evaluation of your visual acuity, including distance and near vision testing, color
                      vision assessment, and peripheral vision screening.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Eye Health Screening</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Thorough examination for signs of eye diseases including glaucoma, cataracts, macular
                      degeneration, and diabetic retinopathy using advanced diagnostic equipment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Personalized Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Individual consultation to discuss your lifestyle, work environment, and specific vision needs to
                      provide customized recommendations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#FFD95A] rounded-full flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-[#4C3D3D]" />
                    </div>
                    <CardTitle className="text-[#4C3D3D]">Follow-up Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Ongoing monitoring and follow-up appointments to track changes in your vision and eye health over
                      time.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Advanced Technology</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our clinic is equipped with state-of-the-art diagnostic equipment including digital retinal cameras,
                automated refractors, and tonometers for accurate intraocular pressure measurement. We use optical
                coherence tomography (OCT) for detailed imaging of the retina and optic nerve, allowing us to detect
                early signs of eye diseases before symptoms appear. This technology enables us to provide the most
                accurate diagnoses and monitor your eye health with precision.
              </p>

              <h2 className="text-2xl font-bold text-[#4C3D3D] mb-6">Who Should Get Regular Eye Exams</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                <li>Children starting school and throughout their academic years</li>
                <li>Adults over 40 for early detection of age-related conditions</li>
                <li>Individuals with family history of eye diseases</li>
                <li>People with diabetes or other systemic health conditions</li>
                <li>Anyone experiencing vision changes or eye discomfort</li>
                <li>Contact lens wearers for ongoing eye health monitoring</li>
              </ul>

              <div className="bg-white p-8 rounded-lg border-2 border-[#FFD95A] text-center">
                <h3 className="text-xl font-bold text-[#4C3D3D] mb-4">Ready to Schedule Your Eye Exam?</h3>
                <p className="text-gray-700 mb-6">
                  Don't wait until you notice vision problems. Regular eye exams are the best way to maintain healthy
                  vision and catch potential issues early.
                </p>
                <Button asChild size="lg" className="bg-[#C07F00] hover:bg-[#C07F00]/90">
                  <Link href="/book-exam">Book Your Appointment Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
