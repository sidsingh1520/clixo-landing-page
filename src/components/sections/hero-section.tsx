import { CtaButton } from "@/components/ui/cta-button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

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
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 group hover:bg-white/10 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-brand-coral" />
          <span className="text-sm font-medium text-white/90">Only 5 New Clients Per Month</span>
          <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
          <span className="block text-white">The Ultimate</span>
          <span className="block gradient-text">Content Engine</span>
          <span className="block text-white">for Your Business</span>
        </h1>

        {/* Subheading */}
        <div className="text-lg sm:text-xl md:text-2xl mb-4">
          <span className="gradient-text font-bold">Your Face. Your Voice. Your Unlimited AI Videos.</span>
        </div>

        <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto mb-8 leading-relaxed">
          Clixo AI Studios gives you a fully done-for-you content creation system — using your 
          <span className="text-white font-medium"> AI avatar</span>. 
          <span className="gradient-text font-medium"> All Without You Recording a Single Thing.</span>
        </p>

        {/* Video Placeholder */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="aspect-video bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-3xl relative overflow-hidden glass-card group cursor-pointer hover-glow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-medium">Shivam's Demo Video</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Book Your Free Strategy Call Now!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto p-6 glass-card rounded-2xl border border-brand-coral/20">
          <p className="text-white/90 mb-2">
            <span className="font-bold text-brand-coral">Note:</span> We only onboard 5 new clients per month to ensure every founder, coach, or startup gets dedicated attention and results.
          </p>
          <p className="text-white/70">
            👉 If you're seeing this, there's still a spot left.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-20 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">100K+</div>
            <div className="text-white/60 text-sm">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-white/60 text-sm">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-white/60 text-sm">Uptime</div>
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