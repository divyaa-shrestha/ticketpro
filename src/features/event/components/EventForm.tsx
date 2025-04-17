import { useState, useEffect } from "react"

import { Card } from "@/shared/components/card/Card"
import { Input } from "@/shared/components/input/Input"
import { Textarea } from "@/shared/components/input/Textarea"
import { Button } from "@/shared/components/button/Button"
import { createEvent } from "@/shared/services/eventService"

import { ImageUploader } from "./ImageUploader"
import { fetchCategories } from "@/shared/services/categoryService"

interface FormState {
  name: string
  location: string
  categories: string[] // Array of category IDs
  date: string
  time: string
  price: string
  highlightedInfo: string
  description: string
  imageUrl: string | null
}

const initialForm: FormState = {
  name: "",
  location: "",
  categories: [], // Initialize as an empty array
  date: "",
  time: "",
  price: "",
  highlightedInfo: "",
  description: "",
  imageUrl: null,
}

export const EventForm: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([])
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories()
        console.log("Fetched categories:", categories)
        setCategories(categories)
      } catch (err) {
        console.error("Error fetching categories:", err)
      }
    }

    loadCategories()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions)
    const selectedCategories = options.map((option) => option.value)
    setForm((prev) => ({ ...prev, categories: selectedCategories }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const eventData = {
        name: form.name,
        location: form.location,
        categories: form.categories, // Send categories as an array of IDs
        date: form.date,
        time: form.time,
        price: Number(form.price),
        highlighted_info: form.highlightedInfo,
        description: form.description,
        image_url: form.imageUrl,
      }

      await createEvent(eventData)
      alert("Event created successfully!")
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      alert("Error creating event")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-xl mx-auto" spacing="lg">
      <h2 className="font-semibold text-2xl border-b pb-4 mb-4 border-b-gray-200">
        Add New Event
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Event Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <Input
          type="date"
          label="Date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <Input
          type="time"
          label="Time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          label="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <Input
          label="Highlighted Info"
          name="highlightedInfo"
          value={form.highlightedInfo}
          onChange={handleChange}
        />

        {/* Category selection */}
        <div className="w-full space-y-1">
          <label htmlFor="categories" className="block text-sm font-medium">
            Select Categories
          </label>
          <select
            id="categories"
            name="categories"
            multiple
            value={form.categories}
            className="bg-red-500 h-10"
            onChange={handleCategoryChange}
          >
            {/* Assuming you have a 'categories' array from your database */}
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <ImageUploader
          onUploadComplete={(url) =>
            setForm((prev) => ({ ...prev, imageUrl: url }))
          }
        />

        <Button type="submit" color="primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Event"}
        </Button>
      </form>
    </Card>
  )
}
