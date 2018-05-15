import { combineReducers } from 'redux';

const reducers = new Set();

/**
 * Root reducer, used when creating the Redux store.
 *
 * The implementation simply invokes each registered `AppReducer`
 * in a loop.
 *
 * @param state Current application state.
 * @param action Action being dispatched.
 *
 * @returns New application state.
 */
export function rootReducer(state, action) {
  let newState = state;

  reducers.forEach(appReducer => {
    newState = appReducer(newState, action);
  });

  return newState;
}

/**
 * Add given reducer to the list of registered application reducers.
 *
 * @param appReducer Reducer to add.
 *
 * @returns Function to remove (unsubscribe) the given reducer.
 */
export function addReducer(appReducer) {
  reducers.add(appReducer);

  return () => {
    reducers.delete(appReducer);
  };
}

/**
 * Remove all registered application reducers.
 *
 * *For testing purposes only.*
 */
export function clearReducers() {
  reducers.clear();
}

export function combineReducersWithState(reducersObject) {
  return (state, action) => {
    const combinedState = Object.keys(reducersObject).reduce((acc, curr) => {
      acc[curr] = state[curr] || {};
      return acc;
    }, {});
    return {
      ...state,
      ...combineReducers(reducersObject)(combinedState, action)
    };
  };
}
