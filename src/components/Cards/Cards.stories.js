import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card } from './index';
import { Icon } from '../Icon';
import { Button } from '../Button';

const stories = storiesOf('Cards', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Card',
    documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'base-card/'
  })
);

stories.addWithInfo('Card', () => {
  return (
    <Card>
      <Card.Title>
        <span>
          <Icon name="shield" /> Card Title
        </span>
      </Card.Title>
      <Card.Body>This is the Card component.</Card.Body>
    </Card>
  );
});
