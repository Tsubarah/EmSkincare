import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import Footer from './components/Footer'
import './style.css'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Navbar />
      
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
