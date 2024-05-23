import {
  GET_USERS_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constansts/userConstanst";
export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true, users: [] };

    case GET_USER_SUCCESS:
      return { loading: false, users: action.payload };

    case GET_USER_FAIL:
      return { loading: false, users: action.payload };

    default:
      return state;
  }
};
