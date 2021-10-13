import { ADD_USER, DELETE_USER, READ_USER, UPDATE_USER } from "../actions/type";

const initialState = {
  users: [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Alice", email: "alice@example.com" },
  ],
};

export default function (state = initialState, action) {
  let users = state.users;
  switch (action.type) {
    case ADD_USER:
      let addUser = action.payload;
      return {
        ...state,
        users: [...users, addUser],
      };
    case DELETE_USER:
      let deleteUser = action.payload;
      users = users.filter((user) => {
        return user.id !== deleteUser.id;
      });
      console.log(users, action.payload);
      return {
        ...state,
        users,
      };
    case UPDATE_USER:
    default:
      return { ...state };
  }
}
