import {ADD, CLEAR} from '../actions/type';

export default (state = {images: [], page: 1}, action) => {
	switch (action.type) {
		case CLEAR:
			return {
				...state,
				images:[],
				page: 1
			}
		case ADD:
			return {
				...state,
				images: [...state.images, ...action.images],
				page: action.page
			}
		default:
			return state;
	}
}
