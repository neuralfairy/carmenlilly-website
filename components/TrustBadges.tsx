import { Shield, Award, Users, Zap } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security",
    },
    {
      icon: Award,
      title: "ISO 27001",
      description: "Information security standard",
    },
    {
      icon: Users,
      title: "10,000+ Clients",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      description: "Reliable service guarantee",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">Trusted by industry leaders worldwide</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <badge.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
