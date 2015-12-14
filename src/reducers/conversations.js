import * as types from "../actions";

const conversations = (state = {
  loading: false,
  conversations: null
}, action) => {
  switch (action.type) {
  case types.REQUEST_CONVERSATIONS:
    return Object.assign({}, state, {
      loading: true
    });
  case types.RECEIVE_CONVERSATIONS:
    return Object.assign({}, state, {
      loading: false,
      conversations: action.data
    });
  default:
    return state;
  }
};

export default conversations;