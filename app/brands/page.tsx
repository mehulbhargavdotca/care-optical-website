import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, Star, Award, Glasses } from "lucide-react"

export default function BrandsPage() {
  // Premium brand logos - now featuring 30 actual luxury brands
  const brands = [
    {
      id: 1,
      name: "Bulgari",
      image: "/images/brands/bulgari.png",
      description: "Luxury Italian jewelry and eyewear brand known for bold designs and exceptional craftsmanship.",
    },
    {
      id: 2,
      name: "Polo Ralph Lauren",
      image: "/images/brands/polo-ralph-lauren.png",
      description: "Classic American luxury lifestyle brand offering timeless eyewear designs.",
    },
    {
      id: 3,
      name: "Burberry",
      image: "/images/brands/burberry.png",
      description: "British luxury fashion house renowned for innovative designs and quality craftsmanship.",
    },
    {
      id: 4,
      name: "Giorgio Armani",
      image: "/images/brands/giorgio-armani.png",
      description: "Italian luxury fashion brand offering sophisticated and elegant eyewear collections.",
    },
    {
      id: 5,
      name: "Givenchy",
      image: "/images/brands/givenchy.png",
      description: "French luxury fashion and perfume house known for haute couture and premium eyewear.",
    },
    {
      id: 6,
      name: "Coach",
      image: "/images/brands/coach.png",
      description: "American luxury fashion company specializing in leather goods and stylish eyewear.",
    },
    {
      id: 7,
      name: "Gucci",
      image: "/images/brands/gucci.png",
      description: "Italian luxury fashion house known for innovative designs and premium quality eyewear.",
    },
    {
      id: 8,
      name: "Alexander McQueen",
      image: "/images/brands/alexander-mcqueen.png",
      description: "British luxury fashion house known for dramatic and avant-garde eyewear designs.",
    },
    {
      id: 9,
      name: "Nike",
      image: "/images/brands/nike.png",
      description: "Leading sports brand offering performance eyewear for athletes and active lifestyles.",
    },
    {
      id: 10,
      name: "Tom Ford",
      image: "/images/brands/tom-ford.png",
      description: "Luxury fashion brand known for sophisticated and glamorous eyewear collections.",
    },
    {
      id: 11,
      name: "Kate Spade",
      image: "/images/brands/kate-spade.png",
      description: "American luxury fashion brand known for colorful, optimistic designs and quality craftsmanship.",
    },
    {
      id: 12,
      name: "Oakley",
      image: "/images/brands/oakley.png",
      description: "Leading sports and lifestyle eyewear brand known for innovative lens technology and performance.",
    },
    {
      id: 13,
      name: "Prada",
      image: "/images/brands/prada.png",
      description: "Italian luxury fashion house renowned for minimalist designs and premium materials since 1913.",
    },
    {
      id: 14,
      name: "Lacoste",
      image: "/images/brands/lacoste.png",
      description: "French clothing company known for its iconic crocodile logo and sporty-chic eyewear.",
    },
    {
      id: 15,
      name: "Tiffany & Co.",
      image: "/images/brands/tiffany-co.png",
      description: "American luxury jewelry and specialty retailer offering elegant and timeless eyewear designs.",
    },
    {
      id: 16,
      name: "Jimmy Choo",
      image: "/images/brands/jimmy-choo.png",
      description: "British luxury fashion house specializing in shoes, handbags, and glamorous eyewear.",
    },
    {
      id: 17,
      name: "Hugo Boss",
      image: "/images/brands/hugo-boss.png",
      description: "German luxury fashion house known for sophisticated menswear and premium eyewear collections.",
    },
    {
      id: 18,
      name: "Versace",
      image: "/images/brands/versace.png",
      description: "Italian luxury fashion company known for bold designs, vibrant colors, and iconic Medusa logo.",
    },
    {
      id: 19,
      name: "Michael Kors",
      image: "/images/brands/michael-kors.png",
      description: "American fashion designer brand offering accessible luxury and contemporary eyewear styles.",
    },
    {
      id: 20,
      name: "Maui Jim",
      image: "/images/brands/maui-jim.png",
      description: "Hawaiian sunglasses company known for superior lens technology and vibrant, tropical designs.",
    },
    {
      id: 21,
      name: "Tommy Hilfiger",
      image: "/images/brands/tommy-hilfiger.png",
      description: "Classic American fashion brand known for its preppy style and iconic flag logo.",
    },
    {
      id: 22,
      name: "Puma",
      image: "/images/brands/puma.png",
      description: "Global sports brand offering athletic and lifestyle eyewear with a focus on performance and style.",
    },
    {
      id: 23,
      name: "Swarovski",
      image: "/images/brands/swarovski.png",
      description: "Austrian producer of crystal, known for its sparkling jewelry and elegant eyewear designs.",
    },
    {
      id: 24,
      name: "Carrera",
      image: "/images/brands/carrera.png",
      description: "Iconic eyewear brand with a strong heritage in sports and fashion, known for bold designs.",
    },
    {
      id: 25,
      name: "Diesel",
      image: "/images/brands/diesel.png",
      description:
        "Italian retail clothing company, known for its denim and casual wear, including distinctive eyewear.",
    },
    {
      id: 26,
      name: "Fendi",
      image: "/images/brands/fendi.png",
      description: "Italian luxury fashion house known for its fur, leather goods, and high-end fashion eyewear.",
    },
    {
      id: 27,
      name: "Tory Burch",
      image: "/images/brands/tory-burch.png",
      description: "American fashion brand known for its accessible luxury clothing, shoes, and stylish eyewear.",
    },
    {
      id: 28,
      name: "Saint Laurent",
      image: "/images/brands/saint-laurent.png",
      description: "French luxury fashion house known for its iconic designs and high-end fashion eyewear.",
    },
    {
      id: 29,
      name: "Porsche Design",
      image: "/images/brands/porsche-design.png",
      description: "Luxury brand known for its functional, purist, and innovative designs, including premium eyewear.",
    },
    {
      id: 30,
      name: "Marc Jacobs",
      image: "/images/brands/marc-jacobs.png",
      description: "American fashion designer known for his eponymous fashion label and contemporary eyewear.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF7D4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#B8860B] via-[#DAA520] to-[#FFD700] text-white py-20 relative overflow-hidden">
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <Glasses className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg animate-text-glow">
              Premium Eyewear Brands
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discover our extensive collection of world-renowned eyewear brands, carefully selected for quality, style,
              and innovation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF7D4] to-transparent"></div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4C3D3D] mb-4">Our Brand Partners</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We partner with the world's leading eyewear manufacturers to bring you the finest selection of frames,
              lenses, and optical accessories
            </p>
          </div>

          {/* Featured Premium Brands Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#4C3D3D] mb-8 text-center">Featured Luxury Collections</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-[#FFD700] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#4C3D3D] mb-2">Designer Collection</h4>
                  <p className="text-gray-600">
                    Luxury frames from world-renowned fashion houses and premium optical brands
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#FFD700] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#4C3D3D] mb-2">Popular Brands</h4>
                  <p className="text-gray-600">
                    Trusted names in eyewear offering quality, comfort, and style for everyday wear
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#FFD700] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#4C3D3D] mb-2">Specialty Eyewear</h4>
                  <p className="text-gray-600">
                    Sports, safety, and specialized eyewear for specific needs and activities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Premium Brands Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#4C3D3D] mb-8 text-center">Luxury Brand Showcase</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
              {brands.slice(0, 30).map((brand) => (
                <Card
                  key={brand.id}
                  className="border-[#FFD700] hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-white group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="aspect-square bg-gray-50 rounded-lg mb-3 overflow-hidden group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
                      <img
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brand Categories */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#FFD700] mb-12">
            <h3 className="text-2xl font-bold text-[#4C3D3D] mb-6 text-center">Brand Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#4C3D3D] mb-2">Luxury Designer</h4>
                <p className="text-sm text-gray-600">Premium fashion eyewear from renowned designers</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#4C3D3D] mb-2">Sports & Active</h4>
                <p className="text-sm text-gray-600">Performance eyewear for athletes and active lifestyles</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#4C3D3D] mb-2">Children's Frames</h4>
                <p className="text-sm text-gray-600">Durable, comfortable, and fun frames for kids</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#4C3D3D] mb-2">Safety Eyewear</h4>
                <p className="text-sm text-gray-600">Industrial and workplace safety glasses</p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Brands */}
          <div className="bg-gradient-to-r from-[#4C3D3D] to-[#4C3D3D]/90 text-white rounded-2xl p-8 mb-12 relative overflow-hidden">
            {/* Golden Shine Effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent animate-shine-horizontal"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Brand Selection?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-[#4C3D3D]" />
                  </div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-white/80 text-sm">Every brand we carry meets our strict quality standards</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-[#4C3D3D]" />
                  </div>
                  <h4 className="font-semibold mb-2">Style Variety</h4>
                  <p className="text-white/80 text-sm">From classic to contemporary, find your perfect style</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-[#4C3D3D]" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Fitting</h4>
                  <p className="text-white/80 text-sm">Professional fitting ensures optimal comfort and vision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4C3D3D] mb-4">Ready to Find Your Perfect Frames?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Visit our showroom to try on frames from all these amazing brands. Our expert opticians will help you find
              the perfect eyewear that combines style, comfort, and your vision needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#FFD700] text-white transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                <Link href="/book-exam">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/location">Visit Our Showroom</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
