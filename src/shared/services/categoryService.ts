import { supabase } from "./supabaseClient"

export const fetchCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*")

  console.log({ data, error })
  if (error) throw error
  return data
}
