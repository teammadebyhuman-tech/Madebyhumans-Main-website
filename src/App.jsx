import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProjectsPage from "./pages/ProjectsPage"
import Home from "./pages/Home"
import HireUs from "./pages/HireUs"

export default function App(){

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