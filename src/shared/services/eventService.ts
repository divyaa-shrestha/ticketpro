import { supabase } from "./supabaseClient"

interface EventData {
  name: string
  location: string
  categories: string[]
  date: string
  time: string
  price: number
  highlighted_info?: string
  description?: string
  image_url?: string | null
}

export const createEvent = async (eventData: EventData) => {
  // First, insert the event into the 'events' table
  const { data: event, error: eventError } = await supabase
    .from("events")
    .insert([
      {
        name: eventData.name,
        location: eventData.location,
        date: eventData.date,
        time: eventData.time,
        price: eventData.price,
        highlighted_info: eventData.highlighted_info,
        description: eventData.description,
        image_url: eventData.image_url,
      },
    ])
    .select()

  if (eventError) throw eventError

  // Insert into 'event_categories' table
  const eventId = event[0].id

  // Prepare category insert data
  const categoriesToInsert = eventData.categories.map((categoryId) => ({
    event_id: eventId,
    category_id: categoryId,
  }))

  const { error: categoryError } = await supabase
    .from("event_categories")
    .insert(categoriesToInsert)

  if (categoryError) throw categoryError

  return event
}

export const fetchEvents = async () => {
  const { data, error } = await supabase.from("events").select("*")

  if (error) throw error
  return data
}
