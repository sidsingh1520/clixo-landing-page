import { CtaButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, X, Check } from "lucide-react"

export const ComparisonSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
            💯 SAME RESULTS AS A REAL VIDEO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What if we told you...</span>
            <br />
            <span className="gradient-text">Videos made by your AI avatar</span>
            <br />
            <span className="text-white">perform just as well as if you</span>
            <span className="gradient-text"> recorded them yourself?</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <Check className="w-6 h-6 text-brand-coral mx-auto mb-2" />
              <span className="text-white/90 text-sm">High engagement</span>
            </div>
            <div className="text-center">
              <Check className="w-6 h-6 text-brand-coral mx-auto mb-2" />
              <span className="text-white/90 text-sm">Organic reach</span>
            </div>
            <div className="text-center">
              <Check className="w-6 h-6 text-brand-coral mx-auto mb-2" />
              <span className="text-white/90 text-sm">Comments & shares</span>
            </div>
            <div className="text-center">
              <Check className="w-6 h-6 text-brand-coral mx-auto mb-2" />
              <span className="text-white/90 text-sm">Monetizable results</span>
            </div>
          </div>
          
          <p className="text-lg text-white/70 mb-8">Here's The Proof -</p>
          <p className="text-lg text-white/70 mb-8">A Slider of 10-20 Video Analytics From Youtube & Instagram</p>
          <p className="text-2xl font-bold text-white mb-12">
            <span className="gradient-text">Same results. 10x less effort.</span>
          </p>
          
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="mb-20"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>YES, I WANT MY AI AVATAR TO CREATE VIDEOS FOR ME!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
        </div>

        {/* Main Comparison */}
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Still Recording Manually?</span>
            <br />
            <span className="text-white">Here's the</span>
            <span className="gradient-text"> Smarter, Faster, Scalable </span>
            <span className="text-white">Way</span>
          </h3>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Manual Way */}
          <Card className="glass-card p-8 border-red-500/20">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">When You Create Content Yourself</h4>
              <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Need DSLR camera, tripod, mic & lighting setup</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Hire a team for recording, editing & publishing</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Block 4–8 hours/week just to shoot content</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Monthly salaries for videographer, editor, SEO team</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Must get ready, prep script, rehearse, record every time</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Limited to how much you can record</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Mental fatigue & inconsistency</div>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Way */}
          <Card className="glass-card p-8 border-brand-coral/20 hover-glow">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold gradient-text mb-2">With Clixo AI Studios' AI Avatar</h4>
              <div className="w-16 h-1 bg-brand-gradient mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">No equipment needed at all</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Everything done by our AI engine</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">0 hours — content created without you lifting a finger</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Flat, affordable pricing — no team overhead</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Once cloned, your AI avatar creates content infinitely</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Scale content output 10x without scaling effort</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Fully automated, consistent, hands-free growth</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CtaButton 
            variant="primary" 
            size="lg" 
            className="mb-4"
            onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
          >
            <span>Book Your Free Strategy Call Now!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </CtaButton>
          <p className="text-brand-coral font-medium">Very Few Slots Left For This Month!</p>
        </div>
      </div>
    </section>
  )
}