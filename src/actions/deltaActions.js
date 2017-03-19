import * as types from './actionTypes';
import deltaApi from '../api/mockDeltaApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// This is conviencen runction, requires a type in the return
export function loadDeltasSuccess( deltas ) {
	// This only fires when it's successful, so the suffix is valid
	return { type: types.LOAD_DELTAS_SUCCESS, deltas };
}

// Put the thunk in the end of the file, or in a separate file
export function loadDeltas(){
	return function(dispatch){
		dispatch( beginAjaxCall() );
		return deltaApi.getAllDeltas().then( deltas => {
			dispatch( loadDeltasSuccess( deltas ));
		}).catch( error => {
			throw( error );
		});
	};
}

