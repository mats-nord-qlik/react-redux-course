import * as types from './actionTypes';
// This is conviencen runction, requires a type in the return
export function createCourse(course) {
	return { type: types.CREATE_COURSE, course };
}
