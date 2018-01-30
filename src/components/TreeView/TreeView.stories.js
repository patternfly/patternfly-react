import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { TreeView } from './index';
import { data } from './__mocks__/data';

const stories = storiesOf('TreeView', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'TreeView',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '#bootstrap-tree-view'
  })
);

stories.addWithInfo('TreeView', `TreeView usage example`, () => (
  <TreeView data={data} />
));
