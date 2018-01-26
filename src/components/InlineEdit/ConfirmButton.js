import React from 'react';
import { Button, Icon } from '../../index';

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
