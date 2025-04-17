// src/shared/utils/navigation.ts
import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
  const navigate = useNavigate()

  return {
    // Equivalent to history.push
    navigateTo: (path: string) => navigate(path),

    // Equivalent to history.replace
    replaceWith: (path: string) => navigate(path, { replace: true }),

    // Go back in history
    goBack: () => navigate(-1),

    // Go forward in history
    goForward: () => navigate(1),

    // Custom go by steps
    go: (delta: number) => navigate(delta),
  }
}
