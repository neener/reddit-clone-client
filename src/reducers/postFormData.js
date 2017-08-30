export default (state = {
	title: '',
	link: '',
	img_url: ''
}, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.postFormData

		default:
			return state;
	}
}