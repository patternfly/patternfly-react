import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Button, OverlayTrigger, Popover } from '../../index';

const stories = storiesOf('Popover', module);
const description = (
  <p>
    This component is based on React Bootstrap Popover component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#popovers">
      React Bootstrap Docs
    </a>{' '}
    for complete Popover component documentation.
  </p>
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Popover',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#popover',
    description: description,
  }),
);

stories.addWithInfo('Popover', () => {
  const title = (
    <div
      dangerouslySetInnerHTML={{ __html: text('Popover Title', 'Popover') }}
    />
  );
  const content = (
    <div
      dangerouslySetInnerHTML={{
        __html: text(
          'Popover Content',
          '<strong>Holy guacamole!</strong> Check this info.',
        ),
      }}
    />
  );
  const popover = (
    <Popover id="popover" title={title}>
      {content}
    </Popover>
  );
  const placement = select(
    'Placement',
    ['top', 'bottom', 'left', 'right'],
    'right',
  );
  const trigger = select(
    'Trigger',
    ['hover', 'focus', 'hover focus', 'click'],
    'click',
  );
  const rootClose = boolean('Root Close', true);

  return (
    <div style={{ textAlign: 'center' }}>
      <OverlayTrigger
        overlay={popover}
        placement={placement}
        trigger={trigger.split(' ')}
        rootClose={rootClose}
      >
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>
    </div>
  );
});
