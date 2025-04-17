import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { cn } from "../../utils/cn"

const cardVariants = cva(
  "bg-white rounded-3xl border border-transparent overflow-hidden",
  {
    variants: {
      spacing: {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
      bordered: {
        true: "border-gray-200",
      },
    },
    defaultVariants: {
      spacing: "none",
    },
  }
)

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> = ({
  children,
  spacing,
  bordered,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(cardVariants({ spacing, bordered }), className)}
      onClick={onClick && onClick}
    >
      {children}
    </div>
  )
}

export { Card }
