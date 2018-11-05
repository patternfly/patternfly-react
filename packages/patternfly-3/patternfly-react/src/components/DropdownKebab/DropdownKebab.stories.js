import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Button } from '../Button';
import { MenuItem } from '../MenuItem';
import { DropdownKebab } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Dropdown Kebab`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Kebab Dropdown',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#kebabs`
  })
);

stories.add(
  'DropdownKebab',
  withInfo(`pullRight prop is used to align the dropdown to the right.`)(() => (
    <div>
      <Button bsStyle="primary">Some Button</Button> <Button>Another Button</Button>
      <DropdownKebab id="myKebab" pullRight={boolean('Right aligned', false)} title={text('Title', 'Kebab title')}>
        <MenuItem>Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
      </DropdownKebab>
    </div>
  ))
);
