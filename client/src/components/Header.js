import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__brand">
        Amazon
      </Link>
      <ul className="header__nav">
        <li className="header__nav-item">
          <Link to="/">Cart</Link>
        </li>
        <li className="header__nav-item">
          <Link to="/">Sign In</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
