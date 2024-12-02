import About from "./About.jsx"
import Home from "./Home.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Services from "./Services.jsx"
import RootLayout from "./RouteLayout.jsx"
import ServicesLayout from "./ServicesLayout,.jsx"
import GeneralServices from "./GeneralServices.jsx"
import PrivateServices from "./PrivateServices.jsx"
import NotFound from "./NotFound.jsx"
import JobsLayout from "./JobsLayout.jsx"
import Jobs, { loader } from "./Jobs.jsx"

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
      element={<ServicesLayout />}>

      <Route
        path="general"
        element={<GeneralServices />}
      />

      <Route
        path="private"
        element={<PrivateServices />}
      />

      </Route>
       {/* End of services page */}

       <Route
        path="*"
        element={<NotFound />}
      />

      {/* Jobs Layout nested routed */}

      <Route path="Jobs" element = {<JobsLayout />}>
        <Route index element = {<Jobs />} loader = {loader} />
      </Route>

    </Route>

     
  ))

  return (
    <RouterProvider 
    router = {router} />
  )
}

export default App
