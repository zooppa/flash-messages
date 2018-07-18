export const getAllFlashMessages = ({ flashMessages }) =>
  Object.keys(flashMessages).map(id => flashMessages[id]);
