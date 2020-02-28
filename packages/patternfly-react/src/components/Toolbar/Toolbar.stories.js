import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';

import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Toolbar, ToolbarResults, ToolbarRightContent, ToolbarFind, ToolbarViewSelector } from '../../index';

import { MockToolbarExample, mockToolbarExampleSource } from './__mocks__/mockToolbarExample';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Toolbar`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Toolbar',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}toolbar/`
  })
);

stories.add(
  'Toolbar',
  withInfo({
    source: false,
    propTables: [Toolbar, ToolbarResults, ToolbarRightContent, ToolbarFind, ToolbarViewSelector],
    propTablesExclude: [MockToolbarExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockToolbarExampleSource}</pre>
      </div>
    )
  })(() => {
    const logAction = decorateAction([args => args]);
    return (
      <MockToolbarExample
        onFiltersChanged={logAction('filterChanged')}
        onSortChanged={logAction('sortChanged')}
        onViewChanged={logAction('viewChanged')}
        onActionPerformed={logAction('actionPerformed')}
        onFindAction={logAction('findAction')}
      />
    );
  })
);
