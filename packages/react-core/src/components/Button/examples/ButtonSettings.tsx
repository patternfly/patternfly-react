import { Button, Flex } from '@patternfly/react-core';

export const ButtonSettings: React.FunctionComponent = () => (
  <Flex>
    <Button isSettings variant="plain" aria-label="Settings" />
    <Button isSettings variant="control">
      Settings
    </Button>
  </Flex>
);
