import actions from "./actions";

const initialState = {
  isAuthencated: false,
  user: {},
  formErrors: {},
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...actions.payload };
    default:
      return state;
  }
}
