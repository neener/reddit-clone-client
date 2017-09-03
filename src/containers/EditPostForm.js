import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePost } from '../actions/posts';
import PostForm from '../components/PostForm';

const EditPostForm = ({ updatePost, post, history }) => {
	return <PostForm header={'Update Post'} buttonTitle={'Update'} onFormSubmit={updatePost} history={history} post={post} />; 
}

const mapStateToProps = (state, ownProps) => {
	return ({
		post: state.posts.find(post => post.id === +ownProps.location.state.postId)
	});
};

export default connect(mapStateToProps, { updatePost })(EditPostForm);