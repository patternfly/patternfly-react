import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Label, DisposableLabel, RemoveButton } from './index';
import {
  MockLabelRemove,
  mockLabelRemoveSource
} from './__mocks__/mockLabelExamples';

const stories = storiesOf('Label', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Label',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#labels`,
    reactBootstrapDocumentationLink: `${
      DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT
    }label/`
  })
);

stories.addWithInfo('Label', () => (
  <div>
    <Label bsStyle="default">Default</Label>{' '}
    <Label bsStyle="primary">Primary</Label>{' '}
    <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{' '}
    <Label bsStyle="warning">Warning</Label>{' '}
    <Label bsStyle="danger">Danger</Label>
  </div>
));

stories.addWithInfo('Label with remove', () => <MockLabelRemove />, {
  source: false,
  propTables: [DisposableLabel, RemoveButton],
  propTablesExclude: [MockLabelRemove],
  text: (
    <div>
      <h1>Story Source</h1>
      <pre>{mockLabelRemoveSource}</pre>
    </div>
  )
});
