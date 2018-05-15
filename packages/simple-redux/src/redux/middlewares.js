/* eslint global-require: 0 */
export const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}
