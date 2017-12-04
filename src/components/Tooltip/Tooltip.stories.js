import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Button, OverlayTrigger, Tooltip } from '../../index';

const stories = storiesOf('Tooltip', module);
const description = (
  <p>
    This component is based on React Bootstrap Tooltip component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#tooltips">
      React Bootstrap Docs
    </a>{' '}
    for complete Tooltip component documentation.
  </p>
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Tooltip',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#tooltip',
    description: description,
  }),
);

stories.addWithInfo('Tooltip', () => {
  const tooltip = (
    <Tooltip id="tooltip">
      <div
        dangerouslySetInnerHTML={{
          __html: text(
            'Tooltip',
            '<strong>Holy guacamole!</strong> Check this info.',
          ),
        }}
      />
    </Tooltip>
  );
  const placement = select(
    'Placement',
    ['top', 'bottom', 'left', 'right'],
    'right',
  );
  const trigger = select(
    'Trigger',
    ['hover', 'focus', 'hover focus', 'click'],
    'hover focus',
  );
  const rootClose = boolean('Root Close', false);

  return (
    <div style={{ textAlign: 'center' }}>
      <OverlayTrigger
        overlay={tooltip}
        placement={placement}
        trigger={trigger.split(' ')}
        rootClose={rootClose}
      >
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>
    </div>
  );
});
