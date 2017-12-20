import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';

import {
  MockModalManager,
  basicExampleSource
} from './__mocks__/mockModalManager';

import {
  MockAboutModalManager,
  aboutExampleSource
} from './__mocks__/mockAboutModalManager';

const stories = storiesOf('Modal Overlay', module);

const description = (
  <p>
    This component is based on React Bootstrap Modal component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#modals">
      React Bootstrap Docs
    </a>{' '}
    for complete Modal component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Modal Overlay',
    documentationLink:
      'http://www.patternfly.org/pattern-library/forms-and-controls/modal-overlay/',
    description: description
  })
);

stories.add(
  'Basic example',
  withInfo({
    source: false,
    propTablesExclude: [MockModalManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{basicExampleSource}</pre>
      </div>
    )
  })(() => <MockModalManager />)
);

stories.add(
  'About Modal',
  withInfo({
    source: false,
    propTablesExclude: [MockAboutModalManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{aboutExampleSource}</pre>
      </div>
    )
  })(() => <MockAboutModalManager />)
);
