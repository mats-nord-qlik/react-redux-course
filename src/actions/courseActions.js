import * as types from './actionTypes';
import courseApi from '../api/mockCoursApi';
// This is conviencen runction, requires a type in the return
export function loadCourseSSuccess( courses ) {
	// This only fires when it's successful, so the suffix is valid
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess( course ) {
	return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess( course ) {
	return { type: types.UPDATE_COURSE_SUCCESS, course };
}

// Put the tunk in the end of the file, or in a separate file
export function loadCourses(){
	return function(dispacth){
		return courseApi.getAllCourses().then( courses => {
			dispacth( loadCourseSSuccess( courses ));
		}).catch( error => {
			throw( error );
		});
	};
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
