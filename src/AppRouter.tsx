import { useRoutes } from "react-router"

import Home from "@/pages/Home"
import AddEvent from "@/pages/AddEvent"

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/events/create", element: <AddEvent /> },
  ])

  return routes
}

export { AppRouter }
