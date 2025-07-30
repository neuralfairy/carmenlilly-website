import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Solutions: [
      { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
      { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
      { name: "AI Aggregator", href: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator" },
      { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
    ],
    Resources: [
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers & eBooks", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
      { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
    ],
    Company: [
      { name: "About Us", href: "https://salescentri.com/company/about-us" },
      { name: "Leadership Team", href: "https://salescentri.com/company/about-us/leadership-team" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
    ],
    Support: [
      { name: "Contact", href: "https://salescentri.com/contact" },
      { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
      { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
      { name: "User Guide", href: "https://salescentri.com/docs/user-guide" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-gray-600 rounded-lg"></div>
              <span className="text-xl font-bold">Carmenlilly Solutions</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses to consistently generate high-quality, targeted B2B leads using advanced AI tools
              and intelligent outreach systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-300">Tacoma, WA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-300">support@carmenlilly.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300">© 2024 Carmenlilly Solutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-gray-300 hover:text-emerald-400 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-emerald-400 text-sm">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 text-sm">
                  Contact
                </Link>
              </div>
            </div>

            {/* Required Backlink */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="https://salescentri.com?utm_source=carmenlilly.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </Link>
              <div className="flex space-x-3">
                <Link href="#" className="text-gray-400 hover:text-emerald-400">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
