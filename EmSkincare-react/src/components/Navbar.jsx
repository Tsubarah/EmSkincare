import { NavLink } from 'react-router-dom'
import logo from '/assets/images/logo.png'

export default function Navbar() {
  return (
    <header>
      <div className="topnav">
        <a href="/" className="logo">
          <img src={logo} alt="Logo of Emskin" />
        </a>
        <div className="navMenu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Treatments</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  )
}
