import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

const CancelButton = props => (
  <Button {...props}>
    <Icon type="pf" name="close" />
  </Button>
);

CancelButton.propTypes = {
  ...Button.propTypes
};

export default CancelButton;
