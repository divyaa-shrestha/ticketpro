import { DropdownMenu } from "radix-ui"
import React from "react"

import { DropdownItem } from "./DropdownItem"

import { DropdownSectionProps } from "@/shared/components/dropdown/dropdown.types"

const DropdownSection: React.FC<DropdownSectionProps> = ({
  section,
  dangerItems = [],
  disabledItems = [],
  isLast = false,
}) => {
  return (
    <>
      {section.title && (
        <div className="px-6 py-1 text-xs font-medium text-neutral-300">
          {section.title}
        </div>
      )}

      {section.items.map((item) => (
        <DropdownItem
          key={item.value}
          id={item.value}
          color={
            item.color ??
            (dangerItems.includes(item.value) ? "danger" : "default")
          }
          disabled={disabledItems.includes(item.value)}
        >
          {item.label}
        </DropdownItem>
      ))}

      {!isLast && (
        <DropdownMenu.Separator className="my-1.5 h-px bg-neutral-300" />
      )}
    </>
  )
}

export { DropdownSection }
