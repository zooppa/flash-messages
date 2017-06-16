import deepFreeze from 'deep-freeze';
import {
  RECEIVE_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES,
} from '../actions/flashMessages';

import reducer from './flashMessagesReducer';

describe('flashMessagesReducer', () => {
  describe('@@CONFIGURE', () => {
    const action = deepFreeze({
      type: '@@CONFIGURE',
    });
    const stateAfter = deepFreeze({});

    it('sets up the reducer with a default state', () => {
      expect(reducer(undefined, action)).toEqual(stateAfter);
    });
  });

  describe('RECEIVE_FLASH_MESSAGE', () => {
    const stateBefore = deepFreeze({});
    const action = deepFreeze({
      type: RECEIVE_FLASH_MESSAGE,
      message: {
        id: 1,
        type: 'error',
        text: 'generic error',
      },
    });
    const stateAfter = deepFreeze({
      1: {
        id: 1,
        type: 'error',
        text: 'generic error',
      },
    });

    it('adds a flash message to the list', () => {
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('REMOVE_FLASH_MESSAGE', () => {
    const stateBefore = deepFreeze({
      abc: { id: 'abc', type: 'error', text: 'generic error' },
      def: { id: 'def', type: 'success', text: 'success' },
    });
    const action = deepFreeze({
      type: REMOVE_FLASH_MESSAGE,
      message: { id: 'def', type: 'success', text: 'success' },
    });
    const stateAfter = deepFreeze({
      abc: { id: 'abc', type: 'error', text: 'generic error' },
    });

    it('removes a flash message', () => {
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('CLEAR_FLASH_MESSAGES', () => {
    const stateBefore = deepFreeze({
      abc: { id: 'abc', type: 'error', text: 'generic error' },
      def: { id: 'def', type: 'success', text: 'success' },
    });
    const action = deepFreeze({ type: CLEAR_FLASH_MESSAGES });
    const stateAfter = deepFreeze({});

    it('clears all flash messages', () => {
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('unknown action', () => {
    const stateBefore = deepFreeze({
      abc: { id: 'abc', type: 'error', text: 'generic error' },
      def: { id: 'def', type: 'success', text: 'success' },
    });
    const action = deepFreeze({
      type: 'WHATEVER',
    });

    it('returns the current state', () => {
      expect(reducer(stateBefore, action)).toBe(stateBefore);
    });
  });
});
