import { HashRouter, Routes, Route } from "react-router"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import ComputerPage from "./pages/ComputerPage"
import DesignPage from "./pages/DesignPage"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="computer" element={<ComputerPage />} />
          <Route path="design" element={<DesignPage />} />
        </Route>
      </Routes>
    </HashRouter>

  )
}
