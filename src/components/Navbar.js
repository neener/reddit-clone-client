import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => 

<div className='navbar'>
	<NavLink to='/posts'> Posts </NavLink>
	<NavLink to='/newpost'> New Post </NavLink>
	<NavLink to='/about'> About </NavLink>
</div>

export default Navbar

