import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePostFormData } from '../actions/postForm';
import { createPost } from '../actions/posts';
import { submitButtonStyle , submitRoundField } from '../styles'

class PostForm extends Component {

	handleOnChange = event => {
		const { name, value } = event.target; 
		const currentPostFormData = Object.assign({}, this.props.postFormData, {
			[name]: value
		})
		this.props.updatePostFormData(currentPostFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault()
		const { createPost, postFormData, history} = this.props;
		createPost(postFormData, history);
	}

	render() {
		const { title, link, img_url } = this.props.postFormData;
		
		return (
			<div>
				<h2>Create a New Post</h2>
				<form onSubmit={this.handleOnSubmit}>
					<div style={submitRoundField}>
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="title"
							value={title}
						/>
					</div>
					<div style={submitRoundField}>
						<label htmlFor="link">Link:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="link"
							value={link}
						/>
					</div>
					<div style={submitRoundField}>
						<label htmlFor="img_url">Image Url:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="img_url"
							value={img_url}
						/>
					</div>

					<button 
						style={submitButtonStyle}
						type="submit">Post</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		postFormData: state.postFormData
	}
}

export default connect(mapStateToProps, { 
	updatePostFormData,
	createPost
})(PostForm);