import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import UrlList from "./pages/UrlList"

function App() {

  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<UrlList />} />
      </Routes>
    </>
  )
}

export default App
