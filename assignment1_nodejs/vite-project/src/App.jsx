import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Work from "./components/Work"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/work">Work</Link>
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
