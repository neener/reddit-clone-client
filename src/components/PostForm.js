import React, { Component } from 'react';


class PostForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			link: '',
			img_url: ''
		}
	}

	componentDidMount() {
		this.setState({
			...this.props.post
		})
	}

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const post = this.state;
        this.props.onFormSubmit(post, this.props.history);
    }

	render() {
		
		return (
			<form onSubmit={this.handleOnSubmit}>
                <h2>{this.props.header}</h2>
                <hr />
	                <div >
	                    <label htmlFor="title">Title:</label>
	                </div>
	                <input
	                    type="text" 
	                    name="title" 
	                    value={this.state.title} 
	                    onChange={this.handleOnChange}/>
                <div>
                    <div>
                        <label htmlFor="link">Link:</label>
                    </div>
                    <textarea 
                    	type="text"
                        name="link" 
                        value={this.state.link}
                        onChange={this.handleOnChange}
                    >
                    </textarea>
                </div>
                <div>
                    <div>
                        <label htmlFor="img_url">Image Url:</label>
                    </div>
                    <input
                        type="text" 
                        name="img_url" 
                        value={this.state.img_url}
                        onChange={this.handleOnChange}/>
                </div>
                <div>
                    <button  
                        type="submit"
                    >
                        {this.props.buttonTitle}
                    </button>
                </div>
            </form>
		)
	}
}

export default PostForm;