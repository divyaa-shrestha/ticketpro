import { DropdownMenu } from "radix-ui"
import React from "react"

import { DropdownSectionType } from "@/shared/components/dropdown/dropdown.types"
import { DropdownSection } from "@/shared/components/dropdown/DropdownSection"

interface DropdownProps {
  children?: React.ReactNode
  trigger: React.ReactNode
  items?: DropdownSectionType[]
  dangerItems?: string[]
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  dangerItems = [],
  trigger,
  children,
}) => {
  return (
    <DropdownMenu.Root>
      {trigger}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade z-40 min-w-[180px] rounded-md bg-white p-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={5}
        >
          {children}
          {!children &&
            items?.map((section, index) => (
              <DropdownSection
                key={index}
                section={section}
                dangerItems={dangerItems}
                isLast={index === items.length - 1} // ✅ Pass `isLast` flag
              />
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export { Dropdown }
