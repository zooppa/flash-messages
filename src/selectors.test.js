import deepFreeze from 'deep-freeze';

import { getAllFlashMessages } from './selectors';

describe('selectors', () => {
  describe('getAllFlashMessages(state)', () => {
    const state = deepFreeze({
      flashMessages: {
        abc: {
          id: 'abc',
          type: 'warning',
          text: 'some text',
        },
        def: {
          id: 'def',
          type: 'success',
          text: 'all good',
        },
      },
    });

    it('returns flash messages as an array', () => {
      expect(getAllFlashMessages(state)).toEqual([
        { id: 'abc', type: 'warning', text: 'some text' },
        { id: 'def', type: 'success', text: 'all good' },
      ]);
    });
  });
});
