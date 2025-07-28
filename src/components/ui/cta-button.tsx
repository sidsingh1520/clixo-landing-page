import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary: "bg-brand-gradient text-white hover-glow glow-pulse border-0 shadow-glow-subtle hover:shadow-glow-brand",
        secondary: "bg-transparent border-2 border-white/20 text-white hover:border-brand-coral hover:bg-white/5 backdrop-blur-sm",
        ghost: "bg-transparent text-white hover:bg-white/10 hover:text-brand-coral",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-12 px-6 py-3 text-sm",
        lg: "h-16 px-10 py-5 text-lg",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-brand-gradient-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </Comp>
    )
  }
)
CtaButton.displayName = "CtaButton"

export { CtaButton, ctaButtonVariants }