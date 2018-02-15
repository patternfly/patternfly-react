import { Button as BsButton } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_BS_STYLES } from './ButtonConstants';

const Button = props => <BsButton {...props} />;

Button.propTypes = {
  ...BsButton.propTypes,
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};

Button.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default Button;
