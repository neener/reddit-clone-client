import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import CommentForm from './CommentForm';
import

import { deletePost } from '../actions/posts';

class PostDetail extends Component {

	render() {
		const { post, deletePost, match, history } = this.props;

		return (
			<div>
			</div>
		)
	}
}