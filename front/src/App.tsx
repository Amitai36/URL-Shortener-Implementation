import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import UrlForm from "./pages/UrlForm"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
