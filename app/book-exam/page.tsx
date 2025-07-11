"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Phone, Mail } from "lucide-react"

export default function BookExamPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    bestTime: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFF7D4] flex items-center justify-center">
        <Card className="max-w-md mx-auto border-[#FFD95A]">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#FFD95A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#4C3D3D]" />
            </div>
            <CardTitle className="text-[#4C3D3D]">Thank You!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 mb-6">
              Your appointment request has been submitted successfully. We'll contact you within 24 hours to confirm
              your appointment time.
            </p>
            <p className="text-sm text-gray-600 mb-4">A confirmation email has been sent to your email address.</p>
            <Button asChild className="bg-[#C07F00] hover:bg-[#C07F00]/90">
              <a href="/">Return to Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C07F00] to-[#FFD95A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#4C3D3D]">Book Your Eye Exam</h1>
            <p className="text-xl text-[#4C3D3D] mb-8">
              Schedule your comprehensive eye examination with our experienced optometrists
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-[#FFD95A]">
                <CardHeader>
                  <CardTitle className="text-[#4C3D3D]">Schedule Your Appointment</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll contact you to confirm your appointment.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-[#FFD95A] focus:border-[#C07F00]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-[#FFD95A] focus:border-[#C07F00]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-[#FFD95A] focus:border-[#C07F00]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">What are you looking for? *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="border-[#FFD95A] focus:border-[#C07F00]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eye-exam">Comprehensive Eye Exam</SelectItem>
                          <SelectItem value="glasses">Prescription Eyewear</SelectItem>
                          <SelectItem value="contacts">Contact Lens Fitting</SelectItem>
                          <SelectItem value="sunglasses">Prescription Sunglasses</SelectItem>
                          <SelectItem value="children">Children's Eye Exam</SelectItem>
                          <SelectItem value="emergency">Eye Emergency</SelectItem>
                          <SelectItem value="other">Other (please specify in message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Best time to call you? *</Label>
                      <RadioGroup
                        value={formData.bestTime}
                        onValueChange={(value) => handleInputChange("bestTime", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="morning" />
                          <Label htmlFor="morning">Morning (9 AM - 12 PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="afternoon" />
                          <Label htmlFor="afternoon">Afternoon (12 PM - 5 PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <Label htmlFor="evening">Evening (5 PM - 7 PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="anytime" id="anytime" />
                          <Label htmlFor="anytime">Anytime</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Notes or Questions</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please let us know if you have any specific concerns, insurance information, or special requirements..."
                        className="border-[#FFD95A] focus:border-[#C07F00]"
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#C07F00] hover:bg-[#C07F00]/90">
                      {isSubmitting ? "Submitting..." : "Book My Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#C07F00] mr-3" />
                      <div>
                        <p className="font-semibold">(905) 850-5111</p>
                        <p className="text-sm text-gray-600">Call us directly to book</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#C07F00] mr-3" />
                      <div>
                        <p className="font-semibold">info@careoptical.ca</p>
                        <p className="text-sm text-gray-600">Email us your questions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>

                <Card className="border-[#FFD95A]">
                  <CardHeader>
                    <CardTitle className="text-[#4C3D3D]">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Comprehensive eye health examination</li>
                      <li>• Vision testing and prescription update</li>
                      <li>• Discussion of your vision needs and lifestyle</li>
                      <li>• Professional recommendations for eyewear</li>
                      <li>• Appointment typically takes 30-45 minutes</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-[#FFD95A]/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#4C3D3D] mb-3">Emergency Eye Care</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    If you're experiencing a vision emergency, please call us immediately at (905) 850-5111 or visit
                    your nearest emergency room.
                  </p>
                  <p className="text-xs text-gray-600">
                    Emergency symptoms include sudden vision loss, severe eye pain, flashing lights, or eye injuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
