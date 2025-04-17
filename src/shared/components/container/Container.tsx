import { forwardRef, type HTMLProps } from "react"

import { cn } from "@/shared/utils/cn"

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = "Container"

export { Container }
