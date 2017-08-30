import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

	render() {
		return (
			<div>
				Create a New Post
				<form>
				
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		surfboardFormData: state.surfboardFormData
	}
}

export default connect(mapStateToProps)(PostForm);