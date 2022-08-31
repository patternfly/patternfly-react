import React from 'react';
import { Button, Tooltip } from '@patternfly/react-core';

export const ButtonAriaDisabledTooltip: React.FunctionComponent = () => (
  <React.Fragment>
    <Tooltip content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.">
      <Button isAriaDisabled variant="secondary">
        Secondary button to core docs
      </Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip content="Aria-disabled link as button with tooltip">
      <Button component="a" isAriaDisabled href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
        Tertiary link as button to core docs
      </Button>
    </Tooltip>
  </React.Fragment>
);
