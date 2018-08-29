import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

const ConfirmButton = props => (
  <Button {...props}>
    <Icon type="fa" name="check" />
  </Button>
);

ConfirmButton.propTypes = {
  ...Button.propTypes
};

ConfirmButton.defaultProps = {
  ...Button.defaultProps,
  bsStyle: 'primary'
};

export default ConfirmButton;
