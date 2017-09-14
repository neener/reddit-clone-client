import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import PostCard from '../components/PostCard';
import CreatePostForm from './CreatePostForm';
import PostDetail from './PostDetail';
import { fetchPosts } from '../actions/posts';

class Posts extends Component {

	constructor(props) {
		super(props);

			this.state = {
				sortedPosts: []
			}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = () => {
				this.setState({ 
					sortedPosts: this.props.posts.sort(function(a,b){
						if (a.upvote_count > b.upvote_count)
							return -1
						if (a.upvote_count < b.upvote_count)
							return 1
						return 0
					})
				})
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts, match } = this.props;

		let renderPosts
		if (this.state.sortedPosts.length === 0) {
			renderPosts = posts.map(post =>
				<div>
					<PostCard post={post} url={match.url}/>	
				</div>
			)
		} else {
			renderPosts = this.state.sortedPosts.map(post =>
				<div>
					<PostCard post={post} url={match.url}/>	
				</div>
			)
		}
		
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
										<button onClick={this.handleClick}>Sort by Upvote</button>
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