import { cva, VariantProps } from "class-variance-authority"
import { DropdownMenu } from "radix-ui"
import React from "react"

import { cn } from "@/shared/utils/cn"

const dropdownItemVariants = cva(
  "group relative flex gap-1.5 items-center rounded-sm px-4 py-3 text-sm leading-none outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-300 data-[highlighted]:cursor-pointer",
  {
    variants: {
      color: {
        default: "data-[highlighted]:bg-gray-100",
        danger: "data-[highlighted]:bg-red-100 text-red-600",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
)

interface DropdownItemProps extends VariantProps<typeof dropdownItemVariants> {
  id?: string
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  id,
  color,
  className,
  disabled,
  onClick,
  children,
}) => {
  return (
    <DropdownMenu.Item
      id={`dropdown-item-${id}`}
      role="option"
      disabled={disabled}
      onClick={onClick}
      className={cn(dropdownItemVariants({ color }), className)}
    >
      {children}
    </DropdownMenu.Item>
  )
}

export { DropdownItem }
