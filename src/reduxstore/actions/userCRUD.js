import { ADD_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./type";

export const addUser = (user) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const deleteUser = (user) => (dispatch) => {
  dispatch({
    type: DELETE_USER,
    payload: user,
  });
};

export const updateUser = (user) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: user,
  });
};
