import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { HintBlock } from './index';
import { name } from '../../../package.json';
import { defaultTemplate } from '../../../../../../storybook/decorators/storyTemplates';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/HintBlock`, module);

const description = (
  <div>
    The <b>Hint Block</b> pattern is similar to an informational inline notification, but with additional emphasis (blue
    highlight). The intention is to use this for specific use cases involving new users, new features, or cases where
    extra guidance may assist in successfully completing a flow. The hint pattern involves a one-step reminder,
    explanation, or call to action. Potential Use Cases
    <ul>
      <li>
        To provide guidance to <b>new users</b> who do not know how to use the application
      </li>
      <li>
        To provide contextual help on using <b>new features</b>
      </li>
      <li>
        To provide hints on a flow/ the <b>next steps</b> a user should be thinking about.
      </li>
    </ul>
  </div>
);

stories.addDecorator(
  defaultTemplate({
    title: 'HintBlock',
    description
  })
);

stories.add(
  'HintBlock',
  withInfo()(() => (
    <HintBlock
      title="Some Title"
      onClose={action('Close')}
      body="Something introductory. Some body text explaining the feature. Some body text explaining the feature. Some body text explaining the feature. Some body text explaining the feature. Some body text explaining the feature. Some body text explaining the feature."
      buttonContent="Optional Action"
      onButtonClick={action('Button Click')}
    />
  ))
);
