import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Camera, Video, User, Smile, Volume2 } from "lucide-react"

export const AiAvatarSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge variant="outline" className="mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
            🎥 HOW AI AVATAR CONTENT LOOKS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">This is</span>
            <span className="gradient-text"> NOT </span>
            <span className="text-white">a real video.</span>
            <br />
            <span className="text-white">But it looks</span>
            <span className="gradient-text"> exactly </span>
            <span className="text-white">like one.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12">
            👇
          </p>
        </div>

        {/* Demo Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Original Image */}
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-3xl relative overflow-hidden glass-card mb-4 group hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/80" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-medium text-sm">📸 Image of the person</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-brand-coral mx-auto rotate-90 lg:rotate-0" />
            </div>

            {/* AI Video Result */}
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-3xl relative overflow-hidden glass-card mb-4 group cursor-pointer hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-medium text-sm">🎬 AI avatar video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            What you're seeing here is an <span className="gradient-text font-bold">AI-generated avatar</span> — trained to speak exactly like the real person.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="glass-card p-6 text-center group hover-glow">
              <Smile className="w-8 h-8 text-brand-coral mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Same facial expressions</div>
              <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <Volume2 className="w-8 h-8 text-brand-purple mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Same voice tone</div>
              <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <User className="w-8 h-8 text-brand-coral mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Same vibe</div>
              <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <Video className="w-8 h-8 text-brand-purple mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">100% indistinguishable</div>
              <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
            </Card>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-white">🎭 Feels like you.</span>
            <br />
            <span className="gradient-text">But it's not actually you.</span>
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