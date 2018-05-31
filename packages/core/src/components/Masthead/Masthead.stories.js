import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { MenuItem } from '../../index';
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

stories.addDecorator(withKnobs);

const handleNavToggle = e => {
  action('nav toggle click')();
};

const handleTitleClick = e => {
  action('title click')();
};

stories.add(
  'Masthead',
  withInfo({
    propTablesExclude: [MenuItem]
  })(() => (
    <Masthead
      iconImg={pfLogo}
      titleImg={pfBrand}
      title="Patternfly React"
      navToggle={boolean('Nav Toggle', true)}
      onTitleClick={handleTitleClick}
      onNavToggleClick={handleNavToggle}
    >
      <Masthead.Collapse>
        <Masthead.Dropdown
          id="app-help-dropdown"
          title={<span title="Help" className="pficon pficon-help" />}
        >
          <MenuItem eventKey="1">Help</MenuItem>
          <MenuItem eventKey="2">About</MenuItem>
        </Masthead.Dropdown>
        <Masthead.Dropdown
          id="app-user-dropdown"
          title={
            <span>
              <span title="Help" className="pficon pficon-user" />
              <span className="dropdown-title"> Brian Johnson</span>
            </span>
          }
        >
          <MenuItem eventKey="1">User Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </Masthead.Dropdown>
      </Masthead.Collapse>
    </Masthead>
  ))
);
