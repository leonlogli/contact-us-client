import messageService from "../services/messageService";
import {
  SAVE_MESSAGE_FAILURE,
  SAVE_MESSAGE_SUCCESS,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS
} from "../constants";

// save Message actions
export const saveMessageSuccess = message => ({
  type: SAVE_MESSAGE_SUCCESS,
  message
});

export const saveMessageFailure = error => ({
  type: SAVE_MESSAGE_FAILURE,
  error
});

// get all Messages actions
export const getMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST
});

export const getMessagesSuccess = messages => ({
  type: GET_MESSAGES_SUCCESS,
  messages
});

export const getMessagesFailure = error => ({
  type: GET_MESSAGES_FAILURE,
  error
});

// define actions

export function saveMessage(message) {
  return dispatch => {
    messageService
      .saveMessage(message)
      .then(res => {
        dispatch(saveMessageSuccess(res.data));
      })
      .catch(err => {
        dispatch(saveMessageFailure(err.response.data));
      });
  };
}

export function getMessages() {
  return dispatch => {
    dispatch(getMessagesRequest());

    messageService
      .getMessages()
      .then(res => {
        dispatch(getMessagesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getMessagesFailure(err.response.data));
      });
  };
}
