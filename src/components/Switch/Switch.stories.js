import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { Switch } from './index';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

const stories = storiesOf('Widgets', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('Switch', '', () => {
  const bsSize = select('Size', Switch.SWITCH_BS_SIZES, 'normal');
  const onColor = select('On Color', Switch.SWITCH_COLORS, 'primary');
  const offColor = select('Off Color', Switch.SWITCH_COLORS, 'default');

  const props = { bsSize, title: bsSize, id: 'bsSize-example' };
  if (onColor) props.onColor = onColor;
  if (offColor) props.offColor = offColor;

  const story = (
    <div>
      <Switch
        {...props}
        onChange={action('onChange')}
        animate={boolean('animate', true)}
        disabled={boolean('disabled', false)}
        readonly={boolean('readonly', false)}
        inverse={boolean('inverse', false)}
        tristate={boolean('tristate', false)}
      />
    </div>
  );
  return inlineTemplate({
    title: 'Switch',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS
    }#bootstrap-switch`,
    reactBootstrapDocumentationLink:
      'https://www.npmjs.com/package/react-bootstrap-switch',
    story
  });
});
