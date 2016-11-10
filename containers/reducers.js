import { combineReducers } from 'redux';
import { FILTER,LENGHTMENU,DELETE,ADD } from './actions';


function operation(state = [], action){
	switch(action.type){
		case FILTER:
			return {
				FILTER:action.text
			};
		case ADD:
			return Object.assign({}, state, {
				ADD:action.data,
				index: action.index
			});
		case DELETE:
			return {
				DELETE:action.dIndex
			};
		default:
			return state;
	}
}

//使用combineReducers 组合多个reducer
const reactTableApp = combineReducers({
  operation,
})
export default reactTableApp;