import * as exports from './index';

describe('index.js', () => {
  [
    'receiveFlashMessage',
    'removeFlashMessage',
    'clearFlashMessages',
    'receiveTimedFlashMessage',
    'flashMessagesReducer',
    'getAllFlashMessages',
  ].forEach((key) => {
    it(`exports ${key}`, () => {
      expect(typeof exports[key]).toEqual('function');
    });
  });
});
