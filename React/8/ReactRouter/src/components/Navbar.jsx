import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/login"><li>Log In</li></Link> */}
        <NavLink to="/" className={(e)=>{return e.isActive?"red":""}}><li>Home</li></NavLink>
        <NavLink to="/about" className={(e)=>{return e.isActive?"red":""}}><li>About</li></NavLink>
        <NavLink to="/login" className={(e)=>{return e.isActive?"red":""}}><li>Log In</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
