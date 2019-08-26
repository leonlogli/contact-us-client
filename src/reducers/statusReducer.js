import { status } from "../constants";

const initialState = {
  getMessages: "",
  getMessagesError: {},
  saveMessage: "",
  saveMessageError: {}
};

export default (state = initialState, action) => {
  const actionHandlers = {
    // get messages statuses
    GET_MESSAGES_REQUEST: {
      getMessages: status.PENDING,
      getMessagesError: ""
    },
    GET_MESSAGES_SUCCESS: {
      getMessages: status.SUCCESS,
      getMessagesError: ""
    },
    GET_MESSAGES_FAILURE: {
      getMessages: status.ERROR,
      getMessagesError: action.error
    },

    // save messages statuses
    SAVE_MESSAGE_SUCCESS: {
      saveMessage: status.SUCCESS,
      saveMessageError: ""
    },
    SAVE_MESSAGE_FAILURE: {
      saveMessage: status.ERROR,
      saveMessageError: action.error
    }
  };

  const statesToUpdate = actionHandlers[action.type];
  state = Object.assign({}, state, statesToUpdate);
  return state;
};
