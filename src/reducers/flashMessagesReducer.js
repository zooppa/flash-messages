import merge from 'lodash/merge';

import {
  RECEIVE_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES,
} from '../actions/flashMessages';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_FLASH_MESSAGE: {
      nextState = merge({}, state);
      nextState[action.message.id] = action.message;
      return nextState;
    }
    case REMOVE_FLASH_MESSAGE: {
      nextState = merge({}, state);
      delete nextState[action.message.id];
      return nextState;
    }
    case CLEAR_FLASH_MESSAGES:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
