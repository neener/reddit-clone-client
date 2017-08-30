const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPosts = posts => {
	return {
		type: 'GET_POSTS_SUCCESS',
		posts
	}
}
// ** Async Actions **
export const getPosts = () => {
	return dispatch => {
		return fetch(`${API_URL}/posts`)
			.then(response => response.json())
			.then(posts => dispatch(setPosts(posts)))
			.catch(error => console.log(error));
	}
}

