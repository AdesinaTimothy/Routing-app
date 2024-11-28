import About from "./About.jsx"
import Home from "./Home.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Services from "./Services.jsx"
import RootLayout from "./RouteLayout.jsx"

function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/services"
        element={<Services />}
      />


    </Route>
  ))

  return (
    <RouterProvider 
    router = {router} />
  )
}

export default App
