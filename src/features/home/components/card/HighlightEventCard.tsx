import React from "react"

import { formatDateTime } from "@/shared/utils/formatDateTime"
import { BaseEventItemProps } from "@/shared/types/events.types"

import { EventRowCard } from "./EventRowCard"
import { getCategoryIcon } from "@/shared/utils/categoryIcon"

interface HighlightEventCardProps {
  event: BaseEventItemProps
}

const HighlightEventCard: React.FC<HighlightEventCardProps> = ({ event }) => {
  return (
    <EventRowCard
      title={event.name}
      subtitle={`${formatDateTime(event.date)} • ${event.location}`}
      iconName={getCategoryIcon(event.categories[0].value)}
      endSlot={
        <div className="text-sm font-medium text-primary">${event.price}</div>
      }
    />
  )
}

export { HighlightEventCard }
