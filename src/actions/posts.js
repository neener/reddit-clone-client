import { resetPostForm } from './postForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export const setPosts = posts => {
	return {
		type: 'SET_POSTS',
		posts
	};
};

export const addPost = post => {
	return {
		type: 'ADD_POST',
		post
	};
};

export const replacePost = post => {
	return {
		type: 'REPLACE_POST',
		post
	};
};

export const removePost = postId => {
	return{
		type: 'REMOVE_POST',
		postId
	};
};

// ** Async Actions **

export const fetchPosts = () => {
	return dispatch => {
		return fetch(`${API_URL}/posts`)
			.then(response => response.json())
			.then(posts => {
				dispatch(setPosts(posts));
			})
			.catch(error => console.log(error));
	};
};

export const fetchPost = (postId) => {
	return dispatch => {
		return fetch (`${API_URL}/posts/${postId}`)
			.then(response => response.json())
			.then(post => {
				dispatch(setPosts([post]));
			})
			.catch(error => console.log(error));
	};
};

export const createPost = post => {
	return dispatch => {
		return fetch(`${API_URL}/posts`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ post: post })
		})
			.then(response => response.json())
			.then(post => {
				dispatch(addPost(post))
				dispatch(resetPostForm())
			})
			.catch(error => console.log(error));
	};
};

export const updatePost = (post, routerHistory) => {
	return dispatch => {
		return fetch(`${API_URL}/posts/${post.id}`, {
			method: 'PUT',
			headers: {
				'Content_Type': 'application/json'
			},
			body: JSON.stringify({ post: post })
		})
			.then(response => response.json())
			.then(post => {
				dispatch(replacePost(post));
				routerHistory.replace(`/posts/${post.id}`);
			})
			.catch(error => console.log(error));
		
	};
};

export const deletePost = (postId, routerHistory) => {
	return dispatch => {
		return fetch(`${API_URL}/posts/${postId}`, {
			method: 'DELETE'
		})
		.then(response => {
				dispatch(removePost(postId));
				routerHistory.replace(`/posts`);
		})
		.catch(error => console.log(error));
	};
};