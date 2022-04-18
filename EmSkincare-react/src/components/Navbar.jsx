import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div className="topnav">
        <a href="/" className="logo">
          <img src="./assets/images/logo.png" alt="Logo of Emskin" />
        </a>
        <div className="navMenu">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/treatments">Treatments</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  )
}
