import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import TreeViewExample from './TreeViewExample';

const stories = storiesOf(`${storybookPackageName(name)}/Wooden Tree View`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Wooden Tree View',
    description: (
      <div>
        This is a Tree View component to display trees and hierarchical data using React Wooden Tree.
        The tree uses the <a href="https://www.npmjs.com/package/react-wooden-tree">https://www.npmjs.com/package/react-wooden-tree</a> component.
      </div>
    )
  })
);

stories.add(
  'Wooden Tree View',
  withInfo({
    source: false,
    propTables: [TreeViewExample]
  })(() => (
    <div style={{ display: 'flex' }}>
      <TreeViewExample />
    </div>
  ))
);
