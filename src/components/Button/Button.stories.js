import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Button } from './index';

const stories = storiesOf('Button', module);

const description = (
  <p>
    This component is based on React Bootstrap Button component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#buttons">
      React Bootstrap Docs
    </a>{' '}
    for complete Button component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Button',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#buttons',
    description: description,
  }),
);

stories.addWithInfo('Button', '', () => (
  <div>
    <p>
      <Button>Default Button</Button>{' '}
      <Button bsStyle="primary">Primary Button</Button>{' '}
      <Button bsStyle="danger">Danger Button</Button>{' '}
      <Button bsStyle="link">Link Button</Button>
    </p>
    <p>
      <Button bsSize="large">Large Button</Button>{' '}
      <Button>Default Button</Button>{' '}
      <Button bsSize="small">Small Button</Button>{' '}
      <Button bsSize="xsmall">Extra Small Button</Button>
    </p>
  </div>
));
