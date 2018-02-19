import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

import {
  MockModalManager,
  basicExampleSource
} from './__mocks__/mockModalManager';
import { Modal } from '../../index';

const stories = storiesOf('Modal Overlay', module);

stories.add(
  'Modal',
  withInfo({
    source: false,
    propTables: [
      Modal,
      Modal.CloseButton,
      Modal.Header,
      Modal.Body,
      Modal.Footer
    ],
    propTablesExclude: [MockModalManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{basicExampleSource}</pre>
      </div>
    )
  })(() => {
    const story = <MockModalManager />;
    return inlineTemplate({
      title: 'Modal Example',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS
      }modal-overlay/`,
      reactBootstrapDocumentationLink: `${
        DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT
      }modal/`,
      story
    });
  })
);
