import React from 'react';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { Button } from '@patternfly/react-core/dist/js/components/Button/Button';

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
