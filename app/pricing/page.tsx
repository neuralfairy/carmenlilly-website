import type { Metadata } from "next"
import { Check, X, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable B2B Lead Generation Solutions | Carmenlilly Solutions",
  description:
    "Choose the perfect plan for your business. Starter, Pro, and Enterprise options with transparent pricing and no hidden fees.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 297,
      period: "month",
      description: "Perfect for small businesses and startups getting started with B2B lead generation",
      features: [
        "Up to 1,000 leads per month",
        "Basic AI targeting",
        "Email outreach campaigns",
        "CRM integration (3 platforms)",
        "Basic analytics dashboard",
        "Email support",
        "Lead enrichment",
        "Campaign templates",
      ],
      limitations: ["No LinkedIn outreach", "No phone/SMS campaigns", "Limited integrations"],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Pro",
      price: 597,
      period: "month",
      description: "Ideal for growing businesses that need advanced features and higher volume",
      features: [
        "Up to 5,000 leads per month",
        "Advanced AI targeting & scoring",
        "Multi-channel outreach (Email, LinkedIn, Phone)",
        "CRM integration (10+ platforms)",
        "Advanced analytics & reporting",
        "Priority support",
        "Lead enrichment & verification",
        "Custom campaign sequences",
        "A/B testing capabilities",
        "Team collaboration tools",
        "API access",
        "White-label reporting",
      ],
      limitations: [],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs and high-volume requirements",
      features: [
        "Unlimited leads",
        "Custom AI model training",
        "Full omni-channel outreach",
        "Unlimited CRM integrations",
        "Custom analytics & dashboards",
        "Dedicated success manager",
        "Advanced lead enrichment",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Custom onboarding",
        "Priority feature requests",
        "Custom reporting",
        "Multi-team management",
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial includes full access to all Pro plan features, including up to 500 leads, multi-channel outreach, and advanced analytics. No credit card required.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What CRM platforms do you integrate with?",
      answer:
        "We integrate with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and many more. Custom integrations are available for Enterprise customers.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees or hidden costs. You only pay the monthly subscription fee for your chosen plan.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Starter plans include email support, Pro plans get priority support, and Enterprise customers receive dedicated success managers with SLA guarantees.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI-powered lead generation features
            with no hidden fees or long-term contracts.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
            <Star className="h-5 w-5 text-yellow-300" />
            <span className="text-sm">14-day free trial • No credit card required</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? "border-emerald-500 scale-105" : "border-gray-200"
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold text-gray-900">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
            <Link
              href="https://salescentri.com/pricing/plans-overview"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Compare all plans in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our pricing and plans</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="https://salescentri.com/contact/sales-inquiry" className="btn-primary">
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust Carmenlilly Solutions for their B2B lead generation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="https://salescentri.com/get-started/free-trial" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <Link href="https://salescentri.com/get-started/book-demo" className="btn-secondary text-lg px-8 py-4">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
