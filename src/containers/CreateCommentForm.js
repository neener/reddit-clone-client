import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createComment } from '../actions/comments';
import { textAreaStyle, submitButtonStyle } from '../styles';

class CreateCommentForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			content: ''
		}
	}

	handleOnChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleOnSubmit = event => {
		event.preventDefault()
		const comment = this.state;
		const { createComment, postId } = this.props;
		createComment(postId, comment)
		this.setState({ content: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
				<div style= {{ marginTop: '24px' }}>
					<div>
						<label htmlFor="content">Add a Comment</label>
					</div>
					<textarea
						style={textAreaStyle}
						name="content"
						value={this.state.content}
						onChange={this.handleOnChange}
					>
					</textarea>
				</div>
				<div>
					<button
						style={submitButtonStyle}
						type="submit"
					>
						Add Comment
					</button>
				</div>
			</form>
		);
	}
};

export default connect(null, { createComment })(CreateCommentForm);
