import { useEffect, useState } from "react"

import { supabase } from "@/shared/services/supabaseClient"
import { Category } from "@/shared/types/categories.types"

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const { data, error } = await supabase.from("categories").select("*")
        if (error) throw error
        setCategories(data || [])
      } catch (err) {
        setError("Failed to load categories.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
