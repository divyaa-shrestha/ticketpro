import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { NavLink } from "react-router"

import { cn } from "@/shared/utils/cn"

const navItemVariants = cva(
  "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 ease-in-out focus:outline-2 focus:outline-black",
  {
    variants: {
      variant: {
        default: "text-sm gap-1.5 px-4 py-2",
        desktop: "flex-col gap-1 text-xs px-2 py-1",
      },
      color: {
        danger: "bg-red-100 hover:bg-red-200 text-red-600",
        default: "hover:bg-gray-100",
      },
      state: {
        active: "text-primary",
        default: "",
      },
    },
    compoundVariants: [
      {
        color: "danger",
        state: "active",
        className: "bg-red-100",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      state: "default",
    },
  }
)

interface NavigationItem {
  label: string
  icon?: string
  to: string
}

interface NavItemProps
  extends NavigationItem,
    VariantProps<typeof navItemVariants> {
  className?: string
  onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  to,
  variant,
  color,
  onClick,
  className,
}) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          navItemVariants({
            variant,
            color,
            state: isActive ? "active" : "default",
          }),
          className
        )
      }
      onClick={onClick && onClick}
    >
      {icon && <i className={`ri-${icon}-line`}></i>}
      <span>{label}</span>
    </NavLink>
  )
}

export { NavItem }
