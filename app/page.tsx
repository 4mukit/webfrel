import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper - Animated */}
          <div className="absolute bottom-[-160px] sm:bottom-[-200px] md:bottom-[-300px] lg:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        {/* Social Proof - No Animation */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[320px] sm:mt-[360px] md:mt-[420px] lg:mt-[480px]">
          <SocialProof />
        </div>
        {/* Bento Section - Animated */}
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        {/* Large Testimonial - No Animation */}
        <div className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16">
          <LargeTestimonial />
        </div>
        {/* Pricing Section - Animated */}
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.1}
        >
          <PricingSection />
        </AnimatedSection>
        {/* Testimonials - No Animation */}
        <div id="testimonials-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16">
          <TestimonialGridSection />
        </div>
        {/* FAQ Section - Animated */}
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.3}>
          <FAQSection />
        </AnimatedSection>
        {/* CTA Section - No Animation */}
        <div className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16">
          <CTASection />
        </div>
        {/* Footer - Animated */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.1}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
