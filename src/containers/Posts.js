import React, { Component } from 'react';

import PostCard from '../components/PostCard';
import PostForm from './PostForm';
import './Posts.css'

class Posts extends Component {

	render() {
		return(
			<div className="PostsContainer">
				<h1>Posts</h1>
				{this.props.posts.map(post => <PostCard key={post.id} post={post} />)}
				<PostForm />
			</div>
		);
	}
}

export default Posts;