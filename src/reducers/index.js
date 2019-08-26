import { combineReducers } from 'redux';
import messages from './messagesReducer';
import status from './statusReducer';

const rootReducer = combineReducers({
  status,
  messages
});

export default rootReducer;