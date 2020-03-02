import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Icon } from '../Icon';
import { MenuItem } from '../../index';
import { Masthead } from './index';

import { name } from '../../../package.json';

import { MockHorizontalMasthead, mockHorizontalMastheadSource } from './__mocks__/mockHorizontalMasthead';
import pfLogo from 'storybook/img/logo-alt.svg';
import pfBrand from 'storybook/img/brand-alt.svg';

import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.APPLICATION_FRAMEWORK}/Masthead`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Masthead',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_APPLICATION_FRAMEWORK}/masthead/`
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
  'Vertical Menu',
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
        <Masthead.Dropdown id="app-help-dropdown" noCaret title={<span title="Help" className="pficon pficon-help" />}>
          <MenuItem eventKey="1">Help</MenuItem>
          <MenuItem eventKey="2">About</MenuItem>
        </Masthead.Dropdown>
        <Masthead.Dropdown
          id="app-user-dropdown"
          title={[
            <Icon type="pf" name="user" key="user-icon" />,
            <span className="dropdown-title" key="dropdown-title">
              Brian Johnson
            </span>
          ]}
        >
          <MenuItem eventKey="1">User Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </Masthead.Dropdown>
      </Masthead.Collapse>
    </Masthead>
  ))
);

stories.add(
  'Horizontal Menu',
  withInfo({
    source: false,
    propTables: [Masthead, Masthead.Collapse, Masthead.Dropdown],
    propTablesExclude: [MockHorizontalMasthead],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockHorizontalMastheadSource}</pre>
      </div>
    )
  })(() => <MockHorizontalMasthead />)
);
