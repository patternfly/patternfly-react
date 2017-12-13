import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Label } from './index';

const stories = storiesOf('Label', module);
const description = (
  <p>
    This component is based on React Bootstrap Label component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#labels">
      React Bootstrap Docs
    </a>{' '}
    for complete Label component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Label',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#labels',
    description: description,
  }),
);

stories.addWithInfo('Label', () => {
  return (
    <div>
      <Label bsStyle="default">Default</Label>{' '}
      <Label bsStyle="primary">Primary</Label>{' '}
      <Label bsStyle="success">Success</Label>{' '}
      <Label bsStyle="info">Info</Label>{' '}
      <Label bsStyle="warning">Warning</Label>{' '}
      <Label bsStyle="danger">Danger</Label>
    </div>
  );
});
