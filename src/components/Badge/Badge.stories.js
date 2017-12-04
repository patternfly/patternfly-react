import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Badge } from './index';

const stories = storiesOf('Badges', module);

const description = (
  <p>
    This component is based on React Bootstrap Badge component. Badges easily
    highlight new or unread items. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#badges">
      React Bootstrap Docs
    </a>{' '}
    for complete Badge component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Badges',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#badges',
    description: description,
  }),
);

stories.addWithInfo('Badges', '', () => (
  <a href="#">
    Inbox <Badge>42</Badge>
  </a>
));
