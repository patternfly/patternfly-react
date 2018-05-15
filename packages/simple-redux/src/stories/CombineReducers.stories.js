import React from 'react';
import { AppConnected } from './utils/redux-helpers';
import { ButtonPlus, Counter } from './utils/ReduxApp.stories';
import { withInfo } from '@storybook/addon-info';
import { templateWithoutPatternfly } from 'storybook/decorators/storyTemplates';
import {
  addReducer,
  applyReducerHash,
  combineReducersWithState
} from '../index';

const descriptionCode = `import { addReducer, applyReducerHash, combineReducersWithState } from '@patternfly/simple-redux';
import { combineReducers } from 'redux';

const simpleReducer = (state = {}, action) => {
  if (action.type === 'something') {
    return { ...state, something: 'something' };
  }
  return state;
};

//create reducers from object literals 
const hashReducer = {
  'onAddAction': state => ({ ...state, another: 'another' })
};

//add these reducers to rootReducer via combineReducersWithState
addReducer(combineReducersWithState({ simpleReducer, hashReducer }));
`;

export default stories => {
  stories.add(
    'Combine reducers',
    withInfo()(() => {
      const simpleReducer = (state = {}, action) => {
        if (action.type === 'something') {
          return { ...state, something: 'something' };
        }
        return state;
      };

      const hashReducer = (state = {}, action) =>
        applyReducerHash(
          {
            another: (reduxState = {}) => ({
              ...reduxState,
              another: 'another'
            })
          },
          state,
          action
        );

      addReducer(combineReducersWithState({ simpleReducer, hashReducer }));

      const story = (
        <AppConnected>
          <ButtonPlus />
          <Counter />
        </AppConnected>
      );
      return templateWithoutPatternfly({
        title: 'Combine reducers',
        story,
        documentationLink:
          'https://github.com/patternfly/patternfly-react/blob/master/src/simple-redux/README.md',
        description: (
          <div>
            <p>
              To use helpers from this package, simply create new reducers
              (either with switch statements or with{' '}
              <code>applyReducerHash</code>).
            </p>
            <p>
              Then create new store by passing rootReducer into{' '}
              <code>createStore</code> function from redux package.
            </p>
            <pre className="language-JS">
              <code className="language-JS">{descriptionCode}</code>
            </pre>
          </div>
        )
      });
    })
  );
};
