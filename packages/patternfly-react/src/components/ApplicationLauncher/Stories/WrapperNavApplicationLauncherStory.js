import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import StatefulApplicationLauncherWrapper from '../Wrappers/StatefulApplicationLauncherWrapper';

const handleClick = e => {
  e.preventDefault();
  action('app clicked!')();
};

const Apps = [
  {
    title: 'No Tooltip',
    icon: 'home',
    onClick: e => {
      handleClick(e);
    }
  },
  {
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: e => {
      handleClick(e);
    }
  },
  {
    title: 'Lemon',
    icon: 'storage-domain',
    tooltip: 'Tooltip!',
    onClick: e => {
      handleClick(e);
    }
  },
  {
    title: 'Domain',
    icon: 'domain',
    tooltip: 'Tooltip!',
    onClick: e => {
      handleClick(e);
    }
  }
];

const WrapperNavApplicationLauncherStory = stories => {
  stories.addWithInfo('Stateful Launcher', '', () => {
    const type = select('Launcher Type', { true: 'Grid', false: 'List' }, 'true');
    const iconBool = boolean('Icons', true);

    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <StatefulApplicationLauncherWrapper
              apps={Apps}
              noIcons={!iconBool}
              grid={type === 'true'}
              tooltipPlacement="left"
            />
          </ul>
        </nav>
      </nav>
    );
    return inlineTemplate({
      title: 'WrapperApplicationLauncher',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_APPLICATION_FRAMEWORK}launcher/`,
      story
    });
  });
};

export default WrapperNavApplicationLauncherStory;
