"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Sticky CTA Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Link href="https://salescentri.com/get-started/free-trial" className="btn-primary shadow-lg hover:shadow-xl">
            Start Free Trial
          </Link>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-slide-up">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Don't Miss Out</h3>
              <p className="text-gray-600 mb-6">
                Get our free guide on "10 Proven Strategies to Generate High-Quality B2B Leads" before you go.
              </p>
              <Link
                href="https://salescentri.com/resources/whitepapers-ebooks"
                className="btn-primary w-full block text-center mb-3"
                onClick={() => setShowExitIntent(false)}
              >
                Download Free Guide
              </Link>
              <button onClick={() => setShowExitIntent(false)} className="text-gray-500 text-sm hover:text-gray-700">
                No thanks, I'll pass
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
