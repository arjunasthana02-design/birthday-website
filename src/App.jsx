import { useState } from "react"
import Intro from "./pages/Intro"
import Home from "./pages/Home"
import Moods from "./pages/Moods"
import Todo from "./pages/Todo"
import BrownieCake from "./components/BrownieCake"

function App() {
  const [page, setPage] = useState("brownie")

  return (
    <>
      {page === "brownie" && (
        <BrownieCake next={() => setPage("intro")} />
      )}

      {page === "intro" && (
        <Intro next={() => setPage("home")} />
      )}

      {page === "home" && (
        <Home next={() => setPage("moods")} />
      )}

      {page === "moods" && (
        <Moods next={() => setPage("todo")} />
      )}

      {page === "todo" && <Todo />}
    </>
  )
}

export default App