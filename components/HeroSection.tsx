import Link from "next/link"
import { ArrowRight, Play, CheckCircle } from "lucide-react"

export default function HeroSection() {
  const benefits = [
    "Generate 300% more qualified leads",
    "Reduce cost per lead by 60%",
    "Increase conversion rates by 45%",
  ]

  return (
    <section className="relative gradient-bg text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Generate High-Quality
              <span className="block text-emerald-300">B2B Leads</span>
              with AI-Powered Intelligence
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Empower your business to consistently generate targeted B2B leads using advanced AI tools, intelligent
              enrichment, and omni-channel outreach systems that deliver measurable results.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://salescentri.com/get-started/book-demo"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-gradient-to-br from-emerald-400 to-gray-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Dashboard</h3>
                <p className="text-emerald-100">Real-time analytics and insights</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
