import { EDIT_USER, DELETE_USER, GET_DATA } from "../constants/userActions";
import * as db from "../services/createUserService";
import { deleteUser } from "../services/bannedService";

let initialState = [];

const listUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state = action.payload;
      return state;
    case EDIT_USER:
        db.updateUser(action.payload.id, action.payload.info)
      return state;
    case DELETE_USER:
      db.deleteUser(action.payload);
      deleteUser(action.payload);
      return state;
    default:
      return state;
  }
};
export default listUser;
