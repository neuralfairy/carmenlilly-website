import type { Metadata } from "next"
import { Users, Target, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Leading B2B Lead Generation Agency | Carmenlilly Solutions",
  description:
    "Learn about Carmenlilly Solutions, our mission to revolutionize B2B lead generation, and meet our expert team based in Tacoma, WA.",
}

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Clients Served" },
    { number: "50M+", label: "Leads Generated" },
    { number: "300%", label: "Average ROI Increase" },
    { number: "99.9%", label: "Platform Uptime" },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We're obsessed with delivering measurable results that directly impact your bottom line.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships, not just vendor relationships.",
    },
    {
      icon: Award,
      title: "Innovation First",
      description: "We continuously invest in cutting-edge AI and technology to stay ahead of the curve.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in constant improvement and helping our clients scale their businesses.",
    },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales and marketing.",
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "AI and machine learning expert with previous experience at Google and Microsoft.",
    },
    {
      name: "Maria Rodriguez",
      role: "VP of Customer Success",
      bio: "Customer success leader with a track record of 98% client retention rates.",
    },
    {
      name: "James Thompson",
      role: "Head of Sales",
      bio: "B2B sales veteran with expertise in enterprise sales and strategic partnerships.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Revolutionizing B2B Lead Generation with AI</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Founded in 2019, Carmenlilly Solutions has been at the forefront of AI-powered lead generation, helping
                thousands of businesses transform their sales processes and achieve unprecedented growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-emerald-300">{stat.number}</div>
                    <div className="text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-emerald-400 to-gray-600 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Our Team</h3>
                  <p className="text-emerald-100">Dedicated professionals driving success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses of all sizes to consistently generate high-quality, targeted B2B leads using
                advanced AI tools, intelligent enrichment, and omni-channel outreach systems that deliver measurable
                results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every business deserves access to enterprise-level lead generation capabilities,
                regardless of their size or budget.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To become the world's leading AI-powered B2B lead generation platform, setting the standard for
                innovation, results, and customer success in the sales technology industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where AI and human expertise work together seamlessly to create meaningful business
                connections and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team combines deep industry expertise with innovative thinking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-emerald-400 to-gray-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <p className="text-emerald-100">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://salescentri.com/company/about-us/leadership-team" className="btn-primary">
              View Full Leadership Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover how Carmenlilly Solutions can help transform your B2B lead generation and drive unprecedented
            growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="https://salescentri.com/get-started/book-demo" className="btn-primary text-lg px-8 py-4">
              Schedule a Demo
            </Link>
            <Link href="https://salescentri.com/company/about-us" className="btn-secondary text-lg px-8 py-4">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
