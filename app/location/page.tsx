import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Phone, Clock, Car, Bus, Navigation } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#4C3D3D]">Visit Our Clinic</h1>
            <p className="text-xl text-[#4C3D3D] mb-8">
              Conveniently located in Woodbridge, serving Vaughan and surrounding areas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <div>
                <Card className="border-[#FFD95A] h-full">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">Find Us on the Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8234567890123!2d-79.6234567890123!3d43.7890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7766+Martin+Grove+Rd%2C+Woodbridge%2C+ON!5e0!3m2!1sen!2sca!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="flex items-center justify-center">
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#C07F00] text-[#C07F00] hover:bg-[#C07F00] hover:text-white bg-transparent"
                      >
                        <a
                          href="https://maps.google.com/?q=7766+Martin+Grove+Rd+%2320,+Woodbridge,+ON"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#C07F00] mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-[#4C3D3D]">Address</p>
                        <p className="text-gray-700">7766 Martin Grove Rd #20</p>
                        <p className="text-gray-700">Woodbridge, ON L4L 1A6</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#C07F00] mr-3" />
                      <div>
                        <p className="font-semibold text-[#4C3D3D]">Phone</p>
                        <p className="text-gray-700">(905) 850-5111</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D] flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Monday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Tuesday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Wednesday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Thursday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Friday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">Saturday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Sunday</span>
                        <span>11:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">Areas We Serve</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      We proudly serve patients from Vaughan and the surrounding communities:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>• Vaughan</div>
                      <div>• Woodbridge</div>
                      <div>• Maple</div>
                      <div>• Thornhill</div>
                      <div>• Concord</div>
                      <div>• Kleinburg</div>
                      <div>• Richmond Hill</div>
                      <div>• King City</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Transportation & Parking */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="border-[#FFD95A]">
                <CardHeader>
                  <CardTitle className="text-[#4C3D3D] flex items-center">
                    <Car className="w-5 h-5 mr-2" />
                    Parking & Driving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free parking available on-site</li>
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Easy access from Highway 7 and Highway 400</li>
                    <li>• Located in Martin Grove Plaza</li>
                    <li>• GPS coordinates: 43.7890, -79.6234</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#FFD95A]">
                <CardHeader>
                  <CardTitle className="text-[#4C3D3D] flex items-center">
                    <Bus className="w-5 h-5 mr-2" />
                    Public Transportation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• YRT Bus Route 20 (Martin Grove)</li>
                    <li>• YRT Bus Route 85 (Rutherford)</li>
                    <li>• Close to Rutherford GO Station</li>
                    <li>• VIVA Blue rapid transit nearby</li>
                    <li>• Multiple bus stops within walking distance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-white p-8 rounded-lg border-2 border-[#FFD95A] text-center">
              <h3 className="text-2xl font-bold text-[#4C3D3D] mb-4">Ready to Visit Us?</h3>
              <p className="text-gray-700 mb-6">
                Schedule your appointment today or stop by during our office hours. We look forward to taking care of
                your vision needs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#C07F00] hover:bg-[#C07F00]/90">
                  <Link href="/book-exam">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#C07F00] text-[#C07F00] hover:bg-[#C07F00] hover:text-white bg-transparent"
                >
                  <a href="tel:9058505111">Call (905) 850-5111</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
