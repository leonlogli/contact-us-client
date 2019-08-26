import { GET_MESSAGES_SUCCESS, SAVE_MESSAGE_SUCCESS } from "../constants";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE_SUCCESS:
      state = Object.assign({}, state, action.messages);
      break;

    case GET_MESSAGES_SUCCESS:
      state = action.messages;
      break;
    default:
      return state;
  }
  return state;
};
