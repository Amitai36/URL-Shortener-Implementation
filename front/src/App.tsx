import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import UrlList from "./pages/UrlList"
import Analitics from "./pages/Analitics"
import CreateUrl from "./pages/createUrl"
import MuiProviderTheme from "./theme/MuiThemeProvider"

function App() {
  return (
    <MuiProviderTheme >
      <Home />
      <Routes>
        <Route path="/" element={<UrlList />} />
        <Route path="/create" element={<CreateUrl />} />
        <Route path="/analitics" element={<Analitics />} />
      </Routes>
    </MuiProviderTheme>
  )
}

export default App
