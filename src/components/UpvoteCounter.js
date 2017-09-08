import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUpvote } from '../actions/posts'

class UpvoteCounter extends Component{
	constructor(props){
		super(props);
		this.state = {
			postId: props.postId,
			count: props.upvoteCount
		};

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(){
		this.setState({
			count: ++this.state.count,
		});
		this.props.createUpvote(this.state.postId)
	}

	render(){
		return (
			<button onClick={this.handleClick}>Upvote {this.state.count}</button>
		);
	}
}

export default connect(null, { createUpvote })(UpvoteCounter);