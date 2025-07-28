import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, TrendingUp, Target, Users, BarChart3 } from "lucide-react"

export const UnfairAdvantageSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-purple/30 text-brand-purple bg-brand-purple/5">
            ⚡️ Your Unfair Advantage with Clixo AI
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Built-In</span>
            <span className="gradient-text"> Ranking AI. </span>
            <br />
            <span className="text-white">Viral Growth on</span>
            <span className="gradient-text"> Autopilot.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12">
            We don't just create videos — <br />
            We get them ranked on the top of search & explore feeds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="glass-card p-6 text-center group hover-glow">
            <Target className="w-8 h-8 text-brand-coral mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Rank on #1 for industry keywords</div>
            <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <Search className="w-8 h-8 text-brand-purple mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Show up in YouTube Search & Instagram Explore</div>
            <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <TrendingUp className="w-8 h-8 text-brand-coral mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Recommended by algorithms — not just followers</div>
            <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <Users className="w-8 h-8 text-brand-purple mx-auto mb-3" />
            <div className="text-white font-semibold mb-2">Reach new audiences every day, organically</div>
            <div className="w-8 h-1 bg-brand-gradient mx-auto rounded-full" />
          </Card>
        </div>

        {/* Analytics Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card p-8">
            <div className="text-center mb-6">
              <BarChart3 className="w-12 h-12 text-brand-coral mx-auto mb-4" />
              <p className="text-white/70">
                (Slider with screenshots of video analytics, impressions, search traffic, ranked positions, explore reach, etc.)
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="mb-8"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Ready to Rank & Go Viral? Book Free Strategy Call!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 border-brand-coral/20">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
                📢 Bonus
              </Badge>
              <p className="text-lg text-white mb-4">
                We push your videos directly into <span className="gradient-text font-bold">Reels, Shorts & Explore feeds</span> —
              </p>
              <p className="text-white/70">
                So your audience finds you, even if they've never heard of you.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}