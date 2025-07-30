import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCtaButton from "@/components/StickyCtaButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carmenlilly Solutions - B2B Lead Generation Agency | AI-Powered Sales Intelligence",
  description:
    "Generate high-quality B2B leads with advanced AI tools, intelligent enrichment, and omni-channel outreach systems. Boost your sales acceleration and conversion rates.",
  keywords:
    "B2B lead generation, targeted prospecting, sales acceleration, conversion-driven lead campaigns, AI sales intelligence",
  authors: [{ name: "Carmenlilly Solutions" }],
  openGraph: {
    title: "Carmenlilly Solutions - B2B Lead Generation Agency",
    description: "Generate high-quality B2B leads with advanced AI tools and intelligent outreach systems.",
    url: "https://carmenlilly.com",
    siteName: "Carmenlilly Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://carmenlilly.com" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Tacoma" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCtaButton />
      </body>
    </html>
  )
}
