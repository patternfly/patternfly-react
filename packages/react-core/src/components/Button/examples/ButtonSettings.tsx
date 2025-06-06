import { Button, Flex } from '@patternfly/react-core';

export const ButtonSettings: React.FunctionComponent = () => (
  <Flex>
    <Button isSettings aria-label="Settings" />
    <Button isSettings>Settings</Button>
  </Flex>
);
