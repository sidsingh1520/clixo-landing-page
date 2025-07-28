import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Video, User, Smile, Volume2 } from "lucide-react"

export const AiAvatarSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4 sm:mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5 text-xs sm:text-sm">
            🎥 HOW AI AVATAR CONTENT LOOKS
          </Badge>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">This is</span>
            <span className="gradient-text"> NOT </span>
            <span className="text-white">a real video.</span>
            <br />
            <span className="text-white">But it looks</span>
            <span className="gradient-text"> exactly </span>
            <span className="text-white">like one.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-12">
            👇
          </p>
        </div>

        {/* Demo Flow */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Original Image */}
            <div className="text-center">
              <div className="aspect-[9/16] bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-2xl sm:rounded-3xl relative overflow-hidden glass-card mb-4 group hover-glow">
                <img 
                  src="https://lh3.googleusercontent.com/d/1CpLaHLgN-rN_tAMQOM1RuesTei75ToLW"
                  alt="Person's image"
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    e.currentTarget.parentElement!.innerHTML += '<div class="text-white/60 text-sm">Image not available</div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center py-4 lg:py-0">
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto rotate-90 lg:rotate-0" />
            </div>

            {/* AI Video Result */}
            <div className="text-center">
              <div className="aspect-[9/16] bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-2xl sm:rounded-3xl relative overflow-hidden glass-card mb-4 group hover-glow">
                <iframe
                  src="https://www.youtube.com/embed/q8110guV8GI?controls=0&amp;rel=0&amp;modestbranding=1"
                  title="AI Avatar Demo"
                  className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            What you're seeing here is an <span className="gradient-text font-bold">AI-generated avatar</span> — trained to speak exactly like the real person.
          </p>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Smile className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto mb-2 sm:mb-3" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Same facial expressions</div>
              <div className="w-6 sm:w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple mx-auto mb-2 sm:mb-3" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Same voice tone</div>
              <div className="w-6 sm:w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral mx-auto mb-2 sm:mb-3" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">Same vibe</div>
              <div className="w-6 sm:w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-4 sm:p-6 text-center group hover-glow">
              <Video className="w-6 h-6 sm:w-8 sm:h-8 text-brand-purple mx-auto mb-2 sm:mb-3" />
              <div className="text-white font-semibold mb-2 text-sm sm:text-base">100% indistinguishable</div>
              <div className="w-6 sm:w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            <span className="text-white">🎭 Feels like you.</span>
            <br />
            <span className="gradient-text">But it's not actually you.</span>
          </h3>
          
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