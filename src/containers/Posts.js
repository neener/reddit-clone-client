import React from 'react';
import './Posts.css'

const Posts = (props) => (
	<div>
		<h3>Posts</h3>
		{props.posts.map(post =>
			<div key={post.id} className="PostCard"> 
				<h3>{post.title}</h3>
				<p>{post.link}</p>
				<img className="PostImage" src={post.img_url} alt={post.title} />
			</div>
		)}
	</div>
);

export default Posts;