import React from "react"

import { formatDateTime } from "@/shared/utils/formatDateTime"
import { Button } from "@/shared/components/button/Button"
import { Card } from "@/shared/components/card/Card"
import { EventItemProps } from "@/shared/types/events.types"

interface FeaturedEventCardProps {
  event: EventItemProps | null
}

const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({ event }) => {
  return (
    <Card bordered className="col-span-2 flex max-h-96 h-96 max-w-5xl">
      <div className="w-1/3 relative">
        <img
          src={
            event?.image_url ??
            "https://public.readdy.ai/ai/img_res/4559a71eece40737ffdce89faf530d0a.jpg"
          }
          className="size-full object-cover"
          alt={event?.name}
        />
        {event?.highlighted_info && (
          <div className="absolute top-4 left-4 rounded-full py-1.5 px-4 bg-primary/50 backdrop-blur-sm text-sm text-white shadow-sm">
            {event?.highlighted_info}
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between text-sm mb-4">
            <div className="text-primary font-medium">
              {event?.categories[0]?.name}
            </div>
            <div className="text-gray-500">
              <i className="ri-time-line mr-1"></i>
              {event?.date &&
                event?.time &&
                formatDateTime(event?.date, event?.time)}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl">{event?.name}</h2>
            <p className="text-sm text-gray-500">
              <i className="ri-map-pin-line mr-1"></i> {event?.location}
            </p>
            <p className="mt-4 leading-5 line-clamp-4">{event?.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs">Starting from</p>
            <p className="font-semibold text-xl">${event?.price}</p>
          </div>
          <Button color="primary">Buy Tickets</Button>
        </div>
      </div>
    </Card>
  )
}

export { FeaturedEventCard }
