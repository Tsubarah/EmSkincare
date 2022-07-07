import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/images/logo.png'

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false)

  // const handleOnClick = () => {
  //   setShowMenu(!showMenu)
  // }

  return (
    <>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="mobileMenu"
      style={{
        transform: `${showMenu ? "none" : "translate3d(100vw, 0, 0)"}`,
      }}
      >
          <a href="/" className="hamburger-logo">
            <img src={logo} alt="Logo of Emskin" />
          </a>

          <div className="mobileNav">
            <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(!showMenu)}>
              About
            </NavLink>
            <NavLink to="/services" onClick={() => setShowMenu(!showMenu)}>
              Treatments
            </NavLink>
            <a href="https://www.planity.com/emskincare-06600-antibes" target="_blank">Booking</a>
            <NavLink to="/gallery" onClick={() => setShowMenu(!showMenu)}>
              Gallery
            </NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(!showMenu)}>
              Contact
            </NavLink>
          </div>
      </div>
    </>
  )
}

export default Hamburger