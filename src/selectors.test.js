import deepFreeze from 'deep-freeze';

import { getAllFlashMessages } from './selectors';

describe('selectors', () => {
  describe('getAllFlashMessages(state)', () => {
    const state = deepFreeze({
      flashMessages: {
        1: {
          type: 'warning',
          text: 'some text',
        },
        2: {
          type: 'success',
          text: 'all good',
        },
      },
    });

    it('returns flash messages as an array', () => {
      expect(getAllFlashMessages(state)).toEqual([
        { type: 'warning', text: 'some text' },
        { type: 'success', text: 'all good' },
      ]);
    });
  });
});
