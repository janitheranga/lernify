"use client"

import * as React from "react"
import { NotificationLoop } from "@/components/landing/notification-loop"
import { Header } from "@/components/landing/header"
import { LoginModal } from "@/components/landing/login-modal"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustedBrands } from "@/components/landing/trusted-brands"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { ReviewsSection } from "@/components/landing/reviews-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false)

  return (
    <div className="min-h-screen">
      <NotificationLoop />
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        <HeroSection />
        <TrustedBrands />
        <FeaturesSection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  )
}