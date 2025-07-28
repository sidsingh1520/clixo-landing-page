import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, TrendingUp, Eye, Users, MessageCircle, Clock } from "lucide-react"

export const CaseStudySection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-purple/30 text-brand-purple bg-brand-purple/5">
            Real Creators Using AI Avatars
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Founders, Coaches, Creators &</span>
            <br />
            <span className="text-white">Companies are using</span>
            <span className="gradient-text"> AI Avatars </span>
            <span className="text-white">to</span>
            <br />
            <span className="gradient-text">Scale Content — Without Burnout.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            AI-generated content is already the new normal. Scroll through real videos from top creators using AI avatars
          </p>
          
          {/* Video Examples */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <Card className="glass-card p-4 text-center">
              <div className="aspect-video bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-2xl relative overflow-hidden mb-3 group cursor-pointer hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-sm text-brand-coral font-medium">This is AI?</div>
            </Card>
            
            <Card className="glass-card p-4 text-center">
              <div className="aspect-video bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 rounded-2xl relative overflow-hidden mb-3 group cursor-pointer hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-sm text-brand-purple font-medium">Looks 100% real</div>
            </Card>
            
            <Card className="glass-card p-4 text-center">
              <div className="aspect-video bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 rounded-2xl relative overflow-hidden mb-3 group cursor-pointer hover-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-sm text-brand-coral font-medium">Posted daily without recording</div>
            </Card>
          </div>
          
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="mb-16"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>YES, I WANT TO START CREATING CONTENT WITH MY AI AVATAR!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Case Study */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
            CASE STUDY
          </Badge>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">The Breakdown —</span>
            <span className="gradient-text"> 1M+ Views </span>
            <span className="text-white">Without a Single Real Video</span>
          </h3>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12">
            We launched a brand-new channel using only AI avatar-based videos. Here's what happened in just 15 days:
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card p-6 text-center group hover-glow">
              <TrendingUp className="w-8 h-8 text-brand-coral mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-white/70 text-sm">Organic views on Instagram — in 10 days</div>
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <Users className="w-8 h-8 text-brand-purple mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-2">1,000+</div>
              <div className="text-white/70 text-sm">New YouTube subscribers — without promotions</div>
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <Eye className="w-8 h-8 text-brand-coral mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-2">400K+</div>
              <div className="text-white/70 text-sm">Video views on YouTube — 100% Organic</div>
            </Card>
            
            <Card className="glass-card p-6 text-center group hover-glow">
              <MessageCircle className="w-8 h-8 text-brand-purple mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-2">Flood</div>
              <div className="text-white/70 text-sm">Of inbound leads & DM engagement</div>
            </Card>
          </div>

          {/* Time Spent */}
          <div className="max-w-2xl mx-auto p-8 glass-card rounded-3xl mb-12">
            <Clock className="w-12 h-12 text-brand-coral mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">🧠 Total time spent by creator:</h4>
            <div className="text-4xl font-bold gradient-text">ZERO hours on camera</div>
          </div>

          <CtaButton 
            variant="primary" 
            size="lg"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>YES, I ALSO WANT TO CREATE AI AVATAR BASED CONTENT!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Reference Section */}
        <div className="text-center p-8 glass-card rounded-3xl">
          <h4 className="text-xl font-bold text-white mb-4">
            NOTE - We only onboard 5 new clients per month | 
            <span className="text-brand-coral"> LIMITED SPOTS LEFT!</span>
          </h4>
          <p className="text-white/70 mb-6">
            FOR REFERENCE - VARUN MAYYA, VAIBHAV SISINTY, FINANCE WITH SHARAN, 100X Engineers, etc
          </p>
        </div>
      </div>
    </section>
  )
}