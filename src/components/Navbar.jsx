import { NavLink } from 'react-router-dom'
import logo from '/assets/images/logo.png'
import Hamburger from './Hamburger'

export default function Navbar() {

  return (
    <header className="topnav">
        <Hamburger />
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={logo} alt="Logo of Emskin" />
          </a>
        </div>
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Treatments</NavLink>
          <a href="https://www.planity.com/emskincare-06600-antibes" target="_blank">Booking</a>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
    </header>
  )
}
