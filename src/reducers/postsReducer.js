export default (state = [], action) => {
	switch(action.type) {
		case 'GET_POSTS_SUCCESS':
			return action.posts;

		case 'CREATE_POST_SUCCESS':
			return state.concat(action.post);

		case 'REMOVE_POST': {
			return [
        		...state.slice(0, action.postIndex),
        		...state.slice(action.postIndex + 1)
      		];
		}

		default:
			return state;

	}
}

