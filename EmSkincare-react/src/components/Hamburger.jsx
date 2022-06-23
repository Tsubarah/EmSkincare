import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false)

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

          <div className="mobileNav">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/about">
              About
            </NavLink>
            <NavLink to="/services">
              Treatments
            </NavLink>
            <NavLink to="/gallery">
              Gallery
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </div>
      </div>
    </>
  )
}

export default Hamburger