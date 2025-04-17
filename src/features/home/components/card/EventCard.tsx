import React from "react"

import { Button } from "@/shared/components/button/Button"
import { Card } from "@/shared/components/card/Card"
import { EventItemProps } from "@/shared/types/events.types"

interface EventCardProps {
  event: EventItemProps
  onClick?: (event: EventItemProps) => void
  onBuyTicketsClick?: (event: EventItemProps) => void
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onClick,
  onBuyTicketsClick,
}) => {
  const handleClick = () => onClick?.(event)

  return (
    <Card
      className="min-h-60 max-w-sm hover:cursor-pointer hover:-translate-y-2 transition-smooth"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={event.image_url ?? ""}
          className="max-h-52 w-full object-cover rounded-2xl object-top"
        />
        {event.highlighted_info && (
          <div className="absolute top-4 right-4 rounded-full py-1.5 px-4 bg-white/30 backdrop-blur-sm text-sm text-white shadow-sm">
            {event.highlighted_info}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span>
            <h2 className="font-semibold text-lg leading-5 line-clamp-1">
              {event.name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              <i className="ri-map-pin-line mr-2"></i>
              {event.location}
            </p>
          </span>
          <span className="font-semibold text-xl">${event.price}</span>
        </div>
        <div className="flex gap-2">
          <Button
            color="primary"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              onBuyTicketsClick?.(event)
            }}
          >
            Buy Tickets
          </Button>
          <Button variant="tonal" onClick={handleClick}>
            <i className="ri-arrow-right-up-line"></i>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export { EventCard }
