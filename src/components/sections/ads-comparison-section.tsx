import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Clock, TrendingUp, Check, Zap } from "lucide-react"

export const AdsComparisonSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
            💸 WHY THIS IS SMARTER THAN ADS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">To show your video to</span>
            <span className="gradient-text"> 1M people </span>
            <span className="text-white">with ads, you'd spend:</span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Traditional Ads */}
          <Card className="glass-card p-8 border-red-500/20">
            <div className="text-center mb-6">
              <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Traditional Advertising</h3>
              <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">₹3 to ₹7 Lakhs on Instagram & YouTube ads</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Hours creating ad creatives & managing campaigns</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Even then — no guarantee of organic growth</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Clixo AI Studios */}
          <Card className="glass-card p-8 border-brand-coral/20 hover-glow">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-brand-coral mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text mb-2">With Clixo AI Studios</h3>
              <div className="w-16 h-1 bg-brand-gradient mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">You spend ₹0 on ads</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Content builds your brand forever</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Every video adds compounding value</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}