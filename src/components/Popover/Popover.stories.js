import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Button, OverlayTrigger, Popover } from '../../index';

const stories = storiesOf('Popover', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Popover',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#popover`,
    reactBootstrapDocumentationLink: `${
      DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT
    }popovers/`
  })
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
          '<strong>Holy guacamole!</strong> Check this info.'
        )
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
    'right'
  );
  const trigger = select(
    'Trigger',
    ['hover', 'focus', 'hover focus', 'click'],
    'click'
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
