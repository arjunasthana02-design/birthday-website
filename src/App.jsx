import { useState } from "react"

import BrownieCake from "./components/BrownieCake"
import Home from "./pages/Home"

function App() {

const [entered,setEntered]=useState(false)

function enterWorld(){
setEntered(true)
}

return(

<>

{!entered ? (

<BrownieCake enterWorld={enterWorld}/>

) : (

<Home/>

)}

</>

)

}

export default App