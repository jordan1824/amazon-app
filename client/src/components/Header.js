import React from 'react'

function Header(props) {
  return (
    <header className="header">
      <h2 className="header__brand">Amazon</h2>
      <ul className="header__nav">
        <li className="header__nav-item">Cart</li>
        <li className="header__nav-item">Sign In</li>
      </ul>
    </header>
  )
}

export default Header
