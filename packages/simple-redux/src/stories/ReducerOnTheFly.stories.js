/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AppConnected } from './utils/redux-helpers';
import { ButtonPlus, Counter, ButtonMinus } from './utils/ReduxApp.stories';
import { withInfo } from '@storybook/addon-info';
import { templateWithoutPatternfly } from 'storybook/decorators/storyTemplates';

const ON_MINUS_ACTION = 'onMinusAction';
import { addReducer, applyReducerHash } from '../index';

const descriptionCode = `import { addReducer, applyReducerHash } from '@patternfly/simple-redux';

//some action constant
const ON_MINUS_ACTION = 'onMinusAction';

//define new reducer over action constant with default state
const reducersHash = {
  [ON_MINUS_ACTION]: (state = { clicks: 0 }) => ({ ...state, clicks: state.clicks - 1 })
};

//add this new reducer to root reducer by calling function addReducer
addReducer((state, action) =>
  applyReducerHash(reducersHash, state, action)
);`;

export default stories => {
  stories.add(
    'Reducer on the fly',
    withInfo()(() => {
      addReducer((reduxState, reduxAction) =>
        applyReducerHash(
          {
            [ON_MINUS_ACTION]: (state = { clicks: 0 }) => ({
              ...state,
              clicks: state.clicks - 1
            })
          },
          reduxState,
          reduxAction
        )
      );
      const story = (
        <AppConnected>
          <ButtonPlus />
          <ButtonMinus />
          <Counter />
        </AppConnected>
      );
      return templateWithoutPatternfly({
        title: 'Reducer on the fly',
        story,
        documentationLink:
          'https://github.com/patternfly/patternfly-react/blob/master/src/simple-redux/README.md',
        description: (
          <div>
            <p>
              Once app is running you can add new reducer on fly by calling
              function <code>addReducer</code>.
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
