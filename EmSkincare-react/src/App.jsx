import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import Footer from "./components/footer"
import "./style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
