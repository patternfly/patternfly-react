import React from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonCount: React.FunctionComponent = () => {
  const countValue: number = 7;

  return (
    <React.Fragment>
      <p>unread:</p>
      <Button variant="primary" count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="secondary" count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="control" count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="link" count={countValue}>
        View issues
      </Button>{' '}
      <br />
      <p>unread disabled:</p>
      <Button variant="primary" isDisabled count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled count={countValue}>
        View issues
      </Button>{' '}
      <br />
      <p>read:</p>
      <Button variant="primary" isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="control" isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="link" isRead count={countValue}>
        View issues
      </Button>{' '}
      <br />
      <p>read disabled:</p>
      <Button variant="primary" isDisabled isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="secondary" isDisabled isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="tertiary" isDisabled isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="control" isDisabled isRead count={countValue}>
        View issues
      </Button>{' '}
      <Button variant="link" isDisabled isRead count={countValue}>
        View issues
      </Button>{' '}
      <br />
    </React.Fragment>
  );
};
