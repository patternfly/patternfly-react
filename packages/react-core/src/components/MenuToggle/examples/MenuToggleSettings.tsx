import { MenuToggle, Flex } from '@patternfly/react-core';

export const MenuToggleSettings: React.FunctionComponent = () => (
  <Flex>
    <MenuToggle isSettings>Settings</MenuToggle>
    <MenuToggle isSettings variant="plain" aria-label="Settings" />
  </Flex>
);
