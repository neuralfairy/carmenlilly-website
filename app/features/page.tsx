import type { Metadata } from "next"
import { Brain, Target, MessageSquare, BarChart3, Users, Zap, Shield, Globe, Clock, Smartphone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features - AI-Powered B2B Lead Generation Platform | Carmenlilly Solutions",
  description:
    "Explore our comprehensive suite of AI-powered features for B2B lead generation, including intelligent targeting, omni-channel outreach, and real-time analytics.",
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Lead Intelligence",
      description:
        "Our advanced AI algorithms analyze millions of data points to identify and qualify high-potential prospects with 95% accuracy. Machine learning continuously improves targeting precision.",
      benefits: [
        "95% lead qualification accuracy",
        "Predictive lead scoring",
        "Behavioral pattern analysis",
        "Intent data integration",
      ],
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator/overview",
    },
    {
      icon: Target,
      title: "Precision Targeting & Segmentation",
      description:
        "Reach your ideal customers with laser-focused targeting based on 200+ data points including firmographics, technographics, and behavioral signals.",
      benefits: [
        "200+ targeting criteria",
        "Dynamic list building",
        "Lookalike audience creation",
        "Real-time data enrichment",
      ],
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: MessageSquare,
      title: "Omni-Channel Outreach",
      description:
        "Engage prospects across multiple channels including email, LinkedIn, phone, SMS, and social media with coordinated, personalized messaging.",
      benefits: [
        "Multi-channel sequences",
        "Personalized messaging at scale",
        "Optimal timing algorithms",
        "Channel performance optimization",
      ],
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics & Reporting",
      description:
        "Track campaign performance, ROI, and lead quality with comprehensive dashboards and detailed reporting that provides actionable insights.",
      benefits: [
        "Real-time performance tracking",
        "ROI calculation and forecasting",
        "Custom dashboard creation",
        "Automated reporting",
      ],
      link: "https://salescentri.com/solutions/psa-suite/features",
    },
  ]

  const additionalFeatures = [
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly integrate with 50+ CRM platforms and sales tools for unified workflows.",
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up intelligent automation that nurtures leads and schedules follow-ups automatically.",
      link: "https://salescentri.com/solutions/use-case-navigator",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 certified platform with enterprise-grade security and compliance features.",
      link: "https://salescentri.com/trust/security-privacy",
    },
    {
      icon: Globe,
      title: "Global Data Coverage",
      description: "Access to 500M+ B2B contacts and 50M+ companies worldwide with GDPR compliance.",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous campaign monitoring with automatic optimization and performance alerts.",
      link: "https://salescentri.com/solutions/psa-suite/overview",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage campaigns, view analytics, and respond to leads on-the-go with our mobile app.",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Powerful Features for Modern B2B Sales</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Our comprehensive platform combines cutting-edge AI technology with proven sales methodologies to deliver
            exceptional lead generation results across every stage of your sales funnel.
          </p>
          <Link href="https://salescentri.com/solutions/use-case-navigator/demo" className="btn-primary">
            Interactive Demo
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-6">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={feature.link}
                    className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
                  >
                    Learn more about this feature →
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-gradient-to-br from-emerald-400 to-gray-600 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center text-white">
                      <feature.icon className="h-16 w-16 mx-auto mb-4" />
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform includes all the tools and features you need to build, manage, and optimize your B2B lead
              generation campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-6">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link href={feature.link} className="text-emerald-600 font-medium hover:text-emerald-700">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how our AI-powered platform can transform your lead generation process
            and drive measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="https://salescentri.com/get-started/free-trial" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <Link href="https://salescentri.com/get-started/book-demo" className="btn-secondary text-lg px-8 py-4">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
