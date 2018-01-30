import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Badge } from './index';

const stories = storiesOf('Cards', module);

// stories.addDecorator(
//   defaultTemplate({
//     title: 'Label',
//     documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '#labels',
//     reactBootstrapDocumentationLink:
//       DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT + 'label/'
//   })
// );
stories.addDecorator(
  defaultTemplate({
    title: 'Cards',
    documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'base-card/'
  })
);

stories.addWithInfo('Cards', '', () => (
  <a href="#">
    Inbox <Badge>42</Badge>
  </a>
));
