import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { TreeView } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Tree View`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Catalog Tile',
    description: 'This is a Tree View component to display trees and hierarchical data.'
  })
);

stories.add(
  'Tree View',
  withInfo({
    source: false,
    propTables: [TreeView]
  })(() => (
    <div style={{ display: 'flex' }}>
      <TreeView />
    </div>
  ))
);
