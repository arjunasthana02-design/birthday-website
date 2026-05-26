import { useState } from "react";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Moods from "./pages/Moods";
import Todo from "./pages/Todo";

function App(){

const [screen,setScreen]=useState("intro")

if(screen==="intro"){

return(
<Intro
enterWorld={()=>{
setScreen("home")
}}
/>
)

}

if(screen==="home"){

return(
<Home
openMoods={()=>{
setScreen("moods")
}}
openTodo={()=>{
setScreen("todo")
}}
/>
)

}

if(screen==="todo"){

return(
<Todo
goBack={()=>{
setScreen("home")
}}
/>
)

}

return(

<Moods
goBack={()=>{
setScreen("home")
}}
/>

)

}

export default App