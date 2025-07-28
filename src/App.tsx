import { HeroSection } from "@/components/sections/hero-section"
import { AiAvatarSection } from "@/components/sections/ai-avatar-section"
import { CaseStudySection } from "@/components/sections/case-study-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AdsComparisonSection } from "@/components/sections/ads-comparison-section"
import { UnfairAdvantageSection } from "@/components/sections/unfair-advantage-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AiAvatarSection />
      <CaseStudySection />
      <ComparisonSection />
      <ServicesSection />
      <AdsComparisonSection />
      <UnfairAdvantageSection />
      <TargetAudienceSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
};

export default App;