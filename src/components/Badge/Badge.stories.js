import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Badge } from './index';

const stories = storiesOf('Badges', module);

const description = (
  <p>
    This component is based on React Bootstrap Badge component. Badges easily
    highlight new or unread items. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}badge/`}>
      React Bootstrap Docs
    </a>{' '}
    for complete Badge component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Badges',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#badges`,
    description
  })
);

stories.addWithInfo('Badges', '', () => (
  <a href="#">
    Inbox <Badge>42</Badge>
  </a>
));
