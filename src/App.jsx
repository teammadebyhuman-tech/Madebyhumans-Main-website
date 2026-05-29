import { useEffect } from "react"
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"
import Clarity from "@microsoft/clarity"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProjectsPage from "./pages/ProjectsPage"
import Home from "./pages/Home"
import HireUs from "./pages/HireUs"

export default function App(){

useEffect(() => {
  const clarityId = import.meta.env.VITE_CLARITY_ID;
  if (clarityId) {
    Clarity.init(clarityId);
  } else {
    console.warn("Microsoft Clarity Project ID (VITE_CLARITY_ID) is missing from environment variables. Clarity tracking is disabled.");
  }
}, [])

return(

<BrowserRouter>

<div
className="
min-h-screen
bg-gradient-to-b
from-[#faf8ff]
to-[#f1edff]
"
>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/project"
element={<ProjectsPage/>}
/>

<Route
path="/hire"
element={<HireUs/>}
/>


</Routes>

<Footer/>

</div>

</BrowserRouter>

)

}