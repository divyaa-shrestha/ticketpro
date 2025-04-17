import { Button } from "@/shared/components/button/Button"
import { useCategories } from "@/shared/hooks/useCategories"
import { getCategoryIcon } from "@/shared/utils/categoryIcon"

const CategoryList: React.FC = () => {
  const { categories, loading, error } = useCategories()

  if (loading) {
    return <div>Loading categories...</div>
  }

  if (error) {
    return <div>Error loading categories. Please try again later.</div>
  }

  return (
    <nav className="flex items-center py-2 overflow-x-auto space-x-1">
      <Button variant={"contained"} color={"primary"}>
        All Events
      </Button>
      {categories.map((category) => {
        const icon = getCategoryIcon(category.value)

        return (
          <Button
            key={category.id} // Assuming category has an 'id' field
            variant={category.name === "All Events" ? "contained" : "ghost"}
            color={category.name === "All Events" ? "primary" : "secondary"}
          >
            {icon && <i className={`ri-${icon}-line`}></i>}
            {category.name}
          </Button>
        )
      })}
    </nav>
  )
}

export { CategoryList }
