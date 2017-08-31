import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import Posts from './Posts';
import PostForm from './PostForm';
import Navbar from '../components/Navbar';
import About from '../components/About';
//import alienloader from '../alien.svg'
import './App.css';


class App extends Component {

	render() {

		return (
			<Router>
				<Switch>
				<div className="App">
					<div className="App-header">
						<h2>Freddit</h2>
					</div>
					<div className="App-intro">
						<div>
							<Navbar />
							<Posts />
						</div>
					</div>
					<div className="App-main-content">
						<Route exact path='/posts' render={Posts}/>
						<Route exact path='/newpost' render={PostForm}/>
						<Route exact path='/about' render={About}/>
					</div>
				</div>
				</Switch>
			</Router>
		);
	}
}

export default App;