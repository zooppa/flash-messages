import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';

import {
  RECEIVE_FLASH_MESSAGE,
  receiveFlashMessage,
  REMOVE_FLASH_MESSAGE,
  removeFlashMessage,
  CLEAR_FLASH_MESSAGES,
  clearFlashMessages,
  receiveTimedFlashMessage,
} from './flashMessages';

jest.mock('../config', () => ({
  FLASH_MESSAGE_SHOW_TIME: 1,
}));

describe('flashMessage actions', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {};
  let store;
  const message = deepFreeze({
    type: 'success',
    text: 'my text',
  });

  describe('receiveFlashMessage(message)', () => {
    it('creates the correct object', () => {
      expect(receiveFlashMessage(message)).toMatchObject({
        type: RECEIVE_FLASH_MESSAGE,
        message,
      });
    });
  });

  describe('removeFlashMessage(message)', () => {
    it('creates the correct object', () => {
      expect(removeFlashMessage(message)).toEqual({
        type: REMOVE_FLASH_MESSAGE,
        message,
      });
    });
  });

  describe('clearFlashMessages()', () => {
    it('creates the correct object', () => {
      expect(clearFlashMessages()).toEqual({
        type: CLEAR_FLASH_MESSAGES,
      });
    });
  });

  describe('async actions', () => {
    beforeEach(() => {
      store = mockStore(initialState);
    });

    describe('receiveTimedFlashMessage', () => {
      it('adds a message, removes it after the set time', () => {
        return store.dispatch(receiveTimedFlashMessage(message)).then(() => {
          const actualActions = store.getActions();

          expect(actualActions.length).toEqual(2);
          // toMatchObject since message now has the id: shortid() added
          expect(actualActions[0]).toMatchObject({
            type: RECEIVE_FLASH_MESSAGE,
            message,
          });
          expect(actualActions[1]).toMatchObject({
            type: REMOVE_FLASH_MESSAGE,
            message,
          });
        });
      });
    });
  });
});
