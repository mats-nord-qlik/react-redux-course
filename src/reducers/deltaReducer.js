import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function deltaReducer(state = initialState.deltas, action){
	switch(action.type){
		case types.LOAD_DELTAS_SUCCESS:
			return action.deltas;
			
		default: return state;
	}
}