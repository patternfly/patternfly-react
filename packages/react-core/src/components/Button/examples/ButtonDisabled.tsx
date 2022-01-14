import React from 'react';
import { Button, Flex } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const ButtonDisabled: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column' }}>
    <Flex>
      <Button isDisabled>Primary disabled</Button>
      <Button isDisabled>Secondary disabled</Button>
      <Button variant="secondary" isDanger isDisabled>
        Danger secondary disabled
      </Button>
      <Button isDisabled variant="tertiary">
        Tertiary disabled
      </Button>
      <Button isDisabled variant="danger">
        Danger disabled
      </Button>
      <Button isDisabled variant="warning">
        Warning disabled
      </Button>
    </Flex>

    <Flex>
      <Button isDisabled variant="link" icon={<PlusCircleIcon />}>
        Link disabled
      </Button>
      <Button isDisabled variant="link" isInline>
        Inline link disabled
      </Button>
      <Button variant="link" isDanger isDisabled>
        Danger link disabled
      </Button>
      <Button isDisabled variant="plain" aria-label="Action">
        <TimesIcon />
      </Button>
      <Button isDisabled variant="control">
        Control disabled
      </Button>
    </Flex>
  </Flex>
);
