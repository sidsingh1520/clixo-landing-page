import { CtaButton } from "@/components/ui/cta-button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Mail, Twitter, Linkedin, Github } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Docs", href: "#docs" },
    { name: "Integrations", href: "#integrations" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press Kit", href: "#press" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
    { name: "Status", href: "#status" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Compliance", href: "#compliance" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Github, href: "#github", label: "GitHub" },
  { icon: Mail, href: "#email", label: "Email" }
]

export const FooterSection = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-t from-background to-background/80">
      {/* Newsletter Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Stay ahead of the</span>
              <br />
              <span className="gradient-text">creative curve</span>
            </h3>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Get the latest updates, insights, and creative inspiration delivered to your inbox.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 focus:border-brand-coral/50 backdrop-blur-sm text-sm sm:text-base"
              />
              <CtaButton 
                variant="primary" 
                className="w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open('https://forms.fillout.com/t/redJ3bErb8us', '_blank')}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="xs:col-span-2 lg:col-span-2 mb-6 xs:mb-0">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-gradient rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">X</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg sm:text-xl">CLIXO</div>
                    <div className="text-xs sm:text-sm gradient-text font-medium">STUDIOS</div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Transforming creativity through artificial intelligence. 
                  Building the future of content creation, one project at a time.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-brand-gradient hover:border-transparent transition-all duration-300 hover-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Product</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white hover:gradient-text transition-all duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white hover:gradient-text transition-all duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Support</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white hover:gradient-text transition-all duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white hover:gradient-text transition-all duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Bar */}
      <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-white/50 text-xs sm:text-sm">
            © 2024 Clixo AI Studios. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#privacy" className="text-white/50 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href="#terms" className="text-white/50 hover:text-white transition-colors duration-300">
              Terms
            </a>
            <a href="#cookies" className="text-white/50 hover:text-white transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}