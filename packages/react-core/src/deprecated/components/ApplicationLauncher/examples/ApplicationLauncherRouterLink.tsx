import React from 'react';
import { Link } from '@reach/router';
import {
  ApplicationLauncher,
  ApplicationLauncherItem,
  ApplicationLauncherContent
} from '@patternfly/react-core/deprecated';
import pfLogoSm from '@patternfly/react-core/src/demos/assets/pf-logo-small.svg';
/* eslint-disable camelcase */
import c_app_launcher__menu_item_Color from '@patternfly/react-tokens/dist/esm/c_app_launcher__menu_item_Color';

const icon: JSX.Element = <img src={pfLogoSm} />;

const linkStyle: React.CSSProperties = {
  color: c_app_launcher__menu_item_Color.var,
  textDecoration: 'none'
};

const appLauncherItems: React.ReactElement[] = [
  <ApplicationLauncherItem
    key="router1"
    component={
      <Link to="/" style={linkStyle}>
        @reach/router Link
      </Link>
    }
  />,
  <ApplicationLauncherItem
    key="router2"
    isExternal
    icon={icon}
    component={
      <Link to="/" style={linkStyle}>
        <ApplicationLauncherContent>@reach/router Link with icon</ApplicationLauncherContent>
      </Link>
    }
  />,
  <ApplicationLauncherItem key="application_1a" href="#">
    Application 1 (anchor link)
  </ApplicationLauncherItem>,
  <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
    Application 2 (button with onClick)
  </ApplicationLauncherItem>,
  <ApplicationLauncherItem key="disabled_application_4a" isDisabled>
    Unavailable application
  </ApplicationLauncherItem>
];

export const ApplicationLauncherRouterLink: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = (_event: any, isOpen: boolean) => setIsOpen(isOpen);
  const onSelect = (_event: any) => setIsOpen((prevIsOpen) => !prevIsOpen);

  return <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} />;
};
