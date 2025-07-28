import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, IndianRupee, Video, Clock, Target, TrendingUp } from "lucide-react"

export const PricingSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5 text-xs sm:text-sm">
            💼 Plans That Grow With You
          </Badge>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Choose Your</span>
            <span className="gradient-text"> Growth Mode</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Startup Plan */}
          <Card className="glass-card p-6 sm:p-8 border-white/10 hover-glow relative">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/5 rounded-full mb-3 sm:mb-4">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-brand-coral" />
                <span className="text-brand-coral font-medium text-xs sm:text-sm">🚀 Startup Plan</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <span className="text-3xl sm:text-4xl font-bold text-white">50,000</span>
                <span className="text-white/70 text-sm sm:text-base">/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">15 short videos per month (1 every 2 days)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">Topic Ideation</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">Script Writing</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">Voice + Avatar AI Generation</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">High-Quality Editing</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mt-0.5" />
                <span className="text-white text-sm sm:text-base">SEO Optimized Publishing (Instagram, YouTube, LinkedIn)</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-white/5 rounded-2xl mb-4 sm:mb-6">
              <div className="text-brand-coral font-semibold text-xs sm:text-sm mb-1">Ideal For:</div>
              <div className="text-white/90 text-xs sm:text-sm">Solo founders, creators, consultants getting started with content</div>
            </div>

            <CtaButton 
              variant="secondary" 
              className="w-full text-sm sm:text-base"
              onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
            >
              <span>Get Started</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </CtaButton>
          </Card>

          {/* Scale Plan */}
          <Card className="glass-card p-8 border-brand-coral/30 hover-glow relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="px-6 py-2 bg-brand-gradient rounded-full text-white font-medium text-sm">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-coral/10 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-brand-coral" />
                <span className="text-brand-coral font-medium text-sm">🔥 Scale Plan</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <IndianRupee className="w-8 h-8 text-white" />
                <span className="text-4xl font-bold gradient-text">1,00,000</span>
                <span className="text-white/70">/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-brand-coral" />
                <span className="text-white">20 short videos per month</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-brand-coral" />
                <span className="text-white">1 long video per week (4/month)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-coral" />
                <span className="text-white">Topic Ideation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-coral" />
                <span className="text-white">Script Writing</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-coral" />
                <span className="text-white">Voice + Avatar AI Generation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-coral" />
                <span className="text-white">High-Quality Editing</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-coral" />
                <span className="text-white">SEO Optimized Publishing (All Platforms)</span>
              </div>
            </div>

            <div className="p-4 bg-brand-coral/5 border border-brand-coral/20 rounded-2xl mb-6">
              <div className="text-brand-coral font-semibold text-sm mb-1">Ideal For:</div>
              <div className="text-white/90 text-sm">Coaches, startups & founders ready to scale visibility, leads & revenue</div>
            </div>

            <CtaButton 
              variant="primary" 
              className="w-full"
              onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
            >
              <span>Scale Now</span>
              <ArrowRight className="w-4 h-4" />
            </CtaButton>
          </Card>
        </div>

        {/* Why Long Videos Matter */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Long Videos Matter <span className="gradient-text">(Scale Plan)</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Weekly long-form videos build deep authority, boost retention, and drive 10x more conversions. 
              Perfect for masterclasses, deep-dive content, and thought leadership.
            </p>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            📩 Ready to Scale With AI?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Fill out the form below and our team will send you a detailed onboarding guide + next steps.
          </p>
          
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="mb-8"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Get My Personalized Quote!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card p-8 text-center">
            <h4 className="text-xl font-bold text-white mb-6">
              🧬 To activate your AI avatar, we'll need:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-coral" />
                <span className="text-white">A few hours of your voice recordings</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-brand-coral" />
                <span className="text-white">15–20 minutes of your face video footage</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            <span className="text-white">Let AI clone create your content.</span>
            <br />
            <span className="gradient-text">You focus on your business.</span>
          </h3>
          
          <CtaButton 
            variant="primary" 
            size="lg"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Book Your Free Strategy Call Now!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>
      </div>
    </section>
  )
}