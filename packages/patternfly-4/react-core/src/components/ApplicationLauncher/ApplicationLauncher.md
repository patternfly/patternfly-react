---
title: 'Application launcher'
cssPrefix: 'pf-c-app-launcher'
propComponents: ['ApplicationLauncher', 'ApplicationLauncherItem']
typescript: true 
---
Note: Application launcher is built on Dropdown, for extended API go to [`Dropdown`](/components/dropdown/) documentation.
To add a tooltip, use the `tooltip` prop and optionally add more tooltip props by using `tooltipProps`. For more tooltip information go to [`Tooltip`](/components/tooltip/).

import { ApplicationLauncher, ApplicationLauncherIcon, ApplicationLauncherText, ApplicationLauncherItem, ApplicationLauncherGroup, ApplicationLauncherSeparator } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import pfIcon from './examples/pf-logo-small.svg';

## Simple application launcher
```js
import React from 'react';
import { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';

class SimpleApplicationLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const appLauncherItems = [
      <ApplicationLauncherItem key="application_1a" href="#">
        Application 1 (anchor link)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="application_2a" onClick={() => alert('Clicked item 2')}>
        Application 2 (div with onClick)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="application_3a" onClick={() => alert('Clicked item 3')}>
        Application 3 (div with onClick)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="disabled_application_4a" isDisabled>
        Unavailable Application
      </ApplicationLauncherItem>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        items={appLauncherItems}
      />
    );
  }
}
```

## Application launcher with tooltip
```js
import React from 'react';
import { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';

class TooltipApplicationLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const appLauncherItems = [
      <ApplicationLauncherItem 
        key="application_1b" 
        href="#" 
        tooltip={<div>Launch Application 1</div>}
      >
        Application 1 (anchor link)
      </ApplicationLauncherItem>
      ,
      <ApplicationLauncherItem 
        key="application_2b" 
        tooltip={<div>Launch Application 2</div>} 
        tooltipProps={{ position: 'right' }} 
        onClick={() => alert('Clicked item 2')}
      >
        Application 2 (onClick)
      </ApplicationLauncherItem>
      ,
      <ApplicationLauncherItem 
        key="application_3b" 
        tooltip={<div>Launch Application 3</div>} 
        tooltipProps={{ position: 'bottom' }} 
        onClick={() => alert('Clicked item 3')}
      >
        Application 3 (onClick)
      </ApplicationLauncherItem>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        items={appLauncherItems}
      />
    );
  }
}
```

## App launcher w/ sections and icons
```js
import React from 'react';
import { ApplicationLauncher, ApplicationLauncherIcon, ApplicationLauncherText, ApplicationLauncherItem, ApplicationLauncherGroup, ApplicationLauncherSeparator } from '@patternfly/react-core';
import pfIcon from './examples/pf-logo-small.svg';

class ApplicationLauncherSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const icon = <img src={pfIcon} />;
    const appLauncherItems = [
      <ApplicationLauncherGroup key="group 1c">
        <ApplicationLauncherItem key="group 1a" icon={icon}>
          Item without group title
        </ApplicationLauncherItem>
        <ApplicationLauncherSeparator key="separator" />
      </ApplicationLauncherGroup>,
      <ApplicationLauncherGroup label="Group 2" key="group 2c">
        <ApplicationLauncherItem key="group 2a" isExternal icon={icon}>Group 2 div</ApplicationLauncherItem>
        <ApplicationLauncherItem key="group 2b" isExternal href="#" icon={icon}>Group 2 anchor link</ApplicationLauncherItem>
        <ApplicationLauncherSeparator key="separator" />
      </ApplicationLauncherGroup>,
      <ApplicationLauncherGroup label="Group 3" key="group 3c">
        <ApplicationLauncherItem key="group 3a" isExternal icon={icon}>Group 3 div</ApplicationLauncherItem>
        <ApplicationLauncherItem key="group 3b" isExternal href="#" icon={icon}>Group 3 anchor link</ApplicationLauncherItem>
      </ApplicationLauncherGroup>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        items={appLauncherItems}
        isGrouped
      />
    );
  }
}
```

## Application launcher w/ custom icon
```js
import React from 'react';
import { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';

class ApplicationLauncheIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const appLauncherItems = [
      <ApplicationLauncherItem key="application_1a" href="#">
        Application 1 (anchor link)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="application_2a" onClick={() => alert('Clicked item 2')}>
        Application 2 (div with onClick)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="application_3a" onClick={() => alert('Clicked item 3')}>
        Application 3 (div with onClick)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="disabled_application_4a" isDisabled>
        Unavailable Application
      </ApplicationLauncherItem>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        items={appLauncherItems}
        toggleIcon={<HelpIcon />}
      />
    );
  }
}
```
