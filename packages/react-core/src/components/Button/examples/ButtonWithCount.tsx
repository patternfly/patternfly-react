import React from 'react';
import { BadgeCountObject, Button, Flex } from '@patternfly/react-core';

export const ButtonWithCount: React.FunctionComponent = () => {
  const badgeCountObjectNotRead: BadgeCountObject = {
    isRead: false,
    count: 7,
    className: 'custom-badge-unread'
  };

  const badgeCountObjectRead: BadgeCountObject = {
    isRead: true,
    count: 10,
    className: 'custom-badge-read'
  };

  return (
    <>
      <div>Unread:</div>
      <Flex columnGap={{ default: 'columnGapSm' }}>
        <Button variant="primary" countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="secondary" countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="tertiary" countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="control" countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="link" countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
      </Flex>
      <br />
      <div>Unread disabled:</div>
      <Flex columnGap={{ default: 'columnGapSm' }}>
        <Button variant="primary" isDisabled countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="secondary" isDisabled countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="tertiary" isDisabled countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="control" isDisabled countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
        <Button variant="link" isDisabled countOptions={badgeCountObjectNotRead}>
          Issues
        </Button>
      </Flex>
      <br />
      <div>Read:</div>
      <Flex columnGap={{ default: 'columnGapSm' }}>
        <Button variant="primary" countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="secondary" countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="tertiary" countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="control" countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="link" countOptions={badgeCountObjectRead}>
          Issues
        </Button>
      </Flex>
      <br />
      <div>Read disabled:</div>
      <Flex columnGap={{ default: 'columnGapSm' }}>
        <Button variant="primary" isDisabled countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="secondary" isDisabled countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="tertiary" isDisabled countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="control" isDisabled countOptions={badgeCountObjectRead}>
          Issues
        </Button>
        <Button variant="link" isDisabled countOptions={badgeCountObjectRead}>
          Issues
        </Button>
      </Flex>
    </>
  );
};
