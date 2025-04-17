import { DropdownMenu } from "radix-ui"
import React from "react"

import { Button } from "@/shared/components/button/Button"

interface DropdownTriggerProps {
  ariaLabel?: string
  children?: React.ReactNode
  icon?: string
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  ariaLabel,
  icon,
  children,
}) => {
  return (
    <DropdownMenu.Trigger className="group text-default-black" asChild>
      <Button
        variant="ghost"
        size={!children && icon ? "icon" : "small"}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        role="button"
        className="lg:px-2 lg:py-1"
      >
        {children}{" "}
        {icon && (
          <i
            className={`ri-${icon}-line transition-smooth ${
              icon === "chevronDown" ? "group-data-[state=open]:rotate-180" : ""
            }`}
          ></i>
        )}
      </Button>
    </DropdownMenu.Trigger>
  )
}

export { DropdownTrigger }
