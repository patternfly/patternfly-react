import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Badge } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Badges`, module);

const description = (
  <p>
    This component is based on React Bootstrap Badge component. Badges easily highlight new or unread items. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}badge/`}>React Bootstrap Docs</a> for complete Badge
    component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Badges',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#badges`,
    description
  })
);

stories.add(
  'Badges',
  withInfo()(() => (
    <a href="#">
      Inbox <Badge>42</Badge>
    </a>
  ))
);
