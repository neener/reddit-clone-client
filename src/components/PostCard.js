import React from 'react';
import { postCard, postImage} from '../styles';
import UpvoteCounter from '../components/UpvoteCounter';
const Timestamp = require('react-timestamp');

const PostCard = ({ post }) => (
	<div key={post.id} style={postCard}> 
		<h3>{post.title}</h3>
		<h3><a href={post.link} target="_blank">Link</a></h3>
		<p>Posted: <Timestamp time={post.created_at} format='full' /></p>
		<img style={postImage} src={post.img_url} alt={post.title} />
		<UpvoteCounter postId={post.id} upvoteCount={post.upvote_count}/>
	</div>
)

export default PostCard;

