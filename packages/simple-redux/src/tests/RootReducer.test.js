import { clearReducers, addReducer, rootReducer } from '../redux/root-reducer';
import { applyReducerHash } from '../redux/helpers';
import {
  reducersHash,
  basicState as state,
  complexHash,
  someReducer
} from './utils';

let simpleRemove;
let hashRemove;
let complexRemove;

beforeEach(() => {
  simpleRemove = addReducer(someReducer);
  hashRemove = addReducer((reduxState, reduxAction) =>
    applyReducerHash(reducersHash, reduxState, reduxAction)
  );
  complexRemove = addReducer((reduxState, reduxAction) =>
    applyReducerHash(complexHash, reduxState, reduxAction)
  );
});

describe('addReducer', () => {
  test('would return function which removes reducer', () => {
    simpleRemove();
    expect(rootReducer(state, { type: 'otherAction' })).toEqual({
      ...state
    });
    expect(rootReducer(state, { type: 'actionOne' })).toEqual({
      ...state,
      actionOne: 'actionOne'
    });
  });

  test(`removing all reducers wouldn't change state`, () => {
    simpleRemove();
    hashRemove();
    complexRemove();
    expect(rootReducer(state, { type: 'otherAction' })).toEqual({
      ...state
    });
    expect(rootReducer(state, { type: 'actionOne' })).toEqual({
      ...state
    });
  });
});

describe('rootReducer', () => {
  test('with multiple reducers would change state', () => {
    expect(rootReducer(state, { type: 'otherAction' })).toEqual({
      ...state,
      otherValue: 'something'
    });

    expect(rootReducer(state, { type: 'actionOne' })).toEqual({
      ...state,
      actionOne: 'actionOne'
    });
  });
});

afterEach(() => {
  clearReducers();
});
