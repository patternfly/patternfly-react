import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Button } from '../Button';
import { MenuItem } from '../MenuItem';
import { DropdownKebab } from './index';

const stories = storiesOf('DropdownKebab', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Kebab Dropdown',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#kebabs',
  }),
);

stories.addWithInfo(
  'DropdownKebab',
  `pullRight prop is used to align the dropdown to the right.`,
  () => (
    <div>
      <Button bsStyle="primary">Some Button</Button>{' '}
      <Button>Another Button</Button>
      <DropdownKebab id="myKebab" pullRight={boolean('Right aligned', false)}>
        <MenuItem>Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
      </DropdownKebab>
    </div>
  ),
);
