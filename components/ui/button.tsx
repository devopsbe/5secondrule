import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bubblegum-pink disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-10 active:scale-[0.98] active:transition-transform",
  {
    variants: {
      variant: {
        default:
          "bg-bubblegum-pink text-white shadow hover:bg-bubblegum-pink/90 hover:shadow-md before:bg-white",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90 before:bg-white",
        outline:
          "border border-input bg-background shadow-sm hover:border-bubblegum-pink hover:text-bubblegum-pink before:bg-bubblegum-pink/10",
        secondary:
          "bg-deep-purple text-white shadow-sm hover:bg-deep-purple/90 hover:shadow-md before:bg-white",
        bright:
          "bg-bright-yellow text-deep-purple shadow-sm hover:bg-bright-yellow/90 hover:shadow-md before:bg-white",
        lime:
          "bg-lime-green text-white shadow-sm hover:bg-lime-green/90 hover:shadow-md before:bg-white",
        ghost: 
          "hover:bg-bubblegum-pink/10 hover:text-bubblegum-pink before:bg-bubblegum-pink/10",
        link: 
          "text-bubblegum-pink underline-offset-4 hover:underline before:bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
      animation: {
        default: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      animation: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    animation,
    asChild = false, 
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle loading state
    const isDisabled = disabled || isLoading
    
    return (
      <Comp
        className={cn(buttonVariants({ 
          variant, 
          size, 
          rounded,
          animation,
          className 
        }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit">
            <svg 
              className="animate-spin h-5 w-5 text-current opacity-80" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        
        <span className={isLoading ? 'opacity-0' : 'flex items-center gap-2'}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
