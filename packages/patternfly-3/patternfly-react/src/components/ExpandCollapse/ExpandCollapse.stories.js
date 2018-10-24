import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY, DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { ExpandCollapse } from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Expand Collapse`,
  module
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Expand Collapse',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}expand-collapse-section/`
  })
);

stories.add(
  'ExpandCollapse',
  withInfo(`This is the ExpandCollapse component.`)(() => (
    <div style={{ width: '600px', border: '1px solid lightgray' }}>
      <ExpandCollapse
        align={select('align', ExpandCollapse.ALIGN_TYPES)}
        bordered={boolean('bordered', true)}
        textExpanded={text('textExpanded', 'Hide Advanced Options')}
        textCollapsed={text('textCollapsed', 'Show Advanced Options')}
        expanded={boolean('expanded', false)}
      >
        <p>Well done! The component takes 100% width by default and aligns the link to the left or center.</p>
        <p>And other text comes here.</p>
      </ExpandCollapse>
    </div>
  ))
);
