import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

import {
  MockModalManager,
  basicExampleSource
} from './__mocks__/mockModalManager';

import {
  MockAboutModalManager,
  aboutExampleSource
} from './__mocks__/mockAboutModalManager';

const stories = storiesOf('Modal Overlay', module);

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
  })(() => {
    let story = <MockModalManager />;
    return inlineTemplate({
      title: 'Basic Example',
      documentationLink:
        DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS + 'modal-overlay/',
      reactBootstrapDocumentationLink:
        DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT + 'modal/',
      story: story
    });
  })
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
  })(() => {
    let story = <MockAboutModalManager />;
    return inlineTemplate({
      title: 'About Modal',
      documentationLink:
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION + 'about-modal/',
      reactBootstrapDocumentationLink:
        DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT + 'modal/',
      story: story
    });
  })
);
