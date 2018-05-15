### @patternfly/simple-redux
This package provides couple of helper functions which helps you to write redux reducers and most importantly it allows
you to add reducers on the fly.

All credit goes to @vojtechszocs proposing this behavior and how it should work.
#### General Usage
To use this package simply install it, add some reducers and create redux store from `rootReducer`.

1. Install it
```bash
> npm install --save @patternfly/simple-redux
```

2. Add some reducers
```javascript 1.8
import { addReducer } from '@patternfly/simple-redux';

addReducer((state, action) => { ...state });
```

3. Import rootReducer and use it as one of your reducers
```javascript 1.8
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, middlewares } from '@patternfly/simple-redux';

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
```

#### Complex usage
You are free to use `rootReducer` as you wish, just bear in mind that only reducers registered via `addReducer` can be
 removed on the fly.

##### With combine reducers
If you want to use combineReducers function from redux there is helper method which helps you combine current state 
with state from combine reducers `combineReducersWithState`. What it does is that it takes state ane join it together 
with state from `combineReducers` function. 
```javascript 1.8
import { combineReducersWithState } from '@patternfly/simple-redux';
import { someReducer } from './reducers';

addReducer(combineReducersWithState({
  someValue: someReducer
}))
```

##### With redux browser extension
To enable browser extension for redux monitoring simply follow same logic as before with composeEnhancers, plus use 
rootReducer from simple redux library as reducer combination.
```javascript 1.8
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, middlewares } from '@patternfly/simple-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  );
```

#### Helper functions
This library comes bundled with some helper functions to make it easier for you to maintain regular redux, adding 
reducers and to make it easier to create reducer from Object.
##### addReducer
Basic function used to add new reducer to reducers list. It takes one argument callback function, which will be called
with state and action from redux.
* callback - reducer function callback
  * state - redux state to call with callback function
  * action - which action was triggered
  
You then can remove these reducers from reducers list at any time, by calling callbacks returned frum `addReducer` 
function.
```javascript 1.8
//add new reucer
import { reducerFunction } from './yourRedeucers';
import { addReducer } from '@patternfly/simple-redux';

const reducerRemove = addReducer(reducerFunction);
const reducerRemove2 = addReducer((state, action) => reducerFunction(state, action));

//remove these reducers
reducerRemove();
reducerRemove2();
```

##### rootReducer
Reducer with reducers list, this object holds all active reducers and calls them whenever new actin is triggered. Use
this object to create new store.
```javascript 1.8
import { createStore } from 'redux';
import { rootReducer } from '@patternfly/simple-redux';

createStore(rootReducer);
```

##### applyReducerHash
This function will help you to construct reducers out of object. Alternative to using switch statements in redux.
```javascript 1.8
import { applyReducerHash, addReducer } from '@patternfly/simple-redux';
import { ACTION_ONE, ACTION_TWO } from './yourActionTypes'; 

//simple reducer function
function firstReducer(state, action) {
  return {
    ...state,
    someData: action.payload.someData
  };
}

//map reducer functions to action type keys
const reducersHash = {
  [ACTION_ONE]: firstReducer,
  [ACTION_TWO]: (state, action) => ({
    ...state,
    anotherData: action.payload.anotherdata
  }),
  'actionThree': (state = {}) => ({...state})
};

//create reducer with applyReducerHash and add it to reducers list
addReducer((state, action) => applyReducerHash(reducersHash, state, action));
```

##### middlewares
There is log reducer active if you are in development mode `process.env.NODE_ENV` is set to `development` so to add any
new middlewares, just push them to `middlewares` array and create store with these middlewares.
```javascript 1.8
import { createStore } from 'redux';
import { middlewares, rootReducer } from '@patternfly/simple-redux';
import ReduxThunk from 'redux-thunk';

middlewares.push(ReduxThunk);
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
```

#### Contribution

1. Fork this repository

2. Pull your fork
```bash
> git pull git@github.com:${YOUR_NAME}/patternfly-react.git
```

3. Set up remote
```bash
> git remote add upstream https://github.com/patternfly/patternfly-react.git
```

4. Install depenencies
```bash
yarn install
```

5. Run storybook
````bash
yarn start
````

6. Make some changes and create Pull request