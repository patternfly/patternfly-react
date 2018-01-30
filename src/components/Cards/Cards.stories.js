import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card } from './index';

const stories = storiesOf('Cards', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Card',
    documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS
  })
);

stories.addWithInfo('Card', () => {
  return (
    <Card>
      <Card.Title>Card Title</Card.Title>
      <Card.Body>This is the Card component.</Card.Body>
    </Card>
  );
});
