import React from 'react';
import CloseIcon from '@patternfly/react-icons/dist/js/icons/close-icon';
import { Button } from '@patternfly/react-core';

export const CancelButton = props => (
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
