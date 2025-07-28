import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Target, Briefcase, Coffee, Zap } from "lucide-react"

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-brand-coral/30 text-brand-coral bg-brand-coral/5">
            🎯 WHO IT'S FOR
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Perfect for</span>
            <span className="gradient-text"> Ambitious Leaders </span>
            <span className="text-white">Ready to Scale</span>
          </h2>
        </div>

        {/* Target Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="glass-card p-6 text-center group hover-glow">
            <Target className="w-8 h-8 text-brand-coral mx-auto mb-4" />
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-coral" />
              <span className="text-white font-semibold">Founders & Entrepreneurs</span>
            </div>
            <p className="text-white/70 text-sm">building a personal brand</p>
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <Briefcase className="w-8 h-8 text-brand-purple mx-auto mb-4" />
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-coral" />
              <span className="text-white font-semibold">Coaches & Consultants</span>
            </div>
            <p className="text-white/70 text-sm">selling high-ticket services</p>
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <Zap className="w-8 h-8 text-brand-coral mx-auto mb-4" />
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-coral" />
              <span className="text-white font-semibold">Startups</span>
            </div>
            <p className="text-white/70 text-sm">launching a content engine from scratch</p>
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow">
            <Coffee className="w-8 h-8 text-brand-purple mx-auto mb-4" />
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-coral" />
              <span className="text-white font-semibold">Busy Creators</span>
            </div>
            <p className="text-white/70 text-sm">who want consistency without burnout</p>
          </Card>
          
          <Card className="glass-card p-6 text-center group hover-glow lg:col-span-2">
            <Users className="w-8 h-8 text-brand-coral mx-auto mb-4" />
            <div className="flex items-center gap-3 mb-2 justify-center">
              <Check className="w-5 h-5 text-brand-coral" />
              <span className="text-white font-semibold">Anyone who wants to scale through content</span>
            </div>
            <p className="text-white/70 text-sm">without recording</p>
          </Card>
        </div>
      </div>
    </section>
  )
}