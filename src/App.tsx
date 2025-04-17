import { BrowserRouter } from "react-router"

import { Navbar } from "./layouts/components/Navbar"
import { AppRouter } from "./AppRouter"
import { Footer } from "@/layouts/components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main className="relative max-w-dvw min-h-screen z-10 bg-gray-50 whitespace-pre pb-8">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
