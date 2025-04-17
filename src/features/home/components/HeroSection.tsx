import React from "react"

import { Button } from "@/shared/components/button/Button"
import { formatDateTime } from "@/shared/utils/formatDateTime"
import { EventItemProps } from "@/shared/types/events.types"

interface HeroEventProps {
  event: EventItemProps | null
  onCTAClick?: () => void
}

const HeroSection: React.FC<HeroEventProps> = ({ event, onCTAClick }) => {
  return (
    <section
      className="relative h-[60dvh] w-full bg-cover flex items-center"
      style={{
        backgroundImage: `url(${
          event?.image_url ??
          "https://public.readdy.ai/ai/img_res/4559a71eece40737ffdce89faf530d0a.jpg"
        })`,
      }}
    >
      {/* Left gradient overlay */}
      <div className="absolute inset-0 w-3/4 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content on top of gradient */}
      <div className="relative z-10 pl-6 md:pl-16 pr-6 max-w-xl text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow">
          {event?.name}
        </h1>
        <p className="text-lg text-gray-300 line-clamp-2">
          {event?.description}
        </p>
        <p className="text-gray-400 drop-shadow-sm">
          <i className="ri-map-pin-line"></i> {event?.location} —{" "}
          {event?.date && formatDateTime(event?.date)}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={onCTAClick}
            size="large"
            className="w-52 bg-accent hover:bg-accent/80"
          >
            Buy Tickets
          </Button>
          <Button
            variant="tonal"
            size="large"
            // onClick={handleClick}
          >
            <i className="ri-arrow-right-up-line"></i>
          </Button>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
