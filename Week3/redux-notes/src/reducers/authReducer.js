import * as actions from "../actions/authActions";

export const initialState = {
  loading: false,
  error: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.SET_USER:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };

    case actions.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.RESET_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
