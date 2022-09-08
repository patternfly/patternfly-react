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
      <p>unread:</p>
      <Button variant="primary" badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>unread disabled:</p>
      <Button variant="primary" isDisabled badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled badgeVariant={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>read:</p>
      <Button variant="primary" badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
      <p>read disabled:</p>
      <Button variant="primary" isDisabled badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled badgeVariant={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
    </React.Fragment>
  );
};
