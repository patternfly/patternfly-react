import React from 'react';
import { CloseIcon } from '@patternfly/react-icons';
import { Button } from '@patternfly/react-core';

const CancelButton = props => (
  <Button {...props}>
    <CloseIcon />
  </Button>
);

CancelButton.propTypes = {
  ...Button.propTypes
};

CancelButton.defaultProps = {
  ...Button.defaultProps,
  variant: 'plain'
};

export default CancelButton;
