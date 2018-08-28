import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import ApplicationLauncher from '../ApplicationLauncher';
import ApplicationLauncherItem from '../ApplicationLauncherItem';

const handleClick = e => {
  e.preventDefault();
  action('app clicked!')();
};

const NavApplicationLauncherStory = stories => {
  stories.addWithInfo('Launcher', '', () => {
    const type = select('Launcher Type', { true: 'Grid', false: 'List' }, 'true');
    const iconBool = boolean('Icons', true);

    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <ApplicationLauncher grid={type === 'true'} tooltipPlacement="left" open>
              <ApplicationLauncherItem
                key="app1"
                icon="storage-domain"
                title="Recteque"
                tooltip="Tooltip!"
                tooltipPlacement="left"
                onClick={handleClick}
                noIcons={!iconBool}
              />
              <ApplicationLauncherItem
                key="app2"
                icon="virtual-machine"
                title="No Tooltip"
                onClick={handleClick}
                noIcons={!iconBool}
              />
              <ApplicationLauncherItem
                key="app3"
                icon="domain"
                title="Lorem"
                tooltip="Tooltip!"
                tooltipPlacement="left"
                onClick={handleClick}
                noIcons={!iconBool}
              />
              <ApplicationLauncherItem
                key="app4"
                icon="home"
                title="Home"
                tooltip="Tooltip!"
                tooltipPlacement="left"
                onClick={handleClick}
                noIcons={!iconBool}
              />
            </ApplicationLauncher>
          </ul>
        </nav>
      </nav>
    );
    return inlineTemplate({
      title: 'ApplicationLauncher',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_APPLICATION_FRAMEWORK}launcher/`,
      story
    });
  });
};

export default NavApplicationLauncherStory;
