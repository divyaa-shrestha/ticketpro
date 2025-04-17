type CategoryIconMap = {
  [key: string]: string // Mapping category name to icon class
}

const categoryIconMap: CategoryIconMap = {
  concerts: "music",
  comedy: "emotion-laugh",
  theatre: "movi",
  sports: "basketball",
  family: "group",
  "art-and-culture": "palette",
}

export const getCategoryIcon = (
  categoryName: keyof typeof categoryIconMap
): string => {
  return categoryIconMap[categoryName] || "default-icon-line" // Default icon if not found
}
