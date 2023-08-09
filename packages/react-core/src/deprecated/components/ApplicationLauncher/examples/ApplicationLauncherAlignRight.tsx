import React from 'react';
import { DropdownPosition } from '@patternfly/react-core/deprecated';
import { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core/deprecated';

const appLauncherItems: React.ReactElement[] = [
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

export const ApplicationLauncherAlignRight: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = (_event: any, isOpen: boolean) => setIsOpen(isOpen);
  const onSelect = (_event: any) => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <ApplicationLauncher
      onSelect={onSelect}
      onToggle={onToggle}
      isOpen={isOpen}
      items={appLauncherItems}
      position={DropdownPosition.right}
      style={{ marginLeft: 'calc(100% - 46px)' }}
    />
  );
};
