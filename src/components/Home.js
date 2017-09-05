import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div style={{ marginTop: '32px', padding:'16px'}}>
			<h1>Welcome to Freddit</h1>
			<p> This app is loosely based on a Reddit Clone. Anyone can create a post and anyone can comment on a post. </p>
			<p> Click <Link to='/posts'>HERE</Link> to see what people are talking about </p>
		</div>
	)
}

export default Home;