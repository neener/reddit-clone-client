import React, { Component } from 'react';

export default class UpvoteCounter extends Component{
	constructor(){
		super();

		this.state = {
			count: 0,
		};

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(){
		this.setState({
			count: ++this.state.count,
		});
	}

	render(){
		return (
			<button onClick={this.handleClick}>Upvote {this.state.count}</button>
		);
	}
}