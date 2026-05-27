import { useState } from "react"

import BrownieCake from "./components/BrownieCake"
import Home from "./pages/Home"
import Moods from "./pages/Moods"
import Todo from "./pages/Todo"

function App() {

const [page,setPage]=useState("brownie")

if(page==="home"){

return(

<Home
goBack={()=>{
setPage("brownie")
}}

openMoods={()=>{
setPage("moods")
}}
/>

)

}

if(page==="moods"){

return(

<Moods
goBack={()=>{
setPage("home")
}}
/>

)

}

if(page==="todo"){

return(

<Todo
goBack={()=>{
setPage("moods")
}}
/>

)

}

return(

<BrownieCake
enterWorld={()=>{
setPage("home")
}}
/>

)

}

export default App