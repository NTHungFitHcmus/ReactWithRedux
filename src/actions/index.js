import {CLEAR, ADD, SEARCH} from './type';

export const doClear = () => ({type: CLEAR});

export const doAdd = (data) => ({
	type: ADD,
	images: data.images,
	page: data.page
});

export const doSearch = (tag) => ({
	type: SEARCH,
	tag: tag
});