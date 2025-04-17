import { useState, useEffect } from "react"

import { supabase } from "@/shared/services/supabaseClient"
import { EventItemProps } from "@/shared/types/events.types"
import { EventCategories } from "@/shared/types/categories.types"

export const useEvents = () => {
  const [featuredEvent, setFeaturedEvent] = useState<EventItemProps | null>(
    null
  )
  const [heroEvent, setHeroEvent] = useState<EventItemProps | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState<EventItemProps[]>([])
  const [allEvents, setAllEvents] = useState<EventItemProps[]>([]) // New state for all events
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase.from("events").select(`
          *,
          event_categories (
            category:categories (
              id,
              name,
              value
            )
          )
        `)

        if (error) throw error

        const dataWithCategories = data.map((event) => ({
          ...event,
          categories: event.event_categories.map(
            (ec: EventCategories) => ec.category
          ),
        }))

        // Store all events
        setAllEvents(dataWithCategories)

        // Filter upcoming events
        const upcoming = dataWithCategories.filter(
          (event) => new Date(event.date) > new Date()
        )
        const upcomingLimited = upcoming.slice(0, 3) // Take top 3 upcoming events

        // Randomly select a featured event from the entire events list
        const randomFeaturedEvent =
          dataWithCategories[
            Math.floor(Math.random() * dataWithCategories.length)
          ] || null

        // Randomly select a hero event (could be based on location or date)
        const randomHeroEvent =
          dataWithCategories.filter(
            (event) => new Date(event.date) > new Date()
          )[Math.floor(Math.random() * upcoming.length)] || null

        setFeaturedEvent(randomFeaturedEvent)
        setHeroEvent(randomHeroEvent)
        setUpcomingEvents(upcomingLimited)
      } catch (err) {
        setError("Error fetching events.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { featuredEvent, heroEvent, upcomingEvents, allEvents, loading, error }
}
