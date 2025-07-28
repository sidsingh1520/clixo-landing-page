import { CtaButton } from "@/components/ui/cta-button"
import { ArrowRight, Sparkles } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 group hover:bg-white/10 transition-all duration-300">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-coral" />
          <span className="text-xs sm:text-sm font-medium text-white/90">Only 5 New Clients Per Month</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-brand-purple group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8">
          <span className="block text-white">The Ultimate</span>
          <span className="block gradient-text">Content Engine</span>
          <span className="block text-white">for Your Business</span>
        </h1>

        {/* Subheading */}
        <div className="text-base xs:text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
          <span className="gradient-text font-bold">Your Face. Your Voice. Your Unlimited AI Videos.</span>
        </div>

        <p className="text-base xs:text-lg sm:text-xl text-white/70 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Clixo AI Studios gives you a fully done-for-you content creation system — using your 
          <span className="text-white font-medium"> AI avatar</span>. 
          <span className="gradient-text font-medium"> All Without You Recording a Single Thing.</span>
        </p>

        {/* Wistia Video */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden glass-card hover-glow">
            <iframe
              src="https://fast.wistia.net/embed/iframe/gqann8g61r"
              title="Shivam's Demo Video"
              className="w-full h-full"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto text-sm sm:text-base"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Book Your Free Strategy Call Now!</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-4 sm:mx-auto p-4 sm:p-6 glass-card rounded-xl sm:rounded-2xl border border-brand-coral/20">
          <p className="text-white/90 mb-2 text-sm sm:text-base">
            <span className="font-bold text-brand-coral">Note:</span> We only onboard 5 new clients per month to ensure every founder, coach, or startup gets dedicated attention and results.
          </p>
          <p className="text-white/70 text-sm sm:text-base">
            👉 If you're seeing this, there's still a spot left.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold gradient-text mb-2">100K+</div>
            <div className="text-white/60 text-xs sm:text-sm">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-white/60 text-xs sm:text-sm">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-white/60 text-xs sm:text-sm">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-gradient rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}