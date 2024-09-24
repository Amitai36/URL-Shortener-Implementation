import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import UrlList from "./pages/UrlList"
import CreateUrl from "./pages/createUrl"

function App() {

  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<UrlList />} />
        <Route path="/create" element={<CreateUrl />} />
      </Routes>
    </>
  )
}

export default App
