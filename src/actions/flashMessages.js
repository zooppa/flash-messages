import { nanoid } from 'nanoid';

import { FLASH_MESSAGE_SHOW_TIME } from '../config';

export const RECEIVE_FLASH_MESSAGE = 'RECEIVE_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
export const CLEAR_FLASH_MESSAGES = 'CLEAR_FLASH_MESSAGES';

export const receiveFlashMessage = (message) => ({
  type: RECEIVE_FLASH_MESSAGE,
  message: {
    ...message,
    id: nanoid(),
  },
});

export const removeFlashMessage = (message) => ({
  type: REMOVE_FLASH_MESSAGE,
  message,
});

export const clearFlashMessages = () => ({
  type: CLEAR_FLASH_MESSAGES,
});

// async actions
export const receiveTimedFlashMessage = (
  message,
  { time } = { time: FLASH_MESSAGE_SHOW_TIME },
) => (dispatch) => {
  const addAction = dispatch(receiveFlashMessage(message));

  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch(removeFlashMessage(addAction.message));
      resolve(
        // make message available to a .then() if needed
        addAction.message,
      );
    }, time);
  });
};
