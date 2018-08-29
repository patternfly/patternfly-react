import React from 'react';
import PropTypes from 'prop-types';
import { SplitButton as BsSplitButton } from 'react-bootstrap';
import { BUTTON_BS_STYLES } from './ButtonConstants';

const SplitButton = props => <BsSplitButton {...props} />;

SplitButton.propTypes = {
  ...BsSplitButton.propTypes,
  // eslint-disable-next-line react/require-default-props
  bsStyle: PropTypes.oneOf(BUTTON_BS_STYLES)
};

SplitButton.BUTTON_BS_STYLES = BUTTON_BS_STYLES;

export default SplitButton;
