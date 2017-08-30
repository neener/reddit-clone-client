import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePostFormData } from '../actions/postForm';

class PostForm extends Component {

	handleOnChange = event => {
		const { name, value } = event.target; 
		const currentPostFormData = Object.assign({}, this.props.postFormData, {
			[name]: value
		})
		this.props.updatePostFormData(currentPostFormData)
	}

	render() {
		const { title, link, img_url } = this.props.postFormData;
		
		return (
			<div>
				Create a New Post
				<form>
					<div>
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="title"
							value={title}
						/>
					</div>
					<div>
						<label htmlFor="link">Link:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="link"
							value={link}
						/>
					</div>
					<div>
						<label htmlFor="img_url">Image Url:</label>
						<input
							type="text"
							onChange={this.handleOnChange}
							name="img_url"
							value={img_url}
						/>
					</div>
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

export default connect(mapStateToProps, { updatePostFormData })(PostForm);