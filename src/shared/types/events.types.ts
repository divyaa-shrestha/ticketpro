import { Category } from "@/shared/types/categories.types"

export interface BaseEventItemProps {
  id: number
  name: string
  location: string
  price: number
  categories: Category[]
  date: string
}

export interface EventItemProps extends BaseEventItemProps {
  image_url: string | null
  highlighted_info?: string
  time: string
  description: string
}
