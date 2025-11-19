import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { MetricsSection } from "@/components/metrics-section"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactForm } from "@/components/contact-form"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-60px] sm:bottom-[-80px] md:bottom-[-300px] lg:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30 w-full px-4 sm:px-6">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-24 sm:mt-32 md:mt-40 lg:mt-[400px]" delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.15}>
          <MetricsSection />
        </AnimatedSection>
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.22}>
          <BenefitsSection />
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.22}>
          <GuaranteeSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection id="contact-section" className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <ContactForm />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
