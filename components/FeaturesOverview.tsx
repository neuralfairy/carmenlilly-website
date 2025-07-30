import Link from "next/link"
import { Brain, Target, MessageSquare, BarChart3, Users, Zap } from "lucide-react"

export default function FeaturesOverview() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Lead Intelligence",
      description: "Advanced AI algorithms identify and qualify high-potential prospects with 95% accuracy.",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator/overview",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused targeting based on 200+ data points.",
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: MessageSquare,
      title: "Omni-Channel Outreach",
      description: "Engage prospects across email, LinkedIn, phone, and social media seamlessly.",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track campaign performance and ROI with comprehensive dashboards and reporting.",
      link: "https://salescentri.com/solutions/psa-suite/features",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and sales tools for unified workflows.",
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up intelligent automation that nurtures leads and schedules follow-ups automatically.",
      link: "https://salescentri.com/solutions/use-case-navigator",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern B2B Sales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with proven sales methodologies to deliver
            exceptional lead generation results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-6">
                <feature.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <Link
                href={feature.link}
                className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/features" className="btn-primary">
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  )
}
