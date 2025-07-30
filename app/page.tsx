import HeroSection from "@/components/HeroSection"
import FeaturesOverview from "@/components/FeaturesOverview"
import TestimonialsSlider from "@/components/TestimonialsSlider"
import TrustBadges from "@/components/TrustBadges"
import CaseStudiesPreview from "@/components/CaseStudiesPreview"
import ROICalculator from "@/components/ROICalculator"
import CTASection from "@/components/CTASection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBadges />
      <FeaturesOverview />
      <CaseStudiesPreview />
      <TestimonialsSlider />
      <ROICalculator />
      <CTASection />
    </div>
  )
}
