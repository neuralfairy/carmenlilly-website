import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Lead Generation Experts | Carmenlilly Solutions",
  description:
    "Contact Carmenlilly Solutions for B2B lead generation support. Located in Tacoma, WA. Multiple ways to reach us including live chat, phone, and email.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      link: "mailto:support@carmenlilly.com",
    },
    {
      icon: Headphones,
      title: "Submit Ticket",
      description: "Create a support ticket for complex issues",
      action: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket",
    },
  ]

  const offices = [
    {
      city: "Tacoma, WA",
      address: "123 Business District Ave, Suite 500",
      phone: "(555) 123-4567",
      email: "support@carmenlilly.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions about our B2B lead generation platform? Our expert team is here to help. Reach out through
            your preferred method and we'll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  <method.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <Link href={method.link} className="btn-primary w-full">
                  {method.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" action="https://salescentri.com/contact" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select an option</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tell us about your lead generation needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Office</h2>

              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{office.city}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">{office.address}</p>
                        <p className="text-gray-700">Tacoma, WA 98402</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-emerald-600">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <a href={`mailto:support@carmenlilly.com`} className="text-gray-700 hover:text-emerald-600">
                        support@carmenlilly.com
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-gray-700">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Links */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="https://salescentri.com/contact/sales-inquiry"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sales Inquiry →
                  </Link>
                  <Link
                    href="https://salescentri.com/contact/partnerships"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Partnership Opportunities →
                  </Link>
                  <Link
                    href="https://salescentri.com/contact/sales-inquiry/request-quote"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Request a Quote →
                  </Link>
                  <Link
                    href="https://salescentri.com/docs/user-guide"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    User Guide & Documentation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Don't wait to start generating high-quality B2B leads. Book a demo today and see how our AI-powered platform
            can revolutionize your sales process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="https://salescentri.com/get-started/book-demo" className="btn-primary text-lg px-8 py-4">
              Book a Demo
            </Link>
            <Link href="https://salescentri.com/get-started/free-trial" className="btn-secondary text-lg px-8 py-4">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
