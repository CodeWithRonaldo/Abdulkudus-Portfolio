import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div>
        <div className='nav-links'>
            <div><h1>Abdulkudus</h1></div>
            <div>
                <NavLink className="links" to="/home" activeClassName="active">Home</NavLink>
                <NavLink className="links" to="/about" activeClassName="active">About</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar