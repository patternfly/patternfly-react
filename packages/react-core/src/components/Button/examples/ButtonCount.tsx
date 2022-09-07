import React from 'react';
import { BadgeCountProps, Button } from '@patternfly/react-core';

export const ButtonWithCount: React.FunctionComponent = () => {
  const badgeCountObjectNotRead: BadgeCountProps = {
    isRead: false,
    count: 7,
    className: 'custom-badge-unread'
  };

  const badgeCountObjectRead: BadgeCountProps = {
    isRead: true,
    count: 10,
    className: 'custom-badge-read'
  };

  return (
    <React.Fragment>
      <p>unread:</p>
      <Button variant="primary" badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>unread disabled:</p>
      <Button variant="primary" isDisabled badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled badgeProps={badgeCountObjectNotRead}>
        View issues
      </Button>{' '}
      <br />
      <p>read:</p>
      <Button variant="primary" badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
      <p>read disabled:</p>
      <Button variant="primary" isDisabled badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled badgeProps={badgeCountObjectRead}>
        View issues
      </Button>{' '}
      <br />
    </React.Fragment>
  );
};
