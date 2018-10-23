import {SEARCH} from '../actions/type';

export default (state = {tag: ''}, action) => {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				tag: action.tag
			}
		default:
			return state;
	}
}
