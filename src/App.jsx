import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Calendar from "./components/Calendar"
import Matters from "./components/Matters"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Matters />
      <Calendar />
    </BrowserRouter>
  )
}

export default App