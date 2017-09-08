import React from 'react';
import { postCard, postImage} from '../styles';
import UpvoteCounter from '../components/UpvoteCounter';
const Timestamp = require('react-timestamp');

const PostCard = ({ post }) => (
	<div key={post.id} style={postCard}> 
		<a href={`posts/${post.id}`}>
			<h3>{post.title}</h3>
		</a>
		<h5><a href={post.link} target="_blank">Link</a></h5>
		<p>Posted: <Timestamp time={post.created_at} format='full' /></p>
		<img style={postImage} src={post.img_url} alt={post.title} />
		<UpvoteCounter postId={post.id} upvoteCount={post.upvote_count}/>
	</div>
)

export default PostCard;

