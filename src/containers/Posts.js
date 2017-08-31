import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostCard from '../components/PostCard';
//import PostForm from './PostForm';
import { getPosts } from '../actions/posts';
import './Posts.css'

class Posts extends Component {

	componentDidMount() {
		this.props.getPosts()
	}

	render() {
		return(
			<div className="PostsContainer">
				<h1>Posts</h1>
				{this.props.posts.map(post => <PostCard key={post.id} post={post} />)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		posts: state.posts
	})
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators({ getPosts: getPosts}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Posts);