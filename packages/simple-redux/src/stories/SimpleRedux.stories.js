import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  rootReducer,
  addReducer,
  applyReducerHash,
  clearReducers,
  middlewares
} from '../index';
import { name } from '../../package.json';
import basicUsage from './BasicUsage.stories';
import reducerOnTheFly from './ReducerOnTheFly.stories';
import combineReducers from './CombineReducers.stories';

const stories = storiesOf(`${name}/Simple Redux`, module);

const ON_ADD_ACTION = 'onAddAction';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const basicReducers = {
  [ON_ADD_ACTION]: state => ({ ...state, clicks: state.clicks + 1 })
};

stories.addDecorator(story => {
  clearReducers();
  addReducer((state, reduxAction) =>
    applyReducerHash(basicReducers, state, reduxAction)
  );
  const store = createStore(
    rootReducer,
    { clicks: 0 },
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return <Provider store={store}>{story()}</Provider>;
});

basicUsage(stories);
reducerOnTheFly(stories);
combineReducers(stories);
