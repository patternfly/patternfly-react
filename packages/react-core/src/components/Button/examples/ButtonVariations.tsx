import React from 'react';
import { Button, Flex } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';

export const ButtonVariations: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column' }} alignItems={{ default: 'alignItemsFlexStart' }}>
    <Flex>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" isDanger>
        Danger Secondary
      </Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
    </Flex>

    <Flex>
      <Button variant="link" icon={<PlusCircleIcon />}>
        Link
      </Button>
      <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="right">
        Link
      </Button>
      <Button variant="link" isInline>
        Inline link
      </Button>
      <Button variant="link" isDanger>
        Danger link
      </Button>
    </Flex>

    <Button variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>

    <Flex>
      <Button variant="control">Control</Button>
      <Button variant="control" aria-label="Copy">
        <CopyIcon />
      </Button>
    </Flex>
  </Flex>
);
