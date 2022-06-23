import { NavLink } from 'react-router-dom'
import logo from '/assets/images/logo.png'
import Hamburger from './Hamburger'

export default function Navbar() {

  return (
    <header>
      <div className="topnav">
        <Hamburger />
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={logo} alt="Logo of Emskin" />
          </a>
        </div>
        {/* <div className="nav-menu"> */}
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Treatments</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        {/* </div> */}
      </div>
    </header>
  )
}
