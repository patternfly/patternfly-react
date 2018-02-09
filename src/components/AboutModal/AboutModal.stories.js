import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';

import {
  AboutModal,
  AboutModalVersions,
  AboutModalVersionItem
} from '../../index';

import {
  MockAboutModal,
  MockAboutModalSource
} from './__mocks__/mockAboutModal';

const stories = storiesOf('About Modal', module);

stories.addDecorator(
  defaultTemplate({
    title: 'About Modal',
    documentationLink:
      'http://www.patternfly.org/pattern-library/communication/about-modal/'
  })
);

stories.add(
  'AboutModal',
  withInfo({
    source: false,
    propTables: [AboutModal, AboutModalVersions, AboutModalVersionItem],
    propTablesExclude: [MockAboutModal],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockAboutModalSource}</pre>
      </div>
    )
  })(() => <MockAboutModal />)
);
