import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import searchReducer from './searchReducer';

export default combineReducers({
	photo: photoReducer,
	search: searchReducer
});