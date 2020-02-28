import Dropdown from '../Dropdown/Dropdown';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { MenuItem } from './index';

import { name } from '../../../package.json';

import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Menu Item`, module);

const description = (
  <p>
    This component is based on React Bootstrap MenuItem component. This component represents a menu item in a dropdown.
    See <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}dropdowns/#menu-items`}>React Bootstrap Docs</a> for
    complete MenuItem component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'MenuItem',
    description
  })
);

stories.add(
  'MenuItem',
  withInfo()(() => (
    <div>
      <Dropdown.Menu style={{ display: 'block' }}>
        <MenuItem header>Header</MenuItem>
        <MenuItem>link</MenuItem>
        <MenuItem divider />
        <MenuItem header>Header</MenuItem>
        <MenuItem>link</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem title="See? I have a title.">link with title</MenuItem>
        <MenuItem eventKey={1} href="#someHref" onSelect={eventKey => alert(`Alert from menu item ${eventKey}`)}>
          link that alerts
        </MenuItem>
      </Dropdown.Menu>
    </div>
  ))
);
