import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => 

<div className='navbar'>
	<NavLink className="nav-button" to='/posts' exact>Posts</NavLink>
	<NavLink className="nav-button" to='/newpost' exact>New Post</NavLink>
	<NavLink className="nav-button" to='/about' exact>About</NavLink>
</div>

export default Navbar

