import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { DropdownButton, MenuItem } from '../../index';
import { Masthead } from './index';

import { name } from '../../../package.json';
import pfLogo from 'storybook/img/logo-alt.svg';
import pfBrand from 'storybook/img/brand-alt.svg';

import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
  storybookPackageName,
  DOCUMENTATION_URL,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';

const stories = storiesOf(
  `${storybookPackageName(name)}/${
    STORYBOOK_CATEGORY.APPLICATION_FRAMEWORK
  }/Masthead`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'Masthead',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_APPLICATION_FRAMEWORK
    }/masthead/`
  })
);

const handleNavToggle = e => {
  action('nav toggle click')();
};

const handleTitleClick = e => {
  action('title click')();
};

stories.add(
  'Masthead',
  withInfo({
    propTablesExclude: [DropdownButton, MenuItem]
  })(() => (
    <Masthead
      iconImg={pfLogo}
      titleImg={pfBrand}
      title="Patternfly React"
      onTitleClick={handleTitleClick}
      onNavToggleClick={handleNavToggle}
    >
      <li className="dropdown">
        <DropdownButton
          id="app-help-dropdown"
          className="dropdown-toggle nav-item-iconic"
          bsStyle="link"
          title={<span title="Help" className="pficon pficon-help" />}
        >
          <MenuItem eventKey="1">Help</MenuItem>
          <MenuItem eventKey="2">About</MenuItem>
        </DropdownButton>
      </li>
      <li className="dropdown">
        <DropdownButton
          id="app-user-dropdown"
          className="dropdown-toggle nav-item-iconic"
          bsStyle="link"
          title={
            <span>
              <span title="Help" className="pficon pficon-user" />
              <span className="dropdown-title"> Brian Johnson</span>
            </span>
          }
        >
          <MenuItem eventKey="1">Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </DropdownButton>
      </li>
    </Masthead>
  ))
);
