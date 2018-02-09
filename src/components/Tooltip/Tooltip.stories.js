import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Button, OverlayTrigger, Tooltip } from '../../index';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Tooltip',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#tooltip`,
    reactBootstrapDocumentationLink: `${
      DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT
    }tooltips/`
  })
);

stories.addWithInfo('Tooltip', () => {
  const tooltip = (
    <Tooltip id="tooltip">
      <div
        dangerouslySetInnerHTML={{
          __html: text(
            'Tooltip',
            '<strong>Holy guacamole!</strong> Check this info.'
          )
        }}
      />
    </Tooltip>
  );
  const placement = select(
    'Placement',
    ['top', 'bottom', 'left', 'right'],
    'right'
  );
  const trigger = select(
    'Trigger',
    ['hover', 'focus', 'hover focus', 'click'],
    'hover focus'
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
