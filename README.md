# flash-messages

A redux reducer and a set of actions to implement flash messages in a redux
application.

Note: **this library provides only the data layer**. In order to display the messages in
your frontend, you must read the current messages from the corresponding
reducer.

## Work In Progress Warning
The public interface of this project is being actively developed. It is,
therefore, **still evolving and subject to sudden change**. Wait until version
1.0.0 if you want to enjoy a stable API.

## Installing
`npm install @zooppa/flash-messages lodash@^4.17.4`

or

`yarn add @zooppa/flash-messages lodash@^4.17.4`

### Running tests
- `yarn run test:single` (single test run with coverage)
- `yarn run test` (watch)

### Building
- `yarn run build`

## Using
Adding the reducer to your root reducer:
```javascript
// reducers/rootReducer.js
import { combineReducers } from 'redux';
import { flashMessagesReducer as flashMessages } from '@zooppa/flash-messages';

export default combineReducers({
  flashMessages
});
```

Dispatching a message:
```javascript
// your component
import { receiveFlashMessage } from '@zooppa/flash-messages';

store.dispatch(receiveFlashMessage({
  type: 'success', // ['success', 'warning', 'error', ...]
  text: 'my text'
}));
```

Dispatching a timed message:
```javascript
import { receiveTimedFlashMessage } from '@zooppa/flash-messages';

store.dispatch(receiveTimedFlashMessage({
  type: 'success',
  text: 'this message will disappear in 3000 ms'
}, {          // optional config object
  time: 3000  // default: 3000
}))
```

## Contributing
- Use eslint in your editor with the provided `eslintrc.js` config.
- Use prettifier as a code formatter (included in `devDependencies`).
- Respect the coverage thresholds.
- Use common sense.
