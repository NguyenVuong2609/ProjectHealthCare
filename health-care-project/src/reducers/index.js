import { combineReducers } from 'redux';
import userViewData from "./UserView"
import listUser from "./ListUser"

const reducer = combineReducers({userViewData, listUser});
export default reducer;