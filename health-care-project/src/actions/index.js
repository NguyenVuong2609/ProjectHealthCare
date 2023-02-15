import {
  EDIT_USER,
  VIEW_USER,
  DELETE_USER,
  GET_DATA,
} from "../constants/userActions";

export const act_view_user = (data, status) => {
  return {
    type: VIEW_USER,
    payload: { data, status },
  };
};
export const act_delete_user = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const act_get_data = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
export const act_edit_user = (id, info) => {
  return {
    type: EDIT_USER,
    payload: { id, info },
  };
};
