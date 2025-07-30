import Link from "next/link"
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react"

export default function CaseStudiesPreview() {
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "SaaS",
      challenge: "Low lead quality and high acquisition costs",
      results: {
        leadIncrease: "400%",
        costReduction: "65%",
        conversionImprovement: "180%",
      },
    },
    {
      company: "Manufacturing Pro",
      industry: "Manufacturing",
      challenge: "Difficulty reaching decision makers",
      results: {
        leadIncrease: "250%",
        costReduction: "45%",
        conversionImprovement: "120%",
      },
    },
    {
      company: "FinanceForward",
      industry: "Financial Services",
      challenge: "Complex sales cycles and compliance requirements",
      results: {
        leadIncrease: "300%",
        costReduction: "55%",
        conversionImprovement: "200%",
      },
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours have transformed their lead generation and achieved remarkable growth with our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100"
            >
              <div className="w-full h-48 bg-gradient-to-br from-emerald-400 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-lg font-bold">{study.company}</h4>
                  <p className="text-emerald-100">{study.industry}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                  <span className="text-sm text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{study.challenge}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-gray-600">Lead Increase</span>
                    </div>
                    <span className="font-semibold text-emerald-600">{study.results.leadIncrease}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-gray-600">Cost Reduction</span>
                    </div>
                    <span className="font-semibold text-emerald-600">{study.results.costReduction}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-gray-600">Conversion Boost</span>
                    </div>
                    <span className="font-semibold text-emerald-600">{study.results.conversionImprovement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://salescentri.com/resources/case-studies/psa"
            className="btn-primary inline-flex items-center"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
