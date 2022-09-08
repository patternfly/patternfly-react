import React from 'react';
import { BadgeCountObject, Button } from '@patternfly/react-core';

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
    <React.Fragment>
      <p>Unread:</p>
      <Button variant="primary" countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>Unread disabled:</p>
      <Button variant="primary" isDisabled countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled countOptions={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>Read:</p>
      <Button variant="primary" countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
      <p>Read disabled:</p>
      <Button variant="primary" isDisabled countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled countOptions={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
    </React.Fragment>
  );
};
