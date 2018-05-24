import { applyReducerHash } from '../redux/helpers';
import { reducersHash, basicState as state } from './utils';

test('state should change if type is found', () => {
  const newState = applyReducerHash(reducersHash, state, {
    type: 'someAction'
  });

  expect(newState.someValue).toBe(2);
});

test("state shouldn't change if type is not found", () => {
  const newState = applyReducerHash(reducersHash, state, {
    type: 'someOtherAction'
  });

  expect(newState.someValue).toBe(state.someValue);
});
