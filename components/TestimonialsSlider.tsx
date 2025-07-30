"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales",
      company: "TechCorp Solutions",
      content:
        "Carmenlilly Solutions transformed our lead generation process. We've seen a 300% increase in qualified leads and our sales team is more productive than ever.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Marketing Director",
      company: "Growth Dynamics",
      content:
        "The AI-powered targeting is incredible. We're reaching prospects we never knew existed and our conversion rates have improved dramatically.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      title: "CEO",
      company: "InnovateLab",
      content:
        "ROI was evident within the first month. The platform pays for itself and the support team is exceptional. Highly recommended for any B2B company.",
      rating: 5,
    },
    {
      name: "David Thompson",
      title: "Sales Manager",
      company: "Enterprise Solutions Inc",
      content:
        "The omni-channel approach has revolutionized how we connect with prospects. Our pipeline is fuller than it's ever been.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who've transformed their lead generation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentSlide].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-gray-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentSlide].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonials[currentSlide].name}</div>
                <div className="text-gray-600">{testimonials[currentSlide].title}</div>
                <div className="text-emerald-600 font-medium">{testimonials[currentSlide].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
