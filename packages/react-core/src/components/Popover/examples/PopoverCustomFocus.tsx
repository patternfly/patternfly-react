import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverCustomFocus: React.FunctionComponent = () => (
  <Popover
    elementToFocus="#popover-cancel-button"
    showClose={false}
    aria-label="Popover with custom focus"
    headerContent={<div>Popover header</div>}
    bodyContent={
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
        <Button
          // Preventing default click behavior for example purposes only
          onClick={(event: React.MouseEvent) => event.preventDefault()}
          component="a"
          isInline
          variant="link"
          href="#basic"
        >
          View the basic example
        </Button>
      </div>
    }
    footerContent={(hide) => (
      <Button onClick={hide} variant="secondary" id="popover-cancel-button">
        Cancel
      </Button>
    )}
  >
    <Button>Toggle popover with custom focus</Button>
  </Popover>
);
