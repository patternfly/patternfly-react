import React from 'react';
import { AppConnected } from './utils/redux-helpers';
import { ButtonPlus, Counter } from './utils/ReduxApp.stories';
import { withInfo } from '@storybook/addon-info';
import { templateWithoutPatternfly } from 'storybook/decorators/storyTemplates';

const descriptionCode = `import { addReducer, applyReducerHash, rootReducer, middlewares } from '@patternfly/simple-redux';
import { createStore } from 'redux';

//create reducers from object literals 
const basicReducers = {
  'onAddAction: state => ({ ...state, clicks: state.clicks + 1 })
};

//add these reducers to rootReducer via applyReducerHash
addReducer((state, action) => applyReducerHash(basicReducers, state, action));

//create new redux store from rootReducer
const store = createStore(rootReducer, { clicks: 0 }, applyMiddleware(...middlewares));
`;

export default stories => {
  stories.add(
    'Basic usage',
    withInfo()(() => {
      const story = (
        <AppConnected>
          <ButtonPlus />
          <Counter />
        </AppConnected>
      );
      return templateWithoutPatternfly({
        title: 'Basic usage',
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
