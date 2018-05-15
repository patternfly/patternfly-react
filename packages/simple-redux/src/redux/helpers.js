/**
 * Apply a collection of reducers, represented as `AppReducerHash`,
 * to compute new application state.
 *
 * The implementation looks for a key that matches action's `type`.
 * If present, the corresponding reducer is invoked to compute the
 * new state. Otherwise, original state is returned.
 *
 * @param reducerHash Reducer hash to use.
 * @param state Current application state.
 * @param action Action being dispatched.
 *
 * @returns New application state.
 */
export function applyReducerHash(reducerHash, state, action) {
  let newState = state;

  if (Object.prototype.hasOwnProperty.call(reducerHash, action.type)) {
    newState = reducerHash[action.type](state, action);
  }

  return newState;
}
