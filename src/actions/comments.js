const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export const setComments = comments => {
	return {
		type: 'SET_COMMENTS',
		comments,
		postId: comments[0].post.id
	};
};

export const addComment = comment => {
	return {
		type: 'ADD_COMMENT',
		comment,
		postId: comment.post.id
	};
};

export const replaceComment = comment => {
	return{
		type: 'REPLACE_COMMENT',
		comment,
		postId: comment.post.id
	};
};

export const removeComment = (commentId, postId) => {
	return{
		type: 'REMOVE_COMMENT',
		commentId,
		postId
	};
};

// ** Async Actions **

export const fetchComments = postId => {
	return dispatch => {
		return fetch(`${API_URL}/posts/${postId}/comments`)
			.then(response => response.json())
			.then(comments => {
				dispatch(setComments(comments));
			})
			.catch(error => console.log(error));
	};
};

export const createComment = (postId, newComment) => {
	return dispatch => {
		return fetch(`${API_URL}/posts/${postId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
				comment: newComment 
			})
		})
			.then(response => response.json())
			.then(comment => {
				dispatch(addComment(comment));
			})
			.catch(error => console.log(error))
	};
};

export const updateComment = (postId, updatedComment) => {
    return dispatch => {
        return fetch(`${API_URL}/posts/${postId}/comments/${updatedComment.id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                comment: updatedComment
            })
        })
        .then(response => response.json())
        .then(comment => {
            dispatch(replaceComment(comment));
        })
        .catch(error => console.log(error));
    };
};

export const deleteComment = (postId, commentId) => {
	return dispatch => {
		return fetch(`${API_URL}/posts/${postId}/comments/${commentId}`, {
			method: 'DELETE'
		})
		.then(response => {
				dispatch(removeComment(commentId, postId));
		})
		.catch(error => console.log(error))
	};
};