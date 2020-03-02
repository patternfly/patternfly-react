import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Label, DisposableLabel, RemoveButton, CompoundLabel } from './index';
import { MockCompoundLabel, mockCompoundLabelSource } from './__mocks__/mockCompoundLabel';
import { MockLabelRemove, mockLabelRemoveSource } from './__mocks__/mockLabelExamples';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Label`, module);

stories.add(
  'Label',
  withInfo()(() => {
    const story = (
      <div>
        <Label bsStyle="default">Default</Label> <Label bsStyle="primary">Primary</Label>{' '}
        <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{' '}
        <Label bsStyle="warning">Warning</Label> <Label bsStyle="danger">Danger</Label>
      </div>
    );
    return inlineTemplate({
      title: 'Label',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#labels`,
      story,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}label/`
    });
  })
);

stories.add(
  'Label with Remove',
  withInfo({
    source: false,
    propTables: [DisposableLabel, RemoveButton],
    propTablesExclude: [MockLabelRemove],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockLabelRemoveSource}</pre>
      </div>
    )
  })(() => {
    const story = <MockLabelRemove />;
    return inlineTemplate({
      title: 'Label with Remove',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#labels`,
      story,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}label/`
    });
  })
);

stories.add(
  'Compound Label',
  withInfo({
    source: false,
    propTables: [CompoundLabel],
    propTablesExclude: [MockCompoundLabel],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockCompoundLabelSource}</pre>
      </div>
    )
  })(() => {
    const story = <MockCompoundLabel />;
    return inlineTemplate({
      title: 'Compound Label',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#labels`,
      story,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}label/`,
      description: (
        <div>
          Compound label helps to visualize key/value or key/n:value component. Delete - Clicking on “X” deletes the
          compound label. Tooltip - When a compound label is truncated, we use labels to show the text.
        </div>
      )
    });
  })
);
