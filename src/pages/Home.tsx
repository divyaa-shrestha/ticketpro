import { Container } from "@/shared/components/container"
import { Card } from "@/shared/components/card/Card"
import { EventCard } from "@/features/home/components/card/EventCard"
import { FeaturedEventCard } from "@/features/home/components/card/FeaturedEventCard"
import { HighlightEventCard } from "@/features/home/components/card/HighlightEventCard"
import { EventRowCard } from "@/features/home/components/card/EventRowCard"
import { HeroSection } from "@/features/home/components/HeroSection"
import { useEvents } from "@/shared/hooks/useEvents"

const Home = () => {
  const { allEvents, heroEvent, featuredEvent, upcomingEvents } = useEvents()

  console.log({ allEvents })
  return (
    <>
      <HeroSection event={heroEvent} />
      <Container className="grid grid-cols-3 gap-8 pt-8">
        <FeaturedEventCard event={featuredEvent} />
        <Card spacing="lg" bordered>
          <h2 className="mb-4 font-bold text-xl">Upcoming Events</h2>
          {upcomingEvents.map((event) => (
            <HighlightEventCard key={event.id} event={event} />
          ))}
          <EventRowCard
            title="View All Events"
            subtitle="See what's coming up next"
            iconName="calendar"
            endSlot={<i className="ri-arrow-right-line text-primary"></i>}
          />
        </Card>
      </Container>
      <Container className="pt-8 grid grid-cols-4 gap-5">
        {allEvents?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Container>
    </>
  )
}

export default Home
