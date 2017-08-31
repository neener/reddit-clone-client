import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => 

<div className='navbar'>
	<NavLink to='/posts' exact>Posts</NavLink>
	<NavLink to='/newpost' exact>New Post</NavLink>
	<NavLink to='/about' exact>About</NavLink>
</div>

export default Navbar

