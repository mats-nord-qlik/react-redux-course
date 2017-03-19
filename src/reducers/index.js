import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import deltas from './deltaReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	deltas,
	ajaxCallsInProgress
});

export default rootReducer;