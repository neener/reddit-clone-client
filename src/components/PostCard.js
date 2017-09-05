import React from 'react';
import { postCard, postImage} from '../styles';

const Timestamp = require('react-timestamp');

const PostCard = ({ post }) => (
	<div key={post.id} style={postCard}> 
		<h3>{post.title}</h3>
		<h4>Posted: <Timestamp time={post.created_at} /></h4>
		<img style={postImage} src={post.img_url} alt={post.title} />
	</div>
)

export default PostCard;

