import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Treatments from "./pages/Treatments"
import Footer from "./components/footer"
import "./style.css"

const treatments = [
  {
    name: "Brows",
    description: "Lorem, ipsum dolor.",
    items: [
      {
        itemName: "Brow Wax & Style",
        itemDescription: "Description",
        price: 99,
        duration: "20min",
      },
    ],
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
          </Routes>
      
      <Footer />
    </div>
  )
}

export default App
