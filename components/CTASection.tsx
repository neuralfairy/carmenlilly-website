import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CTASection() {
  const benefits = [
    "No setup fees or long-term contracts",
    "14-day free trial with full access",
    "Dedicated success manager included",
    "ROI guarantee or money back",
  ]

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Join thousands of businesses that have already revolutionized their B2B sales process. Start generating
          high-quality leads today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <span className="text-gray-200">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="https://salescentri.com/get-started/free-trial"
            className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="https://salescentri.com/get-started/book-demo"
            className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
          >
            Book a Demo
          </Link>
        </div>

        <p className="text-gray-300 mt-6 text-sm">
          No credit card required • Setup in under 5 minutes • Cancel anytime
        </p>
      </div>
    </section>
  )
}
