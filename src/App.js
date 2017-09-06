import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Home from './components/Home';
import Posts from './containers/Posts';
import About from './components/About';
import { appStyle, appHeader, appIntro } from './styles'


class App extends Component {

	render() {

		return (
			<Router>
				<div style={appStyle}>
					<div style={appHeader}>
						<h2>Freddit</h2>
					</div>
					<div style={appIntro}>
						<Link to='/'><button>Freddit</button></Link>
						<Link to='/posts'><button>Posts</button></Link>
						<Link to='/posts/new'><button>Create Post</button></Link>
						<Link to='/about'><button>About</button></Link>

					</div>
					<div>
						<Route exact path='/' component={Home}/>
						<Route path='/posts' component={Posts}/>
						<Route path='/about' component={About}/>
					</div>
				</div>	
			</Router>
		);
	}
}

export default App;