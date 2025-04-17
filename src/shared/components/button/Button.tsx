import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center gap-1.5 justify-center font-medium rounded-sm transition-smooth border focus:outline-1 focus:outline-black hover:cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        contained: "!border-transparent",
        outlined: "bg-transparent",
        ghost: "!border-transparent",
        tonal: "!border-transparent",
        link: "!border-transparent underline",
      },
      color: {
        primary: "border-primary text-primary focus:ring-primary",
        secondary: "border-gray-600 text-gray-600 focus:ring-gray-500",
        danger: "border-red-600 text-red-600 focus:ring-red-500",
        info: "border-sky-600 text-sky-600 focus:ring-sky-500",
      },
      size: {
        tiny: "px-2.5 py-1 text-xs min-w-8",
        small: "px-3 py-1.5 text-sm min-w-12",
        medium: "px-4 py-2 text-sm",
        large: "px-5 py-2.5 text-lg",
        icon: "p-1.5",
      },
      fullWidth: {
        true: "w-full",
      },
      fullRounded: {
        true: "rounded-full",
      },
      disabled: {
        true: "opacity-50 hover:cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className: "bg-primary text-gray-50 hover:bg-primary",
      },
      {
        variant: "contained",
        color: "secondary",
        className: "bg-gray-600 text-gray-50 hover:bg-gray-700",
      },
      {
        variant: "contained",
        color: "danger",
        className: "bg-red-600  text-gray-50 hover:bg-red-700",
      },
      {
        variant: "contained",
        color: "info",
        className: "bg-sky-600 text-gray-50 hover:bg-sky-700",
      },
      {
        variant: "outlined",
        color: "primary",
        className: "hover:bg-primary",
      },
      {
        variant: "outlined",
        color: "secondary",
        className: "border-gray-300 hover:bg-gray-100",
      },
      { variant: "outlined", color: "danger", className: "hover:bg-red-100" },
      { variant: "outlined", color: "info", className: "hover:bg-sky-100" },
      { variant: "ghost", color: "primary", className: "hover:bg-primary-100" },
      {
        variant: "ghost",
        color: "secondary",
        className: "hover:bg-gray-100",
      },
      { variant: "ghost", color: "danger", className: "hover:bg-red-100" },
      { variant: "ghost", color: "info", className: "hover:bg-sky-100" },
      {
        variant: "tonal",
        color: "primary",
        className: "bg-primary-100 hover:bg-primary-200",
      },
      {
        variant: "tonal",
        color: "secondary",
        className: "bg-gray-100 hover:bg-gray-200",
      },
      {
        variant: "tonal",
        color: "danger",
        className: "bg-red-100 hover:bg-red-200",
      },
      {
        variant: "tonal",
        color: "info",
        className: "bg-sky-100 hover:bg-sky-200",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "secondary",
      size: "medium",
    },
  }
)

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
  isLoading?: boolean
  fullRounded?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  fullWidth,
  fullRounded = true,
  disabled = false,
  isLoading = false,
  className,
  children,
  ...props
}) => {
  const isDisabled = disabled || isLoading

  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          color,
          size,
          fullWidth,
          fullRounded,
          disabled,
        }),
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      tabIndex={isDisabled ? -1 : 0}
      role="button"
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin" aria-hidden="true">
          🔄
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export { Button }
