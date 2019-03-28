import React from 'react';
import { CheckIcon } from '@patternfly/react-icons';
import { Button } from '@patternfly/react-core';

const ConfirmButton = props => (
  <Button {...props}>
    <CheckIcon />
  </Button>
);

ConfirmButton.propTypes = {
  ...Button.propTypes
};

ConfirmButton.defaultProps = {
  ...Button.defaultProps,
  variant: 'primary'
};

export default ConfirmButton;
