import React from 'react';

const PostCard = ({ post }) => (
	<div key={post.id} className="PostCard"> 
		<h3>{post.title}</h3>
		<p>{post.link}</p>
		<img className="PostImage" src={post.img_url} alt={post.title} />
	</div>
)

export default PostCard;

