import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Brain, TrendingUp, Video, PenTool, Mic, Search } from "lucide-react"

export const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* What We Do Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5 text-xs sm:text-sm">
            🧠 WHAT WE DO — Clixo AI Studios
          </Badge>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">The Complete</span>
            <span className="gradient-text"> AI Content Engine </span>
            <br />
            <span className="text-white">Built for Founders & Coaches</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            We handle everything from:
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Researching what's trending in your niche</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <PenTool className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Writing crisp, high-converting scripts</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Creating your AI Voice & Avatar</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Video className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Generating professional video content</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Editing with hooks, subtitles & effects</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple mx-auto mb-3 sm:mb-4" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">SEO optimization + auto-posting</div>
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral mx-auto" />
            </Card>
          </div>

          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            <span className="gradient-text font-bold">You review, we launch.</span> Fully automated.
          </p>
          
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
      </div>
    </section>
  )
}