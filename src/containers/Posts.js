import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostCard from '../components/PostCard';
//import PostForm from './PostForm';
import { fetchPosts } from '../actions/posts';
import './Posts.css'

class Posts extends Component {

	componentDidMount() {
		this.props.fetchPosts();
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


export default connect(mapStateToProps, { fetchPosts })(Posts);