import commentsReducer from './commentsReducer';

export default (state = [], action) => {
	switch(action.type) {

		case 'SET_POSTS': {
			return action.posts;
		};

		case 'ADD_POST': {
			return state.concat(action.post);
		};

		case 'UPVOTE_POST': {
			const index = state.findIndex(post => post.id === action.post.id);
			const post = state[index];
			const updatedPost = Object.assign({}, post, {
                upvote_count: action.post.upvote_count
            });
            return [
                ...state.slice(0, index),
                updatedPost,
                ...state.slice(index + 1)
            ];
		}

		case 'REPLACE_POST': {
			const index = state.findIndex(post => post.id === action.post.id);

			return [
				...state.slice(0, index),
				action.post,
				...state.slice(index + 1)
			];
		};

		case 'REMOVE_POST': {
			const index = state.findIndex(post => post.id === action.postId);
            
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
		};

		case 'SET_COMMENTS':
        case 'ADD_COMMENT':
        case 'REPLACE_COMMENT':
        case 'REMOVE_COMMENT': {
            const index = state.findIndex(post => post.id === action.postId);
            const post = state[index];
            const updatedPost = Object.assign({}, post, {
                comments: commentsReducer(post.comments, action)
            });

            return [
                ...state.slice(0, index),
                updatedPost,
                ...state.slice(index + 1)
            ];
        };

		default: {
			return state;
		};
	};
};

