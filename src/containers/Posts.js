import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import PostCard from '../components/PostCard';
import CreatePostForm from './CreatePostForm';
import PostDetail from './PostDetail';
import { fetchPosts } from '../actions/posts';



class Posts extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts, match } = this.props;
		const renderPosts = posts.map(post => (
			<div>
				<Link
					to={`${match.url}/${post.id}`}
					key={post.id}
					style={{ color: 'red' }} >
					View Post
				</Link>
				<PostCard post={post} />	
			</div>
		));


		
			

		return (
			<div>
				{
					<div>
						<Switch>
							<Route 
								path={`${match.url}/new`}
								component={CreatePostForm} />
							<Route
								path={`${match.url}/:postId`}
								component={PostDetail} />
							<Route
								exact
								path={match.url}
								render={() => (
									<div>
										<h2>Posts</h2>
										<hr />
										{renderPosts}
									</div>
								)} />
						</Switch>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		posts: state.posts
	});
}


export default connect(mapStateToProps, { fetchPosts })(Posts);