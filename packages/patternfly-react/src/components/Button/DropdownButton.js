import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton as BsDropdownButton } from 'react-bootstrap';
import { BUTTON_BS_STYLES } from './ButtonConstants';

const DropdownButton = props => <BsDropdownButton {...props} />;

DropdownButton.propTypes = {
  ...BsDropdownButton.propTypes,
  // eslint-disable-next-line react/require-default-props
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};

DropdownButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default DropdownButton;
